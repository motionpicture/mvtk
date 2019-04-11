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
     * 劇場表示順番号（ソート用）
     */
    sthyjjnNo: number;
    /**
     * 劇場コード
     */
    stCd: string;
    /**
     * 劇場名称
     */
    stNm: string;
    /**
     * 劇場窓口利用可能フラグ
     */
    mdgchtryknFlg: string;
    /**
     * ネット利用可能フラグ
     */
    ntryknFlg: string;
}

export type ITheaterInfoLstResult = ITheaterInfoResult[];
