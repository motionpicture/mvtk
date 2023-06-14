/**
 * history.factory
 */

export interface IKnshknInf {
    /**
     * 券種区分名称
     */
    knshkbnNm: string;
    /**
     * 購入枚数
     */
    knymiNum: number;
}

export interface ITicket {
    /**
     * チケットステータス区分（01:未使用／02:座席予約済／03:ギフト贈呈済／04:有効期限切れ）
     */
    tcktsttsTyp: string;
    /**
     * 購入管理番号
     */
    knyknrNo: string;
    /**
     * ムビログ番号（16桁固定）
     */
    mvilgNo: string;
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
     * 全国公開年月日（年月日形式 format: yyyyMMdd）
     */
    znkkkkikishYmd: string;
    /**
     * 全国公開開始日記述
     */
    znkkkkikishDspt: string;
    /**
     * 購入年月日（年月日形式 format: yyyyMMdd）
     */
    knyYmd: string;
    /**
     * 鑑賞券情報
     */
    knshknInf: IKnshknInf[];
    /**
     * 共通券フラグ
     */
    kytsknFlg: boolean;
}

export interface ITicketsArgs {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
}

export interface ITicketDetailsArgs {
    /**
     * ムビログ番号（16桁固定）
     */
    mvilgNo: string;
    /**
     * 共通券フラグ
     */
    kytsknFlg: string;
}

export interface ITicketDeleteArgs {
    /**
     * ムビログ番号（16桁固定）
     */
    mvilgNo: string;
    /**
     * チケットステータス区分（02:座席予約済／03:ギフト贈呈済／04:有効期限切れ）
     */
    tcktsttsTyp: string;
}

export type ITicketResult = ITicket[];

export interface ITicketDetailResult {
    /**
     * チケットステータス区分（02:座席予約済／03:ギフト贈呈済）
     */
    tcktsttsTyp: string;
    /**
     * 鑑賞年月日（年月日形式 format: yyyyMMdd） ※座席予約済のみ
     */
    knshYmd?: string;
    /**
     * 鑑賞劇場名称 ※座席予約済のみ
     */
    knshstNm?: string;
    /**
     * ギフト送付年月日（年月日形式 format: yyyyMMdd） ※ギフト贈呈済のみ
     */
    gftsfYmd?: string;
    /**
     * ギフト宛先名称 ※ギフト贈呈済のみ
     */
    gftatskNm?: string;
    /**
     * ギフトステータス（00:ギフト開始／01:ギフト受領済） ※ギフト贈呈済のみ
     */
    gftsttsTyp?: string;
    /**
     * 鑑賞券情報
     */
    knshknInf: IKnshknInf[];
}
