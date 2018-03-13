/**
 * point.factory
 */
// import * as util from '../../utils/point/point.util';

// tslint:disable-next-line:no-empty-interface
export interface IPointRequest {
}

export interface IKkngntiPtZndk {
    /**
     * 有効期限終了年月 YYYY/MM
     */
    ykkgnshryYm: string;
    /**
     * 期間限定ポイント残高
     */
    kkngntiptZndk: number;
}

export interface IPtRrk {
    /**
     * 履歴日時 YYYY/MM/DD HH:mm:ss
     */
    rrkDt: string;
    /**
     * ポイント区分
     */
    ptTyp: string;
    /**
     * ポイント名称
     */
    ptkbnNm: string;
    /**
     * 履歴区分
     */
    rrkTyp: string;
    /**
     * 履歴区分名称
     */
    rrkkbnNm: string;
    /**
     * 利用・獲得ポイント
     */
    rykktkPt: number;
    /**
     * 事由
     */
    jyTxt: string;
    /**
     * 有効期限終了年月
     */
    ykkgnshryYm: null;
}

export interface IPointResult {
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

export interface IAccountCreateArgs extends IPointRequest {
    /**
     * 会員コード
     */
    kiinCd: string;
}

export interface IAccountCreateResult extends IPointResult {
    /**
     * 口座番号
     */
    khzNo: string;
}

export interface IAccountStopArgs extends IPointRequest {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * 担当者コード
     */
    tntshaCd: string;
}

export type IAccountStopResult = IPointResult;

export interface IAccountRestartArgs extends IPointRequest {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * 担当者コード
     */
    tntshaCd: string;
}

export type IAccountRestartResult = IPointResult;

export interface IBalanceArgs extends IPointRequest {
    /**
     * 会員コード
     */
    kiinCd: string;
}

export interface IBalanceResult extends IPointResult {
    /**
     * 仮充当中ポイント
     */
    krjuthchPt: number;
    /**
     * 通常ポイント残高
     */
    tujptZndk: number;
    /**
     * 期間限定ポイント残高リスト
     */
    kkngntiptZndkLst: IKkngntiPtZndk[];
}

export interface IInfoArgs extends IPointRequest {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * 取得開始年月 YYYY/MM
     */
    shtkkishYm?: string;
    /**
     * 取得終了年月 YYYY/MM
     */
    shtkshryYm?: string;
}

export interface IInfoResult extends IPointResult {
    /**
     * 口座番号
     */
    khzNo: string;
    /**
     * 仮充当中ポイント
     */
    krjuthchPt: number;
    /**
     * 通常ポイント残高
     */
    tujptZndk: number;
    /**
     * 通常ポイント有効期限終了年月日
     */
    tujptykkgnshryYmd?: string;
    /**
     * 期間限定ポイント残高リスト
     */
    kkngntiptZndkLst: IKkngntiPtZndk[];
    /**
     * ポイント履歴リスト
     */
    ptRrkLst: IPtRrk[];
}

export interface IHistoryArgs extends IPointRequest {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * 取得開始年月 YYYY/MM
     */
    shtkkishYm: string;
    /**
     * 取得終了年月 YYYY/MM
     */
    shtkshryYm: string;
}

export interface IHistoryResult extends IPointResult {
    /**
     * ポイント履歴リスト
     */
    ptRrkLst: IPtRrk[];
}

export interface ITempRedeemArgs extends IPointRequest {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * 仮充当中ポイント
     */
    krjuthchPt: number;
    /**
     * 取引日時 yyyy/MM/dd HH:mm:ss.fff形式
     */
    tranDt: string;
    /**
     * トークンID
     */
    tknId: string;
}

export interface ITempRedeemResult extends IPointResult {
    /**
     * 仮充当決済UUID
     */
    uuid: string;
}

export interface ITempRedeemCancelArgs extends IPointRequest {
    /**
     * 仮充当決済UUID
     */
    uuid: string;
    /**
     * 会員コード
     */
    kiinCd: string;
}

export type ITempRedeemCancelResult = IPointResult;

// export interface IRedeemArgs extends IPointRequest {
//     /**
//      * 仮充当決済UUID
//      */
//     uuid: string;
//     /**
//      * ryCd
//      */
//     ryCd: string;
//     /**
//      * ryTxt
//      */
//     ryTxt: string;
// }

// export type IRedeemResult = IPointResult;

// export interface IAccumulateArgs extends IPointRequest {
//     /**
//      * 会員コード
//      */
//     kiinCd: string;
//     /**
//      * pt
//      */
//     pt: string;
//     /**
//      * ptKktkKssiId
//      */
//     ptKktkKssiId: string;
//     /**
//      * 担当者コード
//      */
//     tntshaCd: string;
// }

// export type IAccumulateResult = IPointResult;

export interface IGrantArgs extends IPointRequest {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * 付与ポイント
     */
    fyPt: number;
    /**
     * 事由区分
     */
    jyTyp: string;
    /**
     * 事由本文
     */
    jyTxt?: string;
    /**
     * 担当者コード
     */
    tntshaCd: string;
}

export type IGrantResult = IPointResult;

export interface IRevokeArgs extends IPointRequest {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * 削除ポイント
     */
    skjPt: number;
    /**
     * 事由区分
     */
    jyTyp: string;
    /**
     * 事由本文
     */
    jyTxt?: string;
    /**
     * 担当者コード
     */
    tntshaCd: string;
}

export type IRevokeResult = IPointResult;

export interface IGrantLimitedArgs extends IPointRequest {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * 有効期間終了年月
     */
    ykkgnshryYm: string;
    /**
     * 付与ポイント
     */
    fyPt: number;
    /**
     * 事由区分
     */
    jyTyp: string;
    /**
     * 事由本文
     */
    jyTxt?: string;
    /**
     * 担当者コード
     */
    tntshaCd: string;
}

export type IGrantLimitedResult = IPointResult;

export interface IRevokeLimitedArgs extends IPointRequest {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * 有効期間終了年月
     */
    ykkgnshryYm: string;
    /**
     * 削除ポイント
     */
    skjPt: number;
    /**
     * 事由区分
     */
    jyTyp: string;
    /**
     * 事由本文
     */
    jyTxt?: string;
    /**
     * 担当者コード
     */
    tntshaCd: string;
}

export type IRevokeLimitedResult = IPointResult;

export interface IPercentageArgs extends IPointRequest {
    skhnCd: string;
}

export interface IPercentageResult extends IPointResult {
    kktkptRt: number;
}
