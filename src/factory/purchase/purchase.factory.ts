/**
 * purchase.factory
 */
export interface ITempSettlementRegistArgs {
    /**
     * 決済管理番号（16桁固定）
     */
    kssiknrNo: string;
    /**
     * 購入者 姓（最大15文字）
     */
    knyshsiNm: string;
    /**
     * 購入者 名（最大15文字）
     */
    knyshmiNm: string;
    /**
     * 購入者メールアドレス（最大128文字）
     */
    knyshMladdr: string;
    /**
     * 購入者市外局番（最大5文字）
     */
    knyshshgikykNo: string;
    /**
     * 購入者市内局番（最大4文字）
     */
    knyshshnikykNo: string;
    /**
     * 購入者加入者番号（最大4文字）
     */
    knyshknyshNo: string;
    /**
     * 購入日時（日時形式 format: yyyy/MM/dd HH:mm:ss）
     */
    knyDt: string;
    /**
     * 販売チャネル区分（2桁固定）
     */
    hmbichnnlTyp: string;
    /**
     * 販売会社コード（6桁固定）
     */
    hmbigishCd: string;
    /**
     * 購入デバイス区分（2桁固定）
     */
    knydvcTyp: string;
    /**
     * 購入者コード（会員の場合は 8桁の固定値 を それ以外は null をセット）
     */
    knyshCd: string | null;
    /**
     * 会員フラグ（会員の場合は 1 を それ以外は null または 0 をセット）
     */
    kiinFlg: string | null;
    /**
     * 作品コード（6桁固定）
     */
    skhnCd: string;
    /**
     * 作品名称（最大120文字）
     */
    skhnNm: string;
    /**
     * "鑑賞券管理番号（8桁固定）
     */
    knshknknrNo: string;
    /**
     * 鑑賞券情報
     */
    knshknInf: {};
    /**
     * 決済方法区分_22: 楽天ペイ）
     */
    kssihhTyp: string;
    /**
     * 併用決済フラグ（ギフトカード利用時は 1 をそれ以外は null をセット）
     */
    hiykssiFlg: string | null;
    /**
     * 併用決済方法区分（ギフトカード利用時は 04 を それ以外は null をセット）
     */
    hiykssihhTyp: string | null;
    /**
     * 併用決済利用合計金額
     */
    hiykssirygkiknGk: number;
    /**
     * ギフトカード情報（ギフト利用がない場合は null をセット）
     */
    gftInf: {} | null;
    /**
     * ポイント利用フラグ（ポイント利用時は 1 をそれ以外は null または 0 をセット）
     */
    pintryFlg: string | null;
    /**
     * ポイント決済UUID
     */
    pintkssiUuid: string;
    /**
     * 利用ポイント
     */
    ryPt: number;
    /**
     * 獲得ポイント
     */
    kktkPt: number;
    /**
     * 利用金額（ギフトカード、ポイント利用分を差引いた利用金額）
     */
    ryknGk: number;
    /**
     * 合計金額（購入チケットの合計金額）
     */
    gkknGk: number;
    /**
     * メールテンプレートコード（5桁固定）
     */
    mltmpltCd: string;
    /**
     * 特典情報
     */
    tktncdkkhInf: {};
}

export interface IInfoArgs {
    /**
     * 決済管理番号（16桁固定）
     */
    kssiknrNo: string;
}

export interface IInfoResult {
    /**
     * 購入管理番号
     */
    knyknrNo: string;
    /**
     * QRコードURL
     */
    qrcdUrl: string;
    /**
     * デジタルインセンティブダウンロードURL
     */
    dgtlincntvdwnlodgmnUrl: string;
    /**
     * 獲得ポイント
     */
    kktkPt: string;
}

export interface INumberingSettlementNoResult {
    /**
     * 決済管理番号
     */
    kssiknr_no: string;
}