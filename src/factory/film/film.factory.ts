/**
 * film.factory
 */

// tslint:disable-next-line:no-empty-interface
export interface IFilmRequest {
}

export interface IFilmInfoArgs extends IFilmRequest {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd?: string;
}

export interface IFilmSearchArgs extends IFilmRequest {
    /**
     * 検索文字列
     */
    srchTxt: string;
    /**
     * 会員コード（8桁固定）
     */
    kiinCd?: string;
}

export interface IFilmInfoResult {
    /**
     * 販売区分（00:前売り券／01:当日券）
     */
    hmbiTyp: string;
    /**
     * 販売ステータス区分（01:近日発売／02:販売中／03:販売終了かつ上映中／04:販売終了かつ上映終了）
     */
    hmbisttsTyp: string;
    /**
     * 作品コード
     */
    skhnCd: string;
    /**
     * 作品名称（最大240文字）
     */
    skhnNm: string;
    /**
     * 「観たい」登録済フラグ
     */
    mtitrkzmFlg: string;
    /**
     * ソート用公開年月日
     */
    srtkkikishYmd: string;
    /**
     * ソート用販売開始年月日
     */
    srthmbikishYmd: string;
    /**
     * ポスター画像URL
     */
    pstrgzUrl?: string;
    /**
     * セールスコピー１
     */
    slscpy1Txt?: string;
    /**
     * セールスコピー２
     */
    slscpy2Txt?: string;
    /**
     * セールスコピー３
     */
    slscpy3Txt?: string;
    /**
     * 全国公開開始日記述
     */
    znkkkkikishDspt?: string;
    /**
     * 注目度ランキング番号
     */
    chmkdrnkngNo?: number;
    /**
     * 作品著作権記述
     */
    skhnchskknDspt?: string;
}

export type IFilmInfoLstResult = IFilmInfoResult[];

export interface IFilmSearchResult {
    /**
     * 販売区分（00:前売り券／01:当日券）
     */
    hmbiTyp: string;
    /**
     * 販売ステータス区分（01:近日発売／02:販売中／03:販売終了かつ上映中／04:販売終了かつ上映終了）
     */
    hmbisttsTyp: string;
    /**
     * 作品コード
     */
    skhnCd: string;
    /**
     * 作品名称（最大240文字）
     */
    skhnNm: string;
    /**
     * 「観たい」登録済フラグ
     */
    mtitrkzmFlg: string;
    /**
     * ソート用公開年月日
     */
    srtkkikishYmd: string;
    /**
     * ソート用販売開始年月日
     */
    srthmbikishYmd: string;
    /**
     * ポスター画像URL
     */
    pstrgzUrl?: string;
    /**
     * セールスコピー２
     */
    slscpy2Txt?: string;
    /**
     * セールスコピー３
     */
    slscpy3Txt?: string;
    /**
     * 全国公開開始日記述
     */
    znkkkkikishDspt?: string;
}

export type IFilmSearchLstResult = IFilmSearchResult[];
