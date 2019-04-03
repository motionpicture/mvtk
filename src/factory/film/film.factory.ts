/**
 * 作品情報
 * film factory
 */
// tslint:disable-next-line:no-empty-interface
export interface IFilmRequest {
}

export interface IFilmResult {
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

export interface IFilmDetailArgs extends IFilmRequest {
    /**
     * 作品コード
     */
    skhn_cd: string;
    /**
     * 会員コード
     */
    kiin_cd?: string;
}

export interface IStffCommon {
    /**
     * スタッフ表示順番号
     */
    hyjjn_no?: number;
    /**
     * スタッフ名称
     */
    jmbts_nm?: string;
}

export interface IStffInf extends IStffCommon {
    /**
     * スタッフ役割名称
     */
    ykwr_nm?: string;
}

export interface ICstInf extends IStffCommon {
    /**
     * 主演フラグ
     */
    shen_flg?: string;
}

export interface IKnshknInf {
    /**
     * 鑑賞券管理明細番号
     */
    knshknknrmisi_no: string;
    /**
     * 券種区分
     */
    knsh_typ: string;
    /**
     * 券種区分名称
     */
    knshkbn_nm: string;
    /**
     * 鑑賞券販売単価
     */
    knshknhmbi_unip: number;
}

export interface IFilmDetailResult {
    /**
     * 販売区分（00:前売り券／01:当日券）
     */
    hmbi_typ: string;
    /**
     * 販売ステータス区分（01:近日発売／02:販売中／03:販売終了かつ上映中／04:販売終了かつ上映終了）
     */
    hmbistts_typ: string;
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
     * 映倫レイティングコード
     */
    eirnrtng_cd?: string;
    /**
     * セールスコピー１
     */
    slscpy1_txt?: string;
    /**
     * 全国公開開始日記述
     */
    znkkkkikish_dspt?: string;
    /**
     * 作品解説本文
     */
    skhnkists_txt?: string;
    /**
     * 作品物語本文
     */
    skhnmngtr_txt?: string;
    /**
     * 作品注釈共通本文
     */
    skhnchshkkytsu_txt?: string;
    /**
     * 作品注釈詳細
     */
    skhnchshkshsi_txt?: string;
    /**
     * 「観たい」登録者数
     */
    mtitrksy_num: number;
    /**
     * 「観たい」登録済フラグ
     */
    mtitrkzm_flg: string;
    /**
     * 公式サイトURL
     */
    kshkst_url?: string;
    /**
     * スタッフ情報
     */
    stff_inf?: IStffInf[];
    /**
     * キャスト情報
     */
    cst_inf?: ICstInf[];
    /**
     * 作品オリジナル名称
     */
    skhmmiorgnl_nm?: string;
    /**
     * 製作年
     */
    sisk_y?: string;
    /**
     * 製作国名称
     */
    siskkk_nm?: string;
    /**
     * 配給会社名称
     */
    hikygish_nm?: string;
    /**
     * 上映時間
     */
    jei_tmm?: string;
    /**
     * 作品著作権記述
     */
    skhnchskkn_dspt?: string;
    /**
     * 主管配給会社コード
     */
    shknhikygish_cd?: string;
    /**
     * 特典在庫状況メッセージ
     */
    tktnzikjkymsg_txt?: string[];
    /**
     * 鑑賞券販売終了年月日（日付形式 format: yyyyMMdd）
     */
    knshknhmbishry_ymd?: string;
    /**
     * 購入上限枚数
     */
    knyjgmmi_num: number;
    /**
     * 鑑賞券管理番号
     */
    knshknknr_no: string;
    /**
     * 鑑賞券情報
     */
    knshkn_inf: IKnshknInf[];
}
