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

export type IStInf = IStCommon;

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
     * 都道府県情報
     */
    tdfknInf: ITheaterTdfknInf[];
}

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
     * 残席状況区分
     * （◎：残席率 50~100%、〇：残席率 30~49%、△：残席率 1~29%、×：残席なし、／：販売期間外）
     * TOHOシネマズのみ
     */
    znskjkyTyp?: string;
}

export interface IJeiymdInf {
    /**
     * 上映日
     */
    jeiMd: string;
    /**
     * 上映時刻情報
     */
    jeihmInf?: IJeihmInf[];
}

export interface IJeiInf {
    /**
     * ムビチケ販売中フラグ
     */
    hmbichFlg: string;
    /**
     * 上映形式リスト
     */
    jeikishkLst: string[];
    /**
     * 上映日情報（１週間分）
     */
    jeiymdInf: IJeiymdInf[];
}

export interface IJeischdlInf {
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
     * 上映情報
     */
    jeiInf?: IJeiInf[];
}

export interface IDetailsResult extends IStCommon {
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
    stjshkiDo?: number;
    /**
     * 劇場電話番号
     */
    stdnwNo?: string;
    /**
     * お気に入り劇場登録済フラグ
     */
    oknirstturkzmFlg?: string;
    /**
     * 上映スケジュール情報
     */
    jeischdlInf?: IJeischdlInf[];
}
