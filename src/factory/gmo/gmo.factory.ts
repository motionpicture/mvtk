/**
 * gmo.factory
 */
export interface ISearchCardArgs {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
}

export interface ISearchCardResult {
    /**
     * カード登録済フラグ（0：未登録／1：登録済）
     */
    crdturkzmFlg: string;
}
