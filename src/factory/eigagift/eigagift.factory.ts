/**
 * eigagift.factory
 */

// tslint:disable-next-line:no-empty-interface

//******************************* 映画ギフト交換 *******************************//
export interface IExchangeArgs {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
    /**
     * eバウチャーコード
     */
    evuchrCd: string;
}

export interface IExchangeResult {
    /**
     * チャージ金額
     */
    chrgGk: number;
}

//******************************* 映画ギフト発行 *******************************//
export interface IIssueArgs {
    /**
     * 映画ギフト決済管理番号（16桁固定）
     */
    eggftkssiknrNo: string;
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
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
     * 決済方法区分（00：クレジット）
     */
    kssihhTyp: string;
    /**
     * チャージ金額
     */
    chrgGk: number;
}

export type IIssueResult = IExchangeResult;

//******************************* 映画ギフト決済管理番号採番 *******************************//
export interface INumberingSettlementNoResult {
    /**
     * 映画ギフト決済管理番号（16桁固定）
     */
    eggftkssiknrNo: string;
}

//******************************* 映画ギフト決済情報仮登録 *******************************//
export type ITempSettlementRegisterArgs = IIssueArgs;

//******************************* 映画ギフト処理完了メール送信 *******************************//
export interface ISendMailArgs {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
    /**
     * チャージ金額
     */
    chrgGk: number;
    /**
     * チャージ区分（00：金額指定チャージ／01：コードからチャージ／02：eバウチャー交換）
     */
    chrgTyp: string;
    /**
     * 映画ギフト決済管理番号（16桁固定）
     * ※映画ギフト金額指定チャージ時のみセット
     */
    eggftkssiknrNo?: string;
    /**
     * 購入者 姓（最大15文字）
     * ※映画ギフト金額指定チャージ時のみセット
     */
    knyshsiNm?: string;
    /**
     * 購入者 名（最大15文字）
     * ※映画ギフト金額指定チャージ時のみセット
     */
    knyshmiNm?: string;
    /**
     * 購入者メールアドレス（最大128文字）
     * ※映画ギフト金額指定チャージ時のみセット
     */
    knyshMladdr?: string;
}

//******************************* 映画ギフトチャージ状況取得 *******************************//
export interface IStatusArgs {
    /**
     * 映画ギフト決済管理番号（16桁固定）
     * ※映画ギフト金額指定チャージ時のみセット
     */
    eggftkssiknrNo: string;
}

export interface IStatusResult {
    /**
     * チャージ金額
     */
    chrgGk: number;
}
