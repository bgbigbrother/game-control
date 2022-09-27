import config from "./config";

export default class WS {

    #message = {
        type: "command", // ENUM: "command", "frame"
        meta: "", // Payload meta data
        data: "", // Payload
        id: "", // Unique ID in case we need to map request and response
        date: new Date(Date.now()).toISOString() // Date and time in milliseconds
    }
    
    constructor() {
        
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
    }

    message = (event) => {
        let message = JSON.parse(event.data);
        if(message.type === "frame") {
            this.handleFrame(message);
        } else {
            console.log('Message from server ', message);
        }
    }

    error = (event) => {
        console.error(event);
    }
}