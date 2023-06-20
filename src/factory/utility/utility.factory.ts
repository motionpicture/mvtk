/**
 * history.factory
 */

//-------------------------------- 各種コード検索 --------------------------------//
export interface ICodeArgs {
    /**
     * 項目区分（3桁固定）
     */
    kmkTyp: string;
}

export interface ICodeResult {
    /**
     * 項目区分
     */
    kmkTyp: string;
    /**
     * 項目区分名称
     */
    kmkkbnNm: string;
    /**
     * 区分情報
     */
    kbnInf: IKbnInf[];
}

export interface IKbnInf {
    /**
     * 区分
     */
    kbnTyp: string;
    /**
     * 区分名称
     */
    kbnNm: string;
}

//-------------------------------- QRコード生成 --------------------------------//
export interface IQrcodeArgs {
    /**
     * 購入管理番号（10桁固定）
     */
    knyknrNo: string;
    /**
     * PINコード（4桁固定）
     */
    pinCd?: string;
    /**
     * PINコードチェックフラグ（0：チェックしない／1：チェックする）
     */
    pinchkFlg: string;
}

export interface IQrcodeResult {
    /**
     * QRコードURL
     */
    qrcdUrl: string;
}

//-------------------------------- チケット情報照会 --------------------------------//
export interface ITicketInfoArgs {
    /**
     * 購入管理番号（10桁固定）
     */
    knyknrNo: string;
    /**
     * PINコード（4桁固定）
     */
    pinCd: string;
}

export interface ITicketInfoResult {
    /**
     * チケット情報表示区分（01：QRコードのみ／02：詳細情報表示）
     */
    tcktjhhyjTyp: string;
    /**
     * 購入管理番号（10桁固定）
     */
    knyknrNo: string;
    /**
     * QRコードURL
     */
    qrcdUrl: string;
    /**
     * 有効期限年月日（形式：yyyyMMdd）
     */
    ykkgnYmd?: string;
    /**
     * 利用可能劇場情報
     */
    ryknhstInf: IRyknhstInf[];
    /**
     * 合計枚数
     */
    gkmiNum?: number;
    /**
     * 利用済枚数
     */
    ryzmmiNum?: number;
    /**
     * 利用可能枚数
     */
    ryknhmiNum?: number;
    /**
     * 利用状況情報
     */
    ryjkyInf?: IRyjkyInf[];
}

export interface IRyknhstInf {
    /**
     * 劇場名称
     */
    stNm?: string;
    /**
     * 劇場表示順番号
     */
    sthyjjnNo?: number;
}

export interface IRyjkyInf {
    /**
     * 利用済フラグ（0：未利用／1：利用済）
     */
    ryzmFlg?: string;
    /**
     * 券種区分名称
     */
    knshkbnNm?: string;
    /**
     * 鑑賞劇場名称 ※利用済のみ
     */
    knshstNm?: string;
    /**
     * 鑑賞劇場名称 ※利用済のみ
     */
    knshskhnNm?: string;
    /**
     * 鑑賞年月日（形式：yyyyMMdd）※利用済のみ
     */
    knshYmd?: string;
    /**
     * 鑑賞時分（形式：hhmm）※利用済のみ
     */
    knshHm?: string;

}
