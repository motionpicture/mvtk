/**
 * history.factory
 */

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

export interface ICodeArgs {
    /**
     * 項目区分（3桁固定）
     */
    kmkTyp: string;
}

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

export interface IQrcodeResult {
    /**
     * QRコードURL
     */
    qrcdUrl: string;
}
