/**
 * favorite.factory
 */

export interface ITheaterInfoArgs {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
}

export interface ITheaterRegisterArgs {
    /**
     * 劇場コード（5桁固定）
     */
    stCd: string;
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
}

export type ITheaterDeleteArgs = ITheaterRegisterArgs;

export interface ITheaterInfoResult {
    /**
     * お気に入り登録日時（ソート用）（日時形式 format：yyyyMMddHHmmss）
     */
    oknirtrkDt: string;
    /**
     * 劇場コード
     */
    stCd: string;
    /**
     * 劇場名称
     */
    stNm: string;
    /**
     * 窓口利用可能フラグ
     */
    mdgchryknFlg: string;
    /**
     * ネット利用可能フラグ
     */
    ntryknFlg: string;
}

export type ITheaterInfoLstResult = ITheaterInfoResult[];
