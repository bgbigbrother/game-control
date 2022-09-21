require('../css/main.css');
import App from "./App";

let loadApp = () => {
    const canvas = document.getElementById('canvas');
    let app = new App(canvas);
}
  
window.addEventListener('load', loadApp);