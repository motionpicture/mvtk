/**
 * incentive.factory
 */

//-------------------------- デジタルインセンティブダウンロード情報検索 --------------------------//
export interface IDownloadInfoArgs {
    /**
     * デジタルインセンティブダウンロードURL
     */
    dgtlincntvUrl: string;
}

export interface IDownloadInfoResult {
    /**
     * 購入管理番号
     */
    knyknrNo: string;
    /**
     * デジタルインセンティブ情報
     */
    dgtlincntvInf?: IDgtlincntvInf[];
}

export interface IDgtlincntvInf {
    /**
     * デジタルインセンティブコード
     */
    dgtlincntvCd?: string;
    /**
     * デジタルインセンティブタイトル
     */
    dgtlincntvTtl?: string;
    /**
     * デジタルインセンティブ説明本文
     */
    dgtlincntvstsmiTxt?: string;
    /**
     * サンプル画像URL
     */
    smplgzUrl?: string;
    /**
     * デジタルインセンティブ購入開始年月日（日付形式 format: yyyyMMdd）
     */
    dgtlincntvknykishYmd?: string;
    /**
     * デジタルインセンティブ購入終了年月日（日付形式 format: yyyyMMdd）
     */
    dgtlincntvknyshryYmd?: string;
    /**
     * デジタルインセンティブダウンロード有効期間
     */
    dgtlincntvdwnlodykTm?: number;
    /**
     * 作品デジタルインセンティブ備考
     */
    skhndgtlincntvRmk?: string;
    /**
     * デジタルインセンティブ詳細情報
     */
    dgtlincntvshsiInf?: IDgtlincntvshsiInf[];
}

export interface IDgtlincntvshsiInf {
    /**
     * デジタルインセンティブ枝番号
     */
    dgtlincntvedNo?: string;
    /**
     * デジタルインセンティブ詳細タイトル
     */
    dgtlincntvshsiTtl?: string;
}
//---------------------------- デジタルインセンティブダウンロード ----------------------------//
export interface IDownloadArgs {
    /**
     * 購入管理番号
     */
    knyknrNo: string;
    /**
     * デジタルインセンティブコード
     */
    dgtlincntvCd: string;
    /**
     * デジタルインセンティブ枝番号
     */
    dgtlincntvedNo: string;
}

export interface IDownloadResult {
    /**
     * ダウンロードファイル名称
     */
    dwnlodflNm: string;
    /**
     * ダウンロードファイルバイト配列
     */
    dwnlodflBt: string;
}
