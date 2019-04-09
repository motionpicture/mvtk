/**
 * 上映スケジュール
 */
// tslint:disable-next-line:no-empty-interface
export interface IScheduleRequest {}

export interface IScheduleResult {
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

export interface IJeihmJnf {
    /**
     * 上映開始時間
     */
    jeikishHm: string;
    /**
     * 上映終了時間（最終上映回のみ設定される）
     */
    jeishryHm?: string;
    /**
     * 残席状況区分（◎：残席率 50~100%、〇：残席率 30~49%、△：残席率 1~29%、×：残席なし、／：販売期間外）※TOHOシネマズのみ
     */
    znskjkyTyp?: string;
}

export interface IJeiymdInf {
    /**
     * ソート用上映年月日
     */
    srtjeiYmd: number;
    /**
     * 上映日
     */
    jeiMd: string;
    /**
     * ポスター画像URL
     */
    jeihmInf?: IJeihmJnf[];
}

export interface IJeiInfoNearest {
    /**
     * 上映形式リスト
     */
    jeikishkLst: string[];
    /**
     * 上映スケジュール備考
     */
    jeischdlRmk: string;
    /**
     * 上映日情報（１週間分）
     */
    jeiymdInf: IJeiymdInf[];
}

export interface IScheduleCommonResult {
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
    mdgchtryknFlg?: string;
    /**
     * ネット利用可能フラグ
     */
    ntryknFlg?: string;
}

export interface IScheduleFavoriteResult extends IScheduleCommonResult {
    /**
     * お気に入り劇場登録済フラグ
     */
    oknirstturkzmFlg?: string;
    /**
     * 上映作品情報
     */
    jeiskhnInf?: IJeiskhnInf[];
}

export type IScheduleFavoriteLstResult = IScheduleFavoriteResult[];

export interface IStInf extends IScheduleCommonResult {
    /**
     * 地点間距離
     */
    chtnknkyrNum?: number;
    /**
     * お気に入り劇場登録済フラグ
     */
    oknirstturkzmFlg?: string;
    /**
     * 上映作品情報
     */
    jeiskhnInf?: IJeiskhnInf[];
}

export interface IAreaResult extends IScheduleCommonResult {
    /**
     * お気に入り劇場登録済フラグ
     */
    oknirstturkzmFlg?: string;
    /**
     * 上映作品情報
     */
    jeiskhnInf?: IJeiskhnInf[];
}

export type IAreaLstResult = IAreaResult[];
export interface IJeihmInf {
    /**
     * 上映開始時間
     */
    jeikishHm: string;
    /**
     * 上映終了時間（最終上映回のみ設定される）
     */
    jeishryHm?: string;
    /**
     * 残席状況区分（◎：残席率 50~100%、〇：残席率 30~49%、△：残席率 1~29%、×：残席なし、／：販売期間外）
     * ※TOHOシネマズのみ
     */
    znskjkyTyp?: string;
}

export interface IJeiymdInf {
    /**
     * ソート用上映年月日
     */
    srtjeiYmd: number;
    /**
     * 上映日
     */
    jeiMd: string;
    /**
     * 上映時刻情報
     */
    jeihmInf?: IJeihmInf[];
}

export interface IJeiskhnInf {
    /**
     * ソート用公開年月日
     */
    srtkkikishYmd: string;
    /**
     * 作品コード
     */
    skhnCd: string;
    /**
     * 作品名称（最大240文字）
     */
    skhnNm: string;
    /**
     * ポスター画像URL
     */
    pstrgzUrl: string;
}

export interface IJeikishkInf {
    /**
     * 上映形式コード
     */
    jeikishkCd: string;
    /**
     * 上映形式名称
     */
    jeikishkNm: string;
}

export interface IJeiInfoFavorite {
    /**
     * 上映スケジュール備考
     */
    jeischdlRmk?: string;
    /**
     * 上映形式情報
     */
    jeikishkInf: IJeikishkInf[];
    /**
     * 上映日情報（１週間分）
     */
    jeiymdInf?: IJeiymdInf[];
}

export interface IFavoriteForFilmResult extends IScheduleCommonResult {
    jeiInf?: IJeiInfoFavorite[];
}

export type IFavoriteForFilmLstResult = IFavoriteForFilmResult[];

export type IAreaForFilmResult = IFavoriteForFilmResult;
export type IAreaForFilmLstResult = IAreaForFilmResult[];

export interface IAreaCommonResult {
    /**
     * エリア表示順番号（ソート用）
     */
    arehyjjnNo: number;
    /**
     * エリアコード
     */
    areCd: string;
    /**
     * エリア名称
     */
    areNm: string;
}

export interface INearestResult extends IAreaCommonResult {
    /**
     * エリア劇場情報
     */
    stInf?: IStInf[];
}

export type INearestLstResult = INearestResult[];

export interface IStInfNearestForFilm extends IScheduleCommonResult {
    /**
     * 地点間距離
     */
    chtnknkyrNum?: number;
    /**
     * 上映作品情報
     */
    jeiInf?: IJeiInfoNearest[];
}

export interface INearestForFilmResult extends IAreaCommonResult {
    stInf: IStInfNearestForFilm[];
}

export type INearestForFilmLstResult = INearestForFilmResult[];

/**
 * args
 */

export interface IKiinCd {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
}

export interface IGeoLocation {
    /**
     * 現在地緯度
     * Example: 35.699456
     */
    gnzichiDo: number;
    /**
     * 現在地経度
     * Example: 139.746627
     */
    gnzichkiDo: number;
}

export interface INearestArgs extends IGeoLocation {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd?: string;
}

export interface INearestForFilmArgs extends IGeoLocation {
    /**
     * 作品コード（6桁固定）
     */
    skhnCd: string;
}

export interface IFavoriteArgs {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
}

export interface IScheduleCommonArgs extends IKiinCd {
    /**
     * 作品コード（6桁固定）
     */
    skhnCd: string;
}

export interface IFavoriteForFilmArgs {
    /**
     * 作品コード（6桁固定）
     */
    skhnCd: string;
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
}

export interface IAreaArgs extends IScheduleCommonArgs {
    /**
     * 区域コード（2桁固定）※検索レベル 大
     */
    kikCd: string;
    /**
     * 都道府県コード（2桁固定）※検索レベル 中
     */
    tdfknCd: string;
    /**
     * エリアコード（5桁固定）※検索レベル 小
     */
    areCd: string;
}

export interface IAreaForFilmArgs {
    /**
     * 作品コード（6桁固定）
     */
    skhnCd: string;
    /**
     * 区域コード（2桁固定）※検索レベル 大
     */
    kikCd: string;
    /**
     * 都道府県コード（2桁固定）※検索レベル 中
     */
    tdfknCd: string;
    /**
     * エリアコード（5桁固定）※検索レベル 小
     */
    areCd: string;
}
