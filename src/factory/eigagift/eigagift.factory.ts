/**
 * eigagift.factory
 */

// tslint:disable-next-line:no-empty-interface

//******************************** 映画ギフト履歴取得 ********************************//
export interface IHistoryArgs {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
    /**
     * 取得開始年月（年月形式 format：yyyyMM）
     */
    shtkkishYm?: string;
    /**
     * 取得終了年月（年月形式 format：yyyyMM）
     */
    shtkshryYm?: string;
}

export interface IRrkInf {
    /**
     * 履歴年月日（年月日形式 format：yyyyMMdd）
     */
    rrkYmd: string;
    /**
     * 履歴区分（01：購入／02：コードチャージ／03：交換／04：利用／05：有効期限切れ／06：マニュアル入金／07：マニュアル出金）
     */
    rrkTyp: string;
    /**
     * 履歴内容
     */
    rrkTxt?: string;
    /**
     * 取扱金額
     */
    tratskiknGk?: number;
}

export interface IHistoryResult {
    /**
     * 履歴年月（年月形式 format：yyyyMM）
     */
    rrkYm: string;
    /**
     * 映画ギフト履歴情報
     */
    rrkInf?: IRrkInf[];
}

export type IHistoryResultLst = IHistoryResult[];
