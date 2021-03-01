/**
 * user.factory
 */

export interface IUserCommon {
    /**
     * 会員コード
     */
    kiinCd: string;
}

export interface ITempRegistArgs {
    /**
     * 会員メールアドレス
     */
    kiinMladdr: string;
    /**
     * 会員登録前決済管理番号
     */
    kiintrkmekssiknrNo?: string;
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
    /**
     * ユーザー名
     */
    usrNm?: string;
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

export interface IInfoResult {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * 会員メールアドレス
     */
    kiinMladdr: string;
    /**
     * 会員メールアドレスデバイス区分
     */
    kiinmladdrssdvcTyp: string;
    /**
     * 表示名
     */
    hyjNm: string;
    /**
     * 会員姓名称
     */
    kiinsiNm: string;
    /**
     * 会員名名称
     */
    kiimmiNm: string;
    /**
     * 性別区分
     */
    sibtsTyp: string;
    /**
     * 会員生年月日
     */
    kiinsiYmd: string;
    /**
     * 都道府県コード
     */
    tdfknCd: string;
    /**
     * 会員市外局番号
     */
    kiinshgikykNo: string;
    /**
     * 会員市内局番号
     */
    kiinshnikykNo: string;
    /**
     * 会員加入者番号
     */
    kiinknyshNo: string;
    /**
     * メルマガ希望フラグ
     */
    mlmgznkbFlg: string;
    /**
     * 会員コード(暗号化)
     */
    encryptKiinCd: string;
    /**
     * ユーザー名
     */
    usrNm?: string;
    /**
     * プロフィール画像URL
     */
    prflgzUrl?: string;
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

export interface ICcheckPasswordResetAuthenticationCodeArgs {
    /**
     * メールアドレス
     */
    kiinMladdr: string;
    /**
     * 認証コード
     */
    authenticationCode: string;
}

export interface ICcheckPasswordResetAuthenticationCodeResult {
    /**
     * 会員コード
     */
    kiinCd: string;
}

export interface IEditPasswordArgs {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * 現在のパスワード
     */
    kiinGnzipwd: string;
    /**
     * 新パスワード
     */
    kiinSnpwd: string;
}

export interface ILoginNotifyArgs {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * ログインIPアドレス
     */
    lginIpAddr: string;
    /**
     * ログインUser-Agent
     */
    lginusragntTxt: string;
    /**
     * ログインアカウント名称（mail／facebook／twitter／yahoo／line／gplus／rakuten／apple）
     */
    lginaccuntNm: string;
    /**
     * ログインサービス区分（01：ムビチケ／02：MWアプリ／03：MWPRESS）
     */
    lginsrvcTyp: string;
}
