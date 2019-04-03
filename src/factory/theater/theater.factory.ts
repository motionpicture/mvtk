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
    skhn_cd?: string;
}

export interface ISearchConditionArgs extends ISkhnCd {
    /**
     * 区域コード（2桁固定）※検索レベル 大
     */
    kik_cd: string;
    /**
     * 都道府県コード（2桁固定）※検索レベル 中
     */
    tdfkn_cd?: string;
    /**
     * エリアコード（5桁固定）※検索レベル 小
     */
    are_cd?: string;
}

export interface IDetailArgs extends ISkhnCd {
    /**
     * 劇場コード（5桁固定）
     */
    st_cd: string;
    /**
     * 会員コード（8桁固定）
     */
    kiin_cd?: string;
}

export interface IAreInf {
    /**
     * エリアコード
     */
    are_cd: string;
    /**
     * エリア名称
     */
    are_nm: string;
}

export interface ITodofukenCommon {
    /**
     * 都道府県コード
     */
    tdfkn_cd: string;
    /**
     * 都道府県名称
     */
    tdfkn_nm: string;
}

export interface ITdfknInf extends ITodofukenCommon {
    /**
     * エリア情報
     */
    are_inf: IAreInf[];
}

export interface IKuiki {
    /**
     * 区域コード
     */
    kik_cd: string;
    /**
     * 区域名称
     */
    kik_nm: string;
}

export interface ISearchConditionResult extends IKuiki {
    /**
     * 都道府県情報
     */
    tdfkn_inf: ITdfknInf[];
}

export interface IStCommon {
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
    /**
     * 劇場公式サイトURL
     */
    stkshkst_url?: string;
}

export type IStInf = IStCommon;

export interface ITheaterAreInf extends IAreInf {
    /**
     * エリア劇場情報
     */
    st_inf: IStInf[];
}

export interface ITheaterTdfknInf extends ITodofukenCommon {
    /**
     * エリア情報
     */
    are_inf: ITheaterAreInf[];
}

export interface ITheaterInfoResult extends IKuiki {
    /**
     * 都道府県情報
     */
    tdfkn_inf: ITheaterTdfknInf[];
}

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
     * 残席状況区分
     * （◎：残席率 50~100%、〇：残席率 30~49%、△：残席率 1~29%、×：残席なし、／：販売期間外）
     * TOHOシネマズのみ
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
     * ムビチケ販売中フラグ
     */
    hmbich_flg: string;
    /**
     * 上映形式リスト
     */
    jeikishk_lst: string[];
    /**
     * 上映日情報（１週間分）
     */
    jeiymd_inf: IJeiymdInf[];
}

export interface IJeischdlInf {
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
    /**
     * 上映情報
     */
    jei_inf?: IJeiInf[];
}

export interface IDetailsResult extends IStCommon {
    /**
     * 劇場郵便番号
     */
    stybn_no?: string;
    /**
     * 劇場住所
     */
    st_addr?: string;
    /**
     * 劇場住所緯度
     */
    stjshi_do?: number;
    stjshki_do?: number;
    /**
     * 劇場電話番号
     */
    stdnw_no?: string;
    /**
     * お気に入り劇場登録済フラグ
     */
    oknirstturkzm_flg?: string;
    /**
     * 上映スケジュール情報
     */
    jeischdl_inf?: IJeischdlInf[];
}
