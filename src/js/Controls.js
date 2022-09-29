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
        document.addEventListener('pointerlockchange', this.move, false);
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
            this.#mouseId = config.guid();
            this.canvas.requestPointerLock();
            document.addEventListener('mousemove', this.rotate);
        }, config.dblClickTreshold);
        
    }

    move = (event) => {
        this.rotate(event);
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
        if (document.pointerLockElement === this.canvas) {
            document.exitPointerLock();
        }
    }

    dblclick = (event) => {
        event && this.reposition(event);
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
            this.#keyId = config.guid();
            this.keyInterval = setInterval(() => {
                this.sendMessage({method: config.keys[event.keyCode], sequenceId: this.#keyId});
            }, 100);
        }
    }

    keyup = (event) => {
        this.keyInterval && clearInterval(this.keyInterval);
        this.keyInterval = null;
        document.removeEventListener('keyup', this.keyup);
        document.addEventListener('keydown', this.keys);
        this.sendMessage({method: "stop", sequenceId: this.#keyId});
        this.#keyId = null;
    }

    rotate = (event) => {
        event && this.reposition(event);
        this.sendMessage({method: "rotate", sequenceId: this.#mouseId}, {stepX: event.movementX || 0, stepY: event.movementY || 0});
    }

    reposition(event) {
        this.coord.x = event.clientX - canvas.offsetLeft;
        this.coord.y = event.clientY - canvas.offsetTop;
        this.coord.width = this.canvas.width;
        this.coord.height = this.canvas.height;
    }
}