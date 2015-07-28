import Sync = require("./sync");
/**
 * Creates a new synchronized HttpRequest
 * @class HttpRequest
 */
class HttpRequest{
    
    private driver: any;

    public constructor(){
        this.driver = require('request');
    }

    /**
     * Makes GET request
     * @param {String} host Host URL
     * @param {Object} options
     * @returns {any}
     */
    public get(host: string, callback?: (error: Error, response: any, body: string)=>void): void | any {
        if(callback) this.driver.get(host, callback);
        else{
            var output: any = Sync.run(this.driver.get, host);
            if(output instanceof Error) throw output;
            else return output;
        }
    }

    /**
     * Makes POST request
     * @param {String} host Host URL
     * @param {Object} options
     * @returns {any}
     */
    public post(host: string, data: any, callback?: (error: Error, response: any, body: string)=>void): any {
        if(callback) this.driver.post({url: host, formData: data}, callback);
        else{
            var output: any = Sync.run(this.driver.post, {url: host, formData: data});
            if(output instanceof Error) throw output;
            else return output;
        }
    }
}

export = HttpRequest;