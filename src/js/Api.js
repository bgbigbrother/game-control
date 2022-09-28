import config from "./config";
import Token from './Token';
import {ApiClient, RSApi, CoreApi, DeviceConfigApi} from "../rest-api/src/index";

export default class Api {
    
    #accessToken = null;

    constructor() {
    }

    initAPI() {
        let defaultClient = ApiClient.instance;
        let bearerAuth = defaultClient.authentications['bearerAuth'];
        bearerAuth.type = 'oauth2';
        bearerAuth.accessToken = this.#accessToken.getValue();

        let recordingServer = new RSApi();
        recordingServer.apiClient.basePath = config.vms + config.apiRelativePath;

        let core = new CoreApi();
        core.apiClient.basePath = config.vms + config.apiRelativePath;

        let device = new DeviceConfigApi();
        device.apiClient.basePath = config.vms + config.apiRelativePath;

        this.api = {
            recordingServer: recordingServer,
            core: core,
            device: device
        }
    }

    async getToken() {
        const response = await fetch(config.vms + config.idpRelativePath, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: "grant_type=password&username=" + config.vmsUser +"&password=" + config.vmsPass + "&client_id=GrantValidatorClient"
        });
        response.json().then((data) => {
            this.#accessToken = new Token(data);
            this.initAPI();
        });
    }
}