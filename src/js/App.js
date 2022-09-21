import Controls from './Controls.js';
import Socket from './WebSocket.js';

export default class App {
    constructor(canvas, video) {
        this.contols = new Controls(canvas, video);
        this.contols.addListeners();
        this.contols.sendMessage = this.sendMessage;
        this.ws = new Socket();
        this.ws.connect();
        this.ws.handleFrame = this.handleFrame;
    }

    sendMessage = (type = "", data = "") => {
        this.ws.send(type, data)
    }

    handleFrame = (data) => {
        this.contols.handleFrame(data);
    }
}