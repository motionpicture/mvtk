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
     * クレジットカード情報保存フラグ（クレジットカード情報保存チェックがONの場合は 1 をそれ以外は null をセット）
     */
    crdjhhznFlg: string | null;
    /**
     * 本人認証有フラグ（0：本人確認を行わない／1：本人確認を行う／null：クレジットカード決済以外）
     */
    hnnnnnsharFlg: string | null;
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
    /**
     * プロモーションコード利用フラグ
     */
    prmtncdryFlg: string;
    /**
     * プロモーションコード
     */
    prmtnCd: string;
    /**
     * プロモーションコード決済UUID（複数のプロモコードを利用する場合カンマ区切りで指定）
     */
    prmtncdkssiUuid: string;
    /**
     * プロモーションコード割引額
     */
    prmtncdwrbkGk: number;
    /**
     * 映画ギフト利用フラグ
     */
    eggftryFlg: string;
    /**
     * 保有映画ギフト利用フラグ（保有映画ギフトからの利用の場合：1／それ以外：0）
     */
    myeggftryFlg: string;
    /**
     * 映画ギフト情報（映画ギフト利用がない場合は null をセット）
     */
    eggftInf: {
        eggftCd: string;
        eggftpinCd: string;
        eggftkssiknrNo: string;
        eggftykkgnYmd: string;
        eggftryknGk: string;
    }[] | null;
    /**
     * サイト識別コード（外部遷移元パラメータ）※外部サイトから遷移してきた場合のみセット
     */
    stshkbtsCd?: string;
    /**
     * ユーザー識別コード（外部遷移元パラメータ）※外部サイトから遷移してきた場合のみセット
     */
    usrshkbtsCd?: string;

    /**
     * 遷移元券種選択画面区分（01：ムビチケサイト／02：アプリ／03：ウィジェット）
     */
    snimtknshsntkgmnTyp?: string;
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

export interface IPurchasableDateTimeArgs {
    /**
     * 作品コード（6桁固定）
     */
    skhnCd: string;
    /**
     * 販売区分（00:前売り券／01:当日券）
     */
    hmbiTyp: string;
}

export interface IPurchasableDateTimeResult {
    /**
     * 購入日時（日時形式 format: yyyy/MM/dd HH:mm:ss）
     */
    knyDt: string;
}

export interface ITempPreserveBonusArgs {
    /**
     * 決済管理番号（16桁固定）
     */
    kssiknrNo: string;
    /**
     * 作品コード（6桁固定）
     */
    skhnCd: string;
    /**
     * 決済方法区分（00：クレジット／01：auかんたん決済／02：d払い／22：楽天ペイ）
     */
    kssihhTyp: string;
    /**
     * 併用決済フラグ（ムビチケ前売券GIFT利用時は 1 をそれ以外は null をセット）
     */
    hiykssiFlg: string | null;
    /**
     * 併用決済方法区分（ムビチケ前売券GIFT利用時は 04 を それ以外は null をセット）
     */
    hiykssihhTyp: string | null;
    /**
     * ポイント利用フラグ（ポイント利用時は 1 をそれ以外は null または 0 をセット）
     */
    pintryFlg: string | null;
    /**
     * プロモーションコード利用フラグ
     */
    prmtncdryFlg: string | null;
    /**
     * 映画ギフト利用フラグ
     */
    eggftryFlg: string | null;
    /**
     * 購入日時（日時形式 format: yyyy/MM/dd HH:mm:ss）
     */
    knyDt: string;
    /**
     * 鑑賞券情報
     */
    knshknInf: {
        /**
         * 券種区分（2桁固定）
         */
        knshTyp: string;
        /**
         * 購入枚数
         */
        knymiNum: number;
    }[];
}

export interface ITempPreserveBonusResult {
    /**
     * 特典在庫エラー情報ありフラグ
     */
    errjharFlg: string;
    /**
     * 特典コード確保番号リスト
     */
    tktncdkkhnoLst?: string[];
    /**
     * "特典在庫状況メッセージリスト ※HTMLタグを含む
     */
    tktnzikjkymsgLst?: string[];
}

export interface IRecommend {
    /**
     * 購入作品コード
     */
    knyskhnCd: string;
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
    /**
     * 表示件数（指定しない場合は自動的に 5 をデフォルトとする）
     */
    hyjNum: number;
}

export interface IRecommendResult {
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
    /**
     * 全国公開年月日（年月日形式 format: yyyyMMdd）
     */
    znkkkkikishYmd: string;
    /**
     * 全国公開開始日記述
     */
    znkkkkikishDspt: string;
    /**
     * 鑑賞券販売終了年月日（日付形式 format: yyyyMMdd）
     */
    knshknhmbishryYmd: string;
    /**
     * 「観たい」登録者数
     */
    mtitrksyNum: number;
}

export interface IForwardMail {
    /**
     * 購入管理番号
     */
    knyknrNo: string;
    /**
     * 転送先メールアドレス
     */
    frwrdMladdr: string;
}

export interface IIdentityVerify {
    /**
     * 決済管理番号
     */
    kssiknrNo: string;
    /**
     * 購入者メールアドレス
     */
    knyshMladdr: string;
    /**
     * 購入者コード（非会員の場合は null をセット）
     */
    knyshCd: string | null;
    /**
     * IPアドレス（IP取得ができない場合 null をセット）
     */
    ipAddr: string | null;
}

export type IRecommendDetailResult = IRecommendResult[];
