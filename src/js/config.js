export default {
    wsURL: "ws://" + window.location.host + "/ws",
    keys: {
        65: "left",
        68: "right",
        87: "forward",
        83: "backwards",
        69: "up",
        81: "down"
    },
    dblClickTreshold: 500,
    jwt_token: "",
    vms: "http://localhost:8080",
    idpRelativePath: "/idp/connect/token",
    apiRelativePath: "/API/rest/v1",
    cameraDriver: "VPS Driver", //VPS Driver ; StableFPS
    cameraURL: "http://127.0.0.1:10101",
    vmsUser: "",
    vmsPass: "",
    guid: function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
}