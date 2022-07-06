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
    usrNm: string | null;
    /**
     * プロフィール画像URL
     *
     * 未設定の場合はNoImage画像のURLがデフォルト値となる
     */
    prflgzUrl: string;

    /**
     * プロフィール画像未設定フラグ
     */
    prflgzMstiFlg: boolean;
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

export interface IRegistImageArgs {
    /**
     * プロフィール画像ファイル(Base64エンコード)
     */
    prflgzFl: string;
    /**
     * プロフィール画像MIMEタイプ
     */
    prflgzTyp: string;
}

export interface IRegistImageResult {
    /**
     * プロフィール画像URL
     */
    prflgzUrl: string;
}

export interface IDeleteImageResult {
    /**
     * プロフィール未設定画像URL
     */
    prflgzMstiUrl: string;
}

export interface IContactUsArgs {
    /**
     * 問合せ区分
     * - 01:ムビチケについて
     * - 02:MOVIE WALKER PRESS について
     * - 03:MOVIE WALKER 会員について
     * - 04:MOVIE WALKER 会員退会希望
     * - 05:その他ご意見、お問い合わせ
     * - 06:MOVIE WALKER PRESS レビュー違反
     */
    tiawsTyp: string;
    /**
     * 問合せ者 姓（最大15文字）
     */
    tiawsshsiNm: string;
    /**
     * 問合せ者 名（最大15文字）
     */
    tiawsshmiNm: string;
    /**
     * 問合せ者メールアドレス（最大128文字）
     */
    tiawsshMladdr: string;
    /**
     * 問合せ者市外局番（最大5文字）
     */
    tiawsshshgikykNo: string;
    /**
     * 問合せ者市内局番（最大4文字）
     */
    tiawsshshnikykNo: string;
    /**
     * 問合せ者加入者番号（最大4文字）
     */
    tiawsshknyshNo: string;
    /**
     * 利用環境区分（01：PC／02：スマートフォン／03：その他）
     */
    ryknkyTyp: string;
    /**
     * 問合せ内容本文
     */
    tiawsniyTxt: string;
    /**
     * 退会理由区分（01：会員メリットを感じないから／02：欲しい機能がないから／03：欲しいムビチケがないから／04：ユーザー対応が悪いから／05：その他）※問合せ区分が04の場合にセット、それ以外は null をセット
     */
    tikiryTyp: string | null;
    /**
     * 退会理由本文
     */
    tikiryniyTxt: string | null;
    /**
     * 会員コード（会員の場合は 8桁の固定値 を それ以外は null をセット）
     */
    kiinCd: string;
}

export interface IUnsubscribeArgs {
    /**
     * 会員コード（8桁の固定値をセット）
     */
    kiinCd: string;
    /**
     * 退会理由区分
     */
    tikiryTyp: string;
    /**
     * 退会理由本文
     */
    tikiryniyTxt: string;
}

export interface ICheckEditMailAddressArgs {
    /**
     * 会員コード（8桁の固定値をセット）
     */
    kiinCd: string;
    /**
     * 変更予定メールアドレス（最大128文字）
     */
    hnkytiMladdr: string;
}

export interface IEditMailAddressArgs {
    /**
     * 会員コード（8桁の固定値をセット）
     */
    kiinCd: string;
    /**
     * メールアドレス変更用認証コード
     */
    nnshCd: string;
}
