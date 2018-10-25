// tslint:disable:max-classes-per-file
/**
 * transporters
 * @ignore
 */

import * as createDebug from 'debug';
import * as fs from 'fs-extra';
import * as moment from 'moment';
// import * as querystring from 'querystring';
import * as request from 'request';
import { URL } from 'url';
// import * as fetch from 'isomorphic-fetch';
// import { BadRequestError } from './error/badRequest';

const debug = createDebug('mvtk:transporters');
// tslint:disable-next-line
const pkg = require('../package.json');
// tslint:disable-next-line:variable-name no-var-requires no-require-imports
const log4js = require('log4js');

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
export abstract class Transporter {
    public abstract async request(options: request.OptionsWithUrl): Promise<any>;
}

export type IBodyResponseCallback = Promise<any>;

/**
 * RequestError
 * @export
 * @class
 */
export class RequestError extends Error {
    public code: number;
    public errors: Error[];
}

/**
 * stub transporter
 * スタブトランポーター
 * @export
 * @class
 */
export class StubTransporter implements Transporter {
    public body: any;
    constructor(body: any) {
        this.body = body;
    }

    public async request(options: request.OptionsWithUrl) {
        debug('requesting...', options);

        return this.body;
    }
}

/**
 * DefaultTransporter
 * @export
 * @class
 */
export class DefaultTransporter implements Transporter {

    /**
     * Default user agent.
     */
    public static readonly USER_AGENT: string = `mvtk/${pkg.version}`;

    public expectedStatusCodes: number[];

    constructor(expectedStatusCodes: number[]) {
        this.expectedStatusCodes = expectedStatusCodes;
    }

    /**
     * Configures request options before making a request.
     */
    public static CONFIGURE(options: request.OptionsWithUrl): request.OptionsWithUrl {
        // set transporter user agent

        options.headers = (options.headers !== undefined) ? options.headers : {};
        if (!options.headers['User-Agent']) {
            options.headers['User-Agent'] = DefaultTransporter.USER_AGENT;
        } else if (options.headers['User-Agent'].indexOf(DefaultTransporter.USER_AGENT) === -1) {
            options.headers['User-Agent'] = `${options.headers['User-Agent']} ${DefaultTransporter.USER_AGENT}`;
        }

        return options;
    }

    /**
     * Makes a request with given options and invokes callback.
     */
    public async request(options: request.OptionsWithUrl) {
        const requestOptions = DefaultTransporter.CONFIGURE(options);

        if (process.env.REST_LOGGING_ENABLED === '1') {
            const logger4rest: any = await this.setRestlogger(<string>requestOptions.url)
                .catch((err) => {
                    throw new Error(err);
                });
            logger4rest.info('MvtkService calling...', <string>requestOptions.url, requestOptions);
        }

        return new Promise<any>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                debug('error', error);
                try {
                    const result = this.wrapCallback(error, response, body);
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            });
        });

        // debug('requesting...', requestOptions);
    }

    /**
     * rest用のロガーを設定する
     * endpoint毎に1ログファイル
     */
    protected setRestlogger = async (endpoint: string) => {
        const url = new URL(endpoint);
        const env = process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : 'dev';
        let logDir = `${process.cwd()}/logs/${env}/frontend/rest/${moment().format('YYYYMMDD')}`;

        // host以下のpathをdir構造でログ出力
        const path = url.pathname.split('/');
        if (path.length > 1) {
            for (let i = 0; i < path.length - 1; i += 1) {
                logDir += `/${path[i]}`;
            }
        }

        return new Promise<void | any>((resolve, reject) => {
            fs.mkdirs(logDir, (err: any) => {
                if (err) {
                    reject(new Error('ログの作成に失敗しました。'));
                }

                log4js.configure({
                    appenders: [
                        {
                            category: 'rest',
                            type: 'dateFile',
                            filename: `${logDir} /${path[path.length - 1]}.log`,
                            pattern: '-yyyy-MM-dd',
                            backups: 3
                        }
                    ],
                    levels: {
                        wsdl: 'ALL'
                    }
                });

                resolve(log4js.getLogger('rest'));
            });
        });
    }

    /**
     * Wraps the response callback.
     */
    private wrapCallback(error: any, response: request.RequestResponse, body: any): any {
        debug('request processed.', error, response.statusCode, body);
        let err: any = new RequestError('An unexpected error occurred');

        // tslint:disable-next-line:no-single-line-block-comment
        /* istanbul ignore else */
        if (response.statusCode !== undefined) {
            if (this.expectedStatusCodes.indexOf(response.statusCode) < 0) {
                err = new RequestError(body);
                err.code = response.statusCode;
                err.errors = [];
            } else {
                // 結果をオブジェクトとして返却
                let result;
                try {
                    result = JSON.parse(body);
                } catch {
                    result = {};
                }

                return result;
            }
        }

        throw err;
    }
}
