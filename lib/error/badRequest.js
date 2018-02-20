"use strict";
/**
 * @namespace error/badRequestError
 * @desc エラー
 */
// import * as querystring from 'querystring';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * エラー
 * @memberof error/badRequestError
 * @class BadRequestError
 * @extends Error
 */
class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.name = 'mvtkServiceBadRequestError';
    }
}
exports.BadRequestError = BadRequestError;
