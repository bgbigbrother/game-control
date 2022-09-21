import config from "./config";
export default class Controls {

    #keyId = null;

    #mouseId = null;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.coord = { x: 0, y: 0 };
    }

    sendMessage (type, data) {
        // Interface 
    }

    handleFrame(data) {
        this.drawImage(data.data);
    }

    addListeners() {
        document.addEventListener('mousedown', this.start);
        document.addEventListener('mouseup', this.stop);
        document.addEventListener('keydown', this.keys);
        window.addEventListener('resize', this.resize);
        this.canvas.addEventListener('dblclick', this.dblclick);
        this.resize();
    }


    drawImage(data) {
        const img = new Image();
        img.onload = () => {
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
        };
        img.src = "data:image/jpg;base64," + data;
    }

    start = (event) => {
        this.clickTimeout = setTimeout(() => {
            clearTimeout(this.clickTimeout);
            this.clickTimeout = null;
            this.#mouseId = crypto.randomUUID();
            document.addEventListener('mousemove', this.rotate);
            this.rotate(event);
            this.sendMessage({method: "rotate", sequenceId: this.#mouseId}, this.coord);
        }, config.dblClickTreshold);
        
    }

    stop = (event) => {
        if(this.clickTimeout) {
            clearTimeout(this.clickTimeout);
            this.clickTimeout = null;
        } else {
            document.removeEventListener('mousemove', this.rotate);
            this.sendMessage({method: "stop", sequenceId: this.#mouseId});
            this.#mouseId =  null;
        }
        
    }

    dblclick = (event) => {
        this.sendMessage({method: "mark"}, this.coord);
    }

    resize = (event) => {
        this.ctx.canvas.width = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;
    }

    draw = (event) => {
        this.ctx.beginPath();
        this.ctx.lineWidth = 5;
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = '#ACD3ED';
        this.ctx.moveTo(this.coord.x, this.coord.y);
        this.reposition(event);
        this.ctx.lineTo(this.coord.x, this.coord.y);
        this.ctx.stroke();
    }

    keys = (event) => {
        if(config.keys[event.keyCode]) {
            document.removeEventListener('keydown', this.keys);
            document.addEventListener('keyup', this.keyup);
            this.#keyId = crypto.randomUUID();
            this.sendMessage({method: config.keys[event.keyCode], sequenceId: this.#keyId});
        }
    }

    keyup = (event) => {
        document.removeEventListener('keyup', this.keyup);
        document.addEventListener('keydown', this.keys);
        this.sendMessage({method: "stop", sequenceId: this.#keyId});
        this.#keyId = null;
    }

    rotate = (event) => {
        event && this.reposition(event);
        this.sendMessage({method: "rotate", sequenceId: this.#mouseId}, this.coord);
    }

    reposition(event) {
        this.coord.x = event.clientX - canvas.offsetLeft;
        this.coord.y = event.clientY - canvas.offsetTop;
        this.coord.width = this.canvas.width;
        this.coord.height = this.canvas.height;
    }
}