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
    znkkkkikishDspt: string;
    /**
     * 全国公開年月日
     */
    znkkkkikishYmd: string;
    /**
     * 販売終了年月日
     */
    hmbishryYmd: string;
}

export type IFilmInfoLstRes = IFilmInfoResult[];

export interface ITheaterInfoArgs {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
}

export interface ITheaterRegisterArgs {
    /**
     * 劇場コード（5桁固定）
     */
    stCd: string;
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
}

export type ITheaterDeleteArgs = ITheaterRegisterArgs;

export interface ITheaterInfoResult {
    /**
     * お気に入り登録日時（ソート用）（日時形式 format：yyyyMMddHHmmss）
     */
    oknirtrkDt: string;
    /**
     * 劇場コード
     */
    stCd: string;
    /**
     * 劇場名称
     */
    stNm: string;
    /**
     * 窓口利用可能フラグ
     */
    mdgchryknFlg: string;
    /**
     * ネット利用可能フラグ
     */
    ntryknFlg: string;
}

export type ITheaterInfoLstResult = ITheaterInfoResult[];
