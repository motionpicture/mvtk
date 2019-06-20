/**
 * 劇場
 * theater factory
 */
// tslint:disable-next-line:no-empty-interface
export interface ITheaterRequest {}

export interface ISkhnCd {
    /**
     * 作品コード（6桁固定）
     */
    skhnCd?: string;
}

export interface ISearchConditionArgs extends ISkhnCd {
    /**
     * 区域コード（2桁固定）※検索レベル 大
     */
    kikCd: string;
    /**
     * 都道府県コード（2桁固定）※検索レベル 中
     */
    tdfknCd?: string;
    /**
     * エリアコード（5桁固定）※検索レベル 小
     */
    areCd?: string;
}

export interface IDetailArgs extends ISkhnCd {
    /**
     * 劇場コード（5桁固定）
     */
    stCd: string;
    /**
     * 会員フラグ
     */
    kiinFlg?: string;
    /**
     * 会員コード（8桁固定）
     */
    kiinCd?: string;
}

export interface IAreInf {
    /**
     * エリアコード
     */
    areCd: string;
    /**
     * エリア名称
     */
    areNm: string;
}

export interface ITodofukenCommon {
    /**
     * 都道府県コード
     */
    tdfknCd: string;
    /**
     * 都道府県名称
     */
    tdfknNm: string;
}

export interface ITdfknInf extends ITodofukenCommon {
    /**
     * エリア情報
     */
    areInf: IAreInf[];
}

export interface IKuiki {
    /**
     * 区域コード
     */
    kikCd: string;
    /**
     * 区域名称
     */
    kikNm: string;
}

export interface ISearchConditionResult extends IKuiki {
    /**
     * 都道府県情報
     */
    tdfknInf: ITdfknInf[];
}

export type ISearchConditionLstResult = ISearchConditionResult[];

export interface IStCommon {
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
    /**
     * 劇場公式サイトURL
     */
    stkshkstUrl?: string;
}

export interface ITheaterAreInf extends IAreInf {
    /**
     * エリア劇場情報
     */
    stInf: IStInf[];
}

export interface ITheaterTdfknInf extends ITodofukenCommon {
    /**
     * エリア情報
     */
    areInf: ITheaterAreInf[];
}

export interface ITheaterInfoResult extends IKuiki {
    /**
     * 区域表示順番号（区域ソート用）
     */
    kikhyjjnNo: number;
    /**
     * 対応劇場情報
     */
    stInf?: IStInf[];
}

export type ITheaterInfoLstResult = ITheaterInfoResult[];

export interface IJeihmInf {
    /**
     * 上映開始時間（36時間表示）
     */
    jeikishHm: string;
    /**
     * 残席状況区分（◎：残席率 50~100%、〇：残席率 30~49%、△：残席率 1~29%、×：残席なし、／：販売期間外）
     * ※TOHOシネマズのみ
     */
    znskjkyTyp?: string;
}

export interface IJeiInf {
    /**
     * 字幕音声区分
     */
    jmkonsiTyp: string;
    /**
     * 字幕音声区分名称
     */
    jmkonsikbnNm: string;
    /**
     * 映写方式区分
     */
    eishhshkTyp: string;
    /**
     * 映写方式区分名称
     */
    eishhshkkbnNm: string;
    /**
     * 特殊上映形式区分
     */
    tkshjeikishkTyp: string;
    /**
     * 特殊上映形式区分名称
     */
    tkshjeikishkkbnNm: string;
    /**
     * 上映スケジュール備考
     */
    jeischdlRmk?: string;
    /**
     * 上映時刻情報
     */
    jeihmInf?: IJeihmInf[];
}

export interface IJeiskhnInf {
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
    pstrgzUrl?: string;
    /**
     * 作品著作権記述
     */
    skhnchskknDspt?: string;
    /**
     * 上映時間
     */
    jeiTmm?: string;
    /**
     * 映倫レイティングコード
     */
    eirnrtngCd?: string;
    /**
     * 前売券販売フラグ
     */
    meurknhmbiFlg: string;
    /**
     * 当日券販売フラグ
     */
    tjtsknhmbiFlg: string;
    /**
     * 上映情報
     */
    jeiInf?: IJeiInf[];
}

export interface IJeischdlInf {
    /**
     * 上映年月日（日付ソート用）
     */
    jeiYmd: string;
    /**
     * 上映日付（表示用）
     */
    jeiMd: string;
    /**
     * 上映曜日名称（表示用）
     */
    jeiybNm: string;
    /**
     * 上映スケジュール情報
     */
    jeiskhnInf?: IJeiskhnInf[];
}

export interface IStInf {
    /**
     * 都道府県表示順番号（都道府県ソート用）
     */
    tdfknhyjjnNo: number;
    /**
     * 都道府県名称
     */
    tdfknNm: string;
    /**
     * 劇場表示順番号（劇場ソート用）
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
     * サイト備考
     */
    stRmk: string;
    /**
     * 窓口利用可能フラグ
     */
    mdgchryknFlg: string;
    /**
     * ネット利用可能フラグ
     */
    ntryknFlg: string;
}

export interface IDetailsResult {
    /**
     * 劇場コード
     */
    stCd: string;
    /**
     * 劇場名称
     */
    stNm: string;
    /**
     * 劇場公式サイトURL
     */
    stkshkstUrl?: string;
    /**
     * 劇場郵便番号
     */
    stybnNo?: string;
    /**
     * 劇場住所
     */
    stAddr?: string;
    /**
     * 劇場住所緯度
     */
    stjshiDo?: number;
    /**
     * 劇場住所経度
     */
    stjshkiDo?: number;
    /**
     * 劇場電話番号
     */
    stdnwNo?: string;
    /**
     * 窓口利用可能フラグ
     */
    mdgchryknFlg: string;
    /**
     * ネット利用可能フラグ
     */
    ntryknFlg: string;
    /**
     * お気に入り劇場登録済フラグ
     */
    oknirsttrkzmFlg?: string;
    /**
     * 上映スケジュール情報
     */
    jeischdlInf?: IJeischdlInf[];
}

export interface IAreaArgs {
    /**
     * 都道府県コード（2桁固定）※検索レベル 中
     */
    tdfknCd?: string;
    /**
     * エリアコード（5桁固定）※検索レベル 小
     */
    areCd?: string;
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
     * エリア情報
     */
    areInf: IAreInfAreaResult[];
}
