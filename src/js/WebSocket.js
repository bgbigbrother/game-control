import config from "./config";
import Api from './Api';

export default class WS {

    #message = {
        type: "command", // ENUM: "command", "frame"
        meta: "", // Payload meta data
        data: "", // Payload
        id: "", // Unique ID in case we need to map request and response
        date: new Date(Date.now()).toISOString() // Date and time in milliseconds
    }
    
    constructor() {
        this.rest = new Api();
        this.rest.getToken();
    }

    handleFrame () {
        // Interface
    }

    connect() {
        this.socket = new WebSocket(config.wsURL);
        this.socket.addEventListener('open', this.open);
        this.socket.addEventListener('error', this.error);
        this.socket.addEventListener('message', this.message);
    }

    open = (event) => {
        //this.socket.send('Hello Server!');
    }

    send(type = "", data = "") {
        this.#message.id = config.guid();
        this.#message.meta = type;
        this.#message.data = data;
        this.#message.date = new Date(Date.now()).toISOString();
        this.socket.send(JSON.stringify(this.#message));
        if(type.method == "mark") {
            this.addCamera();
        }
    }

    message = (event) => {
        let message = JSON.parse(event.data);
        if(message.type === "frame") {
            this.handleFrame(message);
        } else {
            this.processMessage(message)
        }
    }

    processMessage(message) {
        if(message.type == "camera-created") {
            this.addCamera(message.data);
        }
    }

    addCamera(message) {
        if(message) {
            this.rest.api.recordingServer.getAllrecordingServers( (error, data, response) => {
                let recordingServerId = data._array[0].id
                this.rest.api.recordingServer.getAllhardwareDriversInArecordingServers(recordingServerId, (error, data, response)=>{
                    let driverId = null;
                    data._array.forEach(driver => {
                        if(driver.name == config.cameraDriver) {
                            driverId = driver.id;
                        }
                    });
                    this.rest.api.recordingServer.postTaskForrecordingServers(recordingServerId, "AddHardware", {body: JSON.stringify({
                        hardwareAddress: config.cameraURL,
                        hardwareDriverPath: {
                            "type": "hardwareDrivers",
                            "id": driverId
                        },
                        userName: message,
                        customData: message
                    })}, (error, data, response) => {
                        this.taskInterval = setInterval(() => {
                            this.rest.api.core.gettasksById(data.result.path.id, null, (error, data, response) => {
                                let result = JSON.parse(response.text);
                                if(result.data.state == "Success" || result.data.state== "Error") {
                                    clearInterval(this.taskInterval);
                                    this.taskInterval = null;
                                    let hardwareId = result.data.path.id;
                                    this.rest.api.device.gethardwareById( hardwareId, null, (error, data, response) => {
                                        data.data.enabled = true;
                                        data.data.displayName = message;
                                        data.data.name = message;
                                        this.rest.api.device.patchhardwareById(data.data.id, {body: data.data}, (error, data, response) => {
                                        })
                                    });
                                    this.rest.api.device.getAllcamerasInAhardware(hardwareId, (error, data, response) => {
                                        let camera = data._array[0];
                                        camera.enabled = true;
                                        this.rest.api.device.putcamerasById(camera.id, {body: camera}, () => {});
                                    });
                                }
                            })
                        }, 1000);
                    })
                })
            });
        }
    }

    error = (event) => {
        console.error(event);
    }
}