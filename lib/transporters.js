"use strict";
// tslint:disable:max-classes-per-file
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * transporters
 * @ignore
 */
const createDebug = require("debug");
// import * as querystring from 'querystring';
const request = require("request");
// import * as fetch from 'isomorphic-fetch';
// import { BadRequestError } from './error/badRequest';
const debug = createDebug('mvtk:transporters');
// tslint:disable-next-line
const pkg = require('../package.json');
/**
 * transporter abstract class
 * トランスポーター抽象クラス
 * @export
 * @class
 * @abstract
 */
// export abstract class Transporter {
//     public abstract async request(url: string, options: RequestInit): Promise<any>;
// }
class Transporter {
}
exports.Transporter = Transporter;
/**
 * RequestError
 * @export
 * @class
 */
class RequestError extends Error {
}
exports.RequestError = RequestError;
/**
 * stub transporter
 * スタブトランポーター
 * @export
 * @class
 */
class StubTransporter {
    constructor(body) {
        this.body = body;
    }
    request(options) {
        return __awaiter(this, void 0, void 0, function* () {
            debug('requesting...', options);
            return this.body;
        });
    }
}
exports.StubTransporter = StubTransporter;
/**
 * DefaultTransporter
 * @export
 * @class
 */
class DefaultTransporter {
    constructor(expectedStatusCodes) {
        this.expectedStatusCodes = expectedStatusCodes;
    }
    /**
     * Configures request options before making a request.
     */
    static CONFIGURE(options) {
        // set transporter user agent
        options.headers = (options.headers !== undefined) ? options.headers : {};
        if (!options.headers['User-Agent']) {
            options.headers['User-Agent'] = DefaultTransporter.USER_AGENT;
        }
        else if (options.headers['User-Agent'].indexOf(DefaultTransporter.USER_AGENT) === -1) {
            options.headers['User-Agent'] = `${options.headers['User-Agent']} ${DefaultTransporter.USER_AGENT}`;
        }
        return options;
    }
    /**
     * Makes a request with given options and invokes callback.
     */
    request(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestOptions = DefaultTransporter.CONFIGURE(options);
            debug('requesting...', requestOptions);
            return new Promise((resolve, reject) => {
                request(requestOptions, (error, response, body) => {
                    debug('error', error);
                    try {
                        const result = this.wrapCallback(error, response, body);
                        resolve(result);
                    }
                    catch (err) {
                        reject(err);
                    }
                });
            });
        });
    }
    /**
     * Wraps the response callback.
     */
    wrapCallback(error, response, body) {
        debug('request processed.', error, response.statusCode, body);
        let err = new RequestError('An unexpected error occurred');
        // tslint:disable-next-line:no-single-line-block-comment
        /* istanbul ignore else */
        if (response.statusCode !== undefined) {
            if (this.expectedStatusCodes.indexOf(response.statusCode) < 0) {
                err = new RequestError(body);
                err.code = response.statusCode;
                err.errors = [];
            }
            else {
                // 結果をオブジェクトとして返却
                return JSON.parse(body);
            }
        }
        throw err;
    }
}
/**
 * Default user agent.
 */
DefaultTransporter.USER_AGENT = `mvtk/${pkg.version}`;
exports.DefaultTransporter = DefaultTransporter;
