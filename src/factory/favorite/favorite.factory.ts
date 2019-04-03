/**
 * お気に入り
 * favorite factory
 */
// tslint:disable-next-line:no-empty-interface
export interface IFavoriteRequest {}

export interface IFavoriteResult {
    /**
     * 情報
     */
    resultInfo: {
        /**
         * ステータス
         */
        status: string;
        /**
         * メッセージ
         */
        message: string;
    };
}

export interface IFilmInfoArgs extends IFavoriteRequest {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
}

export interface IFilmRegisterArgs extends IFilmInfoArgs {
    /**
     * 作品コード（6桁固定）
     */
    skhnCd: string;
}

export type IFilmDeleteArgs = IFilmRegisterArgs;

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
     * 公式サイトURL
     */
    pstrgzUrl?: string;
    /**
     * 全国公開開始日記述
     */
    znkkkkikishDspt?: string;
    /**
     * 鑑賞券販売終了年月日（日付形式 format: yyyyMMdd）
     */
    knshknhmbishryYmd?: string;
}

export type IFilmInfoLstRes = IFilmInfoResult[];
