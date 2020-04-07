/**
 * campaign.factory
 */

export interface IUserCommon {
    /**
     * 会員コード
     */
    kiinCd: string;
}

export interface IEntryArgs {
    /**
     * キャンペーン管理番号（12桁）
     */
    cmpgnknrNo: string;
    /**
     * 会員コード
     */
    kiinCd: string;
}

export interface ITempRegistResult {
    /**
     * 会員コード
     */
    kiinCd: string;
}

export interface IRegistArgs {
    /**
     * 本番登録用URL
     */
    kiinCd: string;
    /**
     * 会員パスワード
     */
    kiinPwd: string;
    /**
     * 会員生年月日
     */
    kiinsiYmd: string;
    /**
     * メルマガ希望フラグ
     */
    mlmgznkbFlg: string;
}

export interface IEditArgs {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * 会員姓名称
     */
    kiinsiNm?: string;
    /**
     * 会員名名称
     */
    kiimmiNm?: string;
    /**
     * 性別区分
     */
    sibtsTyp?: string;
    /**
     * 会員生年月日
     */
    kiinsiYmd: string;
    /**
     * 都道府県コード
     */
    tdfknCd?: string;

    kiinshgikykNo?: string;

    kiinshnikykNo?: string;

    kiinknyshNo?: string;
    /**
     * 会員メールアドレス
     */
    kiinMladdr: string;
    /**
     * メルマガ希望フラグ
     */
    mlmgznkbFlg: string;
}

export interface ITopInfoArgs {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
}

export interface IEditResult {
    /**
     * 会員コード
     */
    kiinCd: string;
}

export interface IAuthentication {
    /**
     * 会員メールアドレス
     */
    kiinMladdr: string;
    /**
     * 会員パスワード
     */
    kiinPwd: string;
}

export interface IAuthenticationResult {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * 会員メールアドレス
     */
    kiinMladdr: string;
    /**
     * ムビチケ必須項目無フラグ
     */
    mvtckthsskmknshFlg: string;
    /**
     * 会員コード(暗号化)
     */
    encryptKiinCd: string;
}

export interface IUserError {
    error: {
        /**
         * エラーコード
         */
        code: string;
        /**
         * エラーメッセージ
         */
        message: string;
    };
}

export interface IDetailsResult {
    /**
     * キャンペーンステータス区分
     */
    cmpgnsttsTyp: string;
    /**
     * バナーURL
     */
    bnnrUrl: string;
}

export interface ITopInfoResult {
    /**
     * 表示名
     */
    hyjNm: string;
    /**
     * ポイント残高
     */
    ptZndk: number;
    /**
     * 「観たい」登録数
     */
    mtitrkNum: number;
    /**
     * 利用前作品数
     */
    rymeskhnNum: number;
}

export interface ITokenArgs {
    /**
     * 会員コード
     */
    kiinCd: string;
}

export interface ITokenResult {
    /**
     * アクセストークン
     */
    accessToken: string;
}

export interface ITokenArgs {
    /**
     * 会員コード
     */
    kiinCd: string;
}

export interface ITokenResult {
    /**
     * アクセストークン
     */
    accessToken: string;
}

export interface ICheckAuthenticationCodeArgs {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * 認証コード
     */
    authenticationCode: string;
}