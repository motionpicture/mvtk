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

export interface IJeiskhnInf {
    /**
     * 作品コード
     */
    skhn_cd: string;
    /**
     * 作品名称（最大240文字）
     */
    skhn_nm: string;
    /**
     * ポスター画像URL
     */
    pstrgz_url?: string;
}

export interface IScheduleCommonResult {
    /**
     * 劇場コード
     */
    st_cd: string;
    /**
     * 劇場名称
     */
    st_nm: string;
    /**
     * 劇場窓口利用可能フラグ
     */
    mdgchtrykn_flg?: string;
    /**
     * ネット利用可能フラグ
     */
    ntrykn_flg?: string;
}

export interface IScheduleFavoriteResult extends IScheduleCommonResult {
    /**
     * お気に入り劇場登録済フラグ
     */
    oknirstturkzm_flg?: string;
    /**
     * 上映作品情報
     */
    jeiskhn_inf?: IJeiskhnInf[];
}

export interface IStInf extends IScheduleCommonResult {
    /**
     * 地点間距離
     */
    chtnknkyr_num?: number;
    /**
     * お気に入り劇場登録済フラグ
     */
    oknirstturkzm_flg?: string;
    /**
     * 上映作品情報
     */
    jeiskhn_inf?: IJeiskhnInf[];
}

export type IAreaResult = IScheduleFavoriteResult;

export interface IJeihmInf {
    /**
     * 上映開始時間
     */
    jeikish_hm: string;
    /**
     * 上映終了時間（最終上映回のみ設定される）
     */
    jeishry_hm?: string;
    /**
     * 残席状況区分（◎：残席率 50~100%、〇：残席率 30~49%、△：残席率 1~29%、×：残席なし、／：販売期間外）
     * ※TOHOシネマズのみ
     */
    znskjky_typ?: string;
}

export interface IJeiymdInf {
    /**
     * 上映日
     */
    jei_md: string;
    /**
     * 上映時刻情報
     */
    jeihm_inf?: IJeihmInf[];
}

export interface IJeiInf {
    /**
     * 上映形式リスト
     */
    jeikishk_lst: string[];
    /**
     * 上映スケジュール備考
     */
    jeischdl_rmk: string;
    /**
     * 上映日情報（１週間分）
     */
    jeiymd_inf: IJeiymdInf[];
}

export interface IFavoriteForFilmResult extends IScheduleCommonResult {
    jei_inf?: IJeiInf[];
}

export type IAreaForFilmResult = IFavoriteForFilmResult;

export interface IAreaCommonResult {
    /**
     * エリアコード
     */
    are_cd: string;
    /**
     * エリア名称
     */
    are_nm: string;
}

export interface INearestResult extends IAreaCommonResult {
    /**
     * エリア劇場情報
     */
    st_inf?: IStInf[];
}

export interface IStInfNearestForFilm extends IScheduleCommonResult {
    /**
     * 地点間距離
     */
    chtnknkyr_num?: number;
    /**
     * 上映作品情報
     */
    jei_inf?: IJeiInf[];
}

export interface INearestForFilmResult extends IAreaCommonResult {
    st_inf: IStInfNearestForFilm[];
}

/**
 * args
 */

export interface IKiinCd {
    /**
     * 会員コード（8桁固定）
     */
    kiin_cd: string;
}

export interface IGeoLocation {
    /**
     * 現在地緯度
     * Example: 35.699456
     */
    gnzichi_do: number;
    /**
     * 現在地経度
     * Example: 139.746627
     */
    gnzichki_do: number;
}

export interface INearestArgs extends IGeoLocation {
    /**
     * 会員コード（8桁固定）
     */
    kiin_cd?: string;
}

export interface INearestForFilmArgs extends IGeoLocation {
    /**
     * 作品コード（6桁固定）
     */
    skhn_cd: string;
}

export interface IFavoriteArgs {
    /**
     * 会員コード（8桁固定）
     */
    kiin_cd: string;
}

export interface IScheduleCommonArgs extends IKiinCd {
    /**
     * 作品コード（6桁固定）
     */
    skhn_cd: string;
}

export interface IFavoriteForFilmArgs {
    /**
     * 作品コード（6桁固定）
     */
    skhn_cd: string;
    /**
     * 会員コード（8桁固定）
     */
    kiin_cd: string;
}

export interface IAreaArgs extends IScheduleCommonArgs {
    /**
     * 区域コード（2桁固定）※検索レベル 大
     */
    kik_cd: string;
    /**
     * 都道府県コード（2桁固定）※検索レベル 中
     */
    tdfkn_cd: string;
    /**
     * エリアコード（5桁固定）※検索レベル 小
     */
    are_cd: string;
}

export interface IAreaForFilmArgs {
    /**
     * 作品コード（6桁固定）
     */
    skhn_cd: string;
    /**
     * 区域コード（2桁固定）※検索レベル 大
     */
    kik_cd: string;
    /**
     * 都道府県コード（2桁固定）※検索レベル 中
     */
    tdfkn_cd: string;
    /**
     * エリアコード（5桁固定）※検索レベル 小
     */
    are_cd: string;
}
