/// <reference types="request" />
import * as request from 'request';
import { Transporter } from './transporters';
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
export declare type IRequestOptions = request.OptionsWithUri & {
    expectedStatusCodes: number[];
};
/**
 * base service class
 * @export
 * @class Service
 */
export declare class Service {
    options: IOptions;
    requestOptions: request.CoreOptions;
    constructor(options: IOptions, requestOptions?: request.CoreOptions);
    /**
     * Create and send request to API
     */
    request(options: IRequestOptions): Promise<any>;
}
