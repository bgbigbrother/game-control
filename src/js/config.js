export default {
    wsURL: "ws://" + window.location.host + "/ws",
    keys: {
        65: "left",
        68: "right",
        87: "forward",
        83: "backwards"
    },
    dblClickTreshold: 500,
    guid: function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
}