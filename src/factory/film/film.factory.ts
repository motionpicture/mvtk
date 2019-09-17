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
    skhnCd: string;
    /**
     * 会員コード
     */
    kiinCd?: string;
}

export interface IStffCommon {
    /**
     * スタッフ表示順番号
     */
    hyjjnNo?: number;
    /**
     * スタッフ名称
     */
    jmbtsNm?: string;
}

export interface IStffInf extends IStffCommon {
    /**
     * スタッフ役割名称
     */
    ykwrNm?: string;
}

export interface ICstInf extends IStffCommon {
    /**
     * 主演フラグ
     */
    shenFlg?: string;
}

export interface IKnshknInf {
    /**
     * 鑑賞券管理明細番号
     */
    knshknknrmisiNo: string;
    /**
     * 券種区分
     */
    knshTyp: string;
    /**
     * 券種区分名称
     */
    knshkbnNm: string;
    /**
     * 鑑賞券販売単価
     */
    knshknhmbiUnip: number;
}

export interface IFilmDetailResult {
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
     * ポスター画像URL
     */
    pstrgzUrl?: string;
    /**
     * 映倫レイティングコード
     */
    eirnrtngCd?: string;
    /**
     * セールスコピー１
     */
    slscpy1Txt?: string;
    /**
     * 全国公開開始日記述
     */
    znkkkkikishDspt?: string;
    /**
     * 作品解説本文
     */
    skhnkistsTxt?: string;
    /**
     * 作品物語本文
     */
    skhnmngtrTxt?: string;
    /**
     * 作品注釈共通本文
     */
    skhnchshkkytsuTxt?: string;
    /**
     * 作品注釈詳細
     */
    skhnchshkshsiTxt?: string;
    /**
     * 「観たい」登録者数
     */
    mtitrksyNum: number;
    /**
     * 「観たい」登録済フラグ
     */
    mtitrkzmFlg: string;
    /**
     * 公式サイトURL
     */
    kshkstUrl?: string;
    /**
     * スタッフ情報
     */
    stffInf?: IStffInf[];
    /**
     * キャスト情報
     */
    cstInf?: ICstInf[];
    /**
     * 作品オリジナル名称
     */
    skhmmiorgnlNm?: string;
    /**
     * 製作年
     */
    siskY?: string;
    /**
     * 製作国名称
     */
    siskkkNm?: string;
    /**
     * 配給会社名称
     */
    hikygishNm?: string;
    /**
     * 上映時間
     */
    jeiTmm?: string;
    /**
     * 作品著作権記述
     */
    skhnchskknDspt?: string;
    /**
     * 主管配給会社コード
     */
    shknhikygishCd?: string;
    /**
     * 特典在庫状況メッセージ
     */
    tktnzikjkymsgTxt?: string[];
    /**
     * 鑑賞券販売終了年月日（日付形式 format: yyyyMMdd）
     */
    knshknhmbishryYmd?: string;
    /**
     * 購入上限枚数
     */
    knyjgmmiNum: number;
    /**
     * 鑑賞券管理番号
     */
    knshknknrNo: string;
    /**
     * 鑑賞券情報
     */
    knshknInf: IKnshknInf[];
    /**
     * バナー情報
     */
    bnnrInf: IBnnrInf[];
    /**
     * デジタルインセンティブ情報
     */
    dgtlincntvInf: IDgtlincntvInf[];
    /**
     * 予告編情報
     */
    ykkhnInf: IYkkhnInf[]
}

export interface IBnnrInf {
    /**
     * バナーコード
     */
    bnnrCd: string;
    /**
     * バナー名称
     */
    bnnrNm: string;
    /**
     * バナー表示箇所区分（01:作品詳細画面右／02:作品詳細画面下／03:購入完了画面下）
     */
    bnnrhyjkshTyp: string;
    /**
     * バナー画像URL
     */
    bnnrgzUrl: string;
    /**
     * バナーリンク先URL
     */
    bnnrlnkskUrl?: string;
    /**
     * バナー説明本文
     */
    bnnrstsmiTxt?: string;
    /**
     * バナー掲載開始年月日（日付形式 format: yyyyMMdd）
     */
    bnnrkisikishYmd?: string;
    /**
     * バナー掲載終了年月日（日付形式 format: yyyyMMdd）
     */
    bnnrkisishryYmd?: string;
    /**
     * キャンペーン特典ボタン動作区分 (
     * 01:キャンペーン情報（別ウィンドウ遷移）/
     * 02:キャンペーン情報（バナーへスクロール）/
     * 03:特典情報（別ウィンドウ遷移）/
     * 04:特典情報（バナーへスクロール）/
     * 05:バナー表示のみ（「キャンペーン情報」「特典情報」ボタンの表示なし。バナーへのスクロールなし)
     */
    cptktnbtndsTyp?: string;
}

export interface IDgtlincntvInf {
    /**
     * デジタルインセンティブコード
     */
    dgtlincntvCd: string;
    /**
     * デジタルインセンティブタイトル
     */
    dgtlincntvTtl: string;
    /**
     * デジタルインセンティブ説明本文
     */
    dgtlincntvstsmiTxt: string;
    /**
     * サンプル画像URL
     */
    smplgzUrl: string;
    /**
     * デジタルインセンティブ購入開始年月日
     */
    dgtlincntvknykishYmd: string;
    /**
     * デジタルインセンティブ購入終了年月日
     */
    dgtlincntvknyshryYmd: string;
    /**
     * デジタルインセンティブダウンロード有効期間（日付形式 format: yyyyMMdd）
     */
    dgtlincntvdwnlodykTm?: string;
    /**
     * デジタルインセンティブダウンロード上限回数
     */
    dgtlincntvdwnlodjgnkiNum?: number;
    /**
     * デジタルインセンティブ備考
     */
    skhndgtlincntvRmk?: string;
}

export interface IYkkhnInf {
    /**
     * 予告編番号
     */
    ykkhnNo: string;
    /**
     * 予告編タイトル
     */
    ykkhnTtl: string;
    /**
     * 予告編URL
     */
    ykkhnUrl: string;
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
     * 作品名称（かな）
     */
    skhnHknnm: string;
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
    /**
     * 鑑賞券販売終了年月日
     */
    knshknhmbishryYmd?: string;
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
