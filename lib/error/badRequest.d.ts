/**
 * @namespace error/badRequestError
 * @desc エラー
 */
/**
 * エラー
 * @memberof error/badRequestError
 * @class BadRequestError
 * @extends Error
 */
export declare class BadRequestError extends Error {
    errors: IError[];
    constructor(message?: string);
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
