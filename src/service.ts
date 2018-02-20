// import * as qs from 'qs';
import * as request from 'request';

import { DefaultTransporter, Transporter } from './transporters';

/**
 * service constructor options
 * @export
 * @interface
 */
export interface IOptions {
    /**
     * API endpoint
     * @example
     * http://localhost:8081
     */
    endpoint: string;
    /**
     * accessKey
     */
    accessKey: string;
    /**
     * transporter object
     */
    transporter?: Transporter;
}

export type IRequestOptions = request.OptionsWithUri & {
    expectedStatusCodes: number[];
};

/**
 * base service class
 * @export
 * @class Service
 */
export class Service {
    public options: IOptions;
    public requestOptions: request.CoreOptions;

    constructor(options: IOptions, requestOptions?: request.CoreOptions) {
        this.options = options;

        this.requestOptions = {
            headers: {},
            method: 'GET'
        };
        if (requestOptions !== undefined) {
            this.requestOptions = { ...this.requestOptions, ...requestOptions };
        }
    }

    /**
     * Create and send request to API
     */
    public async request(options: IRequestOptions) {
        const requestOptions = {
            url: `${this.options.endpoint}${options.uri}`,
            ...this.requestOptions,
            ...options
        };

        requestOptions.headers = {
            Authorization: `ApiKey ${this.options.accessKey}`,
            'Content-Type': 'application/json'
        };

        delete requestOptions.uri;

        // create request
        const transporter =
            (this.options.transporter !== undefined) ? this.options.transporter : new DefaultTransporter(options.expectedStatusCodes);

        return transporter.request(requestOptions);
    }
}
