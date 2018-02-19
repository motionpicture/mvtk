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
        this.errors = this.parseErrorMessage();
    }
    /**
     * エラーメッセージパース
     * @method parseErrorMessage
     * @returns {IError[]}
     */
    private parseErrorMessage(): IError[] {
        // 継承元のErrorでmessageはstringに変換される
        if (this.message.length === 0) {
            return [];
        }
        // const errorMessage = querystring.parse(this.message);
        // const codeArray: string[] = (<string>errorMessage.ErrCode).split('|');
        // const infoArray: string[] = (<string>errorMessage.ErrInfo).split('|');

        return <any>{};
    }
}

/**
 * エラー詳細
 * @interface IError
 */
export interface IError {
    /**
     * エラー番号
     */
    errorNumber: string;
    /**
     * コード
     */
    code: string;
    /**
     * 詳細コード
     */
    info: string;
    /**
     * メッセージ
     */
    message: string;
}
