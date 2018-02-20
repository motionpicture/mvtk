"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const transporters_1 = require("./transporters");
/**
 * base service class
 * @export
 * @class Service
 */
class Service {
    constructor(options, requestOptions) {
        this.options = options;
        this.requestOptions = {
            headers: {},
            method: 'GET'
        };
        if (requestOptions !== undefined) {
            this.requestOptions = Object.assign({}, this.requestOptions, requestOptions);
        }
    }
    /**
     * Create and send request to API
     */
    request(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestOptions = Object.assign({ url: `${this.options.endpoint}${options.uri}` }, this.requestOptions, options);
            requestOptions.headers = {
                Authorization: `ApiKey ${this.options.accessKey}`,
                'Content-Type': 'application/json'
            };
            delete requestOptions.uri;
            // create request
            const transporter = (this.options.transporter !== undefined) ? this.options.transporter : new transporters_1.DefaultTransporter(options.expectedStatusCodes);
            return transporter.request(requestOptions);
        });
    }
}
exports.Service = Service;
