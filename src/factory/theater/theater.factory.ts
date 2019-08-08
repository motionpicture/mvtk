export interface IAreaArgs {
    /**
     * 都道府県コード（2桁固定）※検索レベル 中
     */
    tdfknCd?: string;
    /**
     * エリアコード（5桁固定）※検索レベル 小
     */
    areCd?: string;
    /**
     * 作品コード（6桁固定）
     */
    skhnCd?: string;
}

export interface IAreInfAreaResult {
    /**
     * エリアコード
     */
    areCd: string;
    /**
     * エリア名称
     */
    areNm: string;
    /**
     * エリア表示順番号（エリアソート用）
     */
    arehyjjnNo: number;
}

export type IAreaResult = ITodofukenInfo[];

export interface ITodofukenInfo {
    /**
     * 都道府県コード
     */
    tdfknCd: string;
    /**
     * 都道府県名称
     */
    tdfknNm: string;
    /**
     * 都道府県表示順番号（都道府県ソート用）
     */
    tdfknhyjjnNo: number;
    /**
     * 上映劇場数
     */
    stNum: number;
    /**
     * エリア情報
     */
    areInf: IAreInfAreaResult[];
}