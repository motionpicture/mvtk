/**
 * @namespace error/badRequestError
 * @desc エラー
 */
// import * as querystring from 'querystring';

/**
 * エラー
 * @memberof error/badRequestError
 * @class BadRequestError
 * @extends Error
 */
export class BadRequestError extends Error {
    public errors: IError[];

    constructor(message?: string) {
        super(message);
        this.name = 'mvtkServiceBadRequestError';
    }
}

/**
 * エラー詳細
 * @interface IError
 */
export interface IError {
    /**
     * コード
     */
    code: string;
    /**
     * メッセージ
     */
    message: string;
}
