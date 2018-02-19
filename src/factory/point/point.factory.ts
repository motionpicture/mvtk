/**
 * point.factory
 */
// import * as util from '../../utils/point/point.util';

export interface IPointRequest {
    /**
     * アクセスキー
     */
    accessKey: string;
}

export interface IKkngntiPtZndk {
    /**
     * ykkgnshryYm YYYY/MM
     */
    ykkgnshryYm: string;
    /**
     * kkngntiPtZndk
     */
    kkngntiPtZndk: string;
}

export interface IPtRrk {
    /**
     * rrkDt YYYY/MM/DD HH:mm:ss
     */
    rrkDt: string;
    /**
     * ptTyp
     */
    ptTyp: string;
    /**
     * ptKbnNm
     */
    ptKbnNm: string;
    /**
     * rrkTyp
     */
    rrkTyp: string;
    /**
     * rrkKbnNm
     */
    rrkKbnNm: string;
    /**
     * pt
     */
    pt: number;
    /**
     * ryCd
     */
    ryCd: string;
    /**
     * ryTxt
     */
    ryTxt: string;
    /**
     * ykkgnShryYm
     */
    ykkgnShryYm: null;
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
     * 口座No
     */
    khzNo: string;
}

export interface IAccountStopArgs extends IPointRequest {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * tntshaCd
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
     * tntshaCd
     */
    tntshaCd: string;
}

export type IAccountRestartResult = IPointResult;

export interface IAccountNumberArgs extends IPointRequest {
    /**
     * 会員コード
     */
    kiinCd: string;
}

export interface IAccountNumberResult extends IPointResult {
    /**
     * 口座No
     */
    khzNo: string;
}

export interface IBalanceArgs extends IPointRequest {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * tntshaCd
     */
    tntshaCd: string;
}

export interface IBalanceResult extends IPointResult {
    /**
     * 口座No
     */
    khzNo: string;
    /**
     * krjhthPt
     */
    krjhthPt: string;
    /**
     * tujPtZndk
     */
    tujPtZndk: string;
    /**
     * kkngntiPtZndkLst
     */
    kkngntiPtZndkLst: IKkngntiPtZndk[];
}

export interface IInfoArgs extends IPointRequest {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * shtkKishYm YYYY/MM
     */
    shtkKishYm: string;
    /**
     * shtkShryYm YYYY/MM
     */
    shtkShryYm: string;
}

export interface IInfoResult extends IPointResult {
    /**
     * 口座No
     */
    khzNo: string;
    /**
     * krjhthPt
     */
    krjhthPt: string;
    /**
     * tujPtZndk
     */
    tujPtZndk: string;
    /**
     * kkngntiPtZndkLst
     */
    kkngntiPtZndkLst: IKkngntiPtZndk[];
    /**
     * ptRrkLst
     */
    ptRrkLst: IPtRrk[];
}

export interface IHistoryArgs extends IPointRequest {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * shtkKishYm YYYY/MM
     */
    shtkKishYm: string;
    /**
     * shtkShryYm YYYY/MM
     */
    shtkShryYm: string;
}

export interface IHistoryResult extends IPointResult {
    /**
     * ptRrkLst
     */
    ptRrkLst: IPtRrk[];
}

export interface ITempRedeemArgs extends IPointRequest {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * krjhthPt
     */
    krjhthPt: string;
    /**
     * tujPtRyFlg
     */
    tujPtRyFlg: string;
    /**
     * knyDt YYYY/MM/DD HH:mm:ss
     */
    knyDt: string;
    /**
     * tknId
     */
    tknId: string;
}

export interface ITempRedeemResult extends IPointResult {
    /**
     * uuid
     */
    uuid: string;
}

export interface ITempRedeemCancelArgs extends IPointRequest {
    /**
     * uuid
     */
    uuid: string;
}

export type ITempRedeemCancelResult = IPointResult;

export interface IRedeemArgs extends IPointRequest {
    /**
     * uuid
     */
    uuid: string;
    /**
     * ryCd
     */
    ryCd: string;
    /**
     * ryTxt
     */
    ryTxt: string;
}

export type IRedeemResult = IPointResult;

export interface IAccumulateArgs extends IPointRequest {
    /**
     * kiinCd
     */
    kiinCd: string;
    /**
     * pt
     */
    pt: string;
    /**
     * ptKktkKssiId
     */
    ptKktkKssiId: string;
    /**
     * tntshaCd
     */
    tntshaCd: string;
}

export type IAccumulateResult = IPointResult;

export interface IGrantArgs extends IPointRequest {
    /**
     * kiinCd
     */
    kiinCd: string;
    /**
     * pt
     */
    pt: string;
    /**
     * ryCd
     */
    ryCd: string;
    /**
     * ryTxt
     */
    ryTxt: string;
    /**
     * tntshaCd
     */
    tntshaCd: string;
    /**
     * knyDt YYYY/MM/DD HH:mm:ss
     */
    knyDt: string;
    /**
     * tknId
     */
    tknId: string;
}

export type IGrantResult = IPointResult;

export interface IRevokeArgs extends IPointRequest {
    /**
     * kiinCd
     */
    kiinCd: string;
    /**
     * pt
     */
    pt: string;
    /**
     * ryCd
     */
    ryCd: string;
    /**
     * ryTxt
     */
    ryTxt: string;
    /**
     * tntshaCd
     */
    tntshaCd: string;
    /**
     * knyDt YYYY/MM/DD HH:mm:ss
     */
    knyDt: string;
    /**
     * tknId
     */
    tknId: string;
}

export type IRevokeResult = IPointResult;

export interface IGrantLimitedArgs extends IPointRequest {
    /**
     * kiinCd
     */
    kiinCd: string;
    /**
     * ykkgnshryYm YYYY/MM
     */
    ykkgnshryYm: string;
    /**
     * pt
     */
    pt: string;
    /**
     * ryCd
     */
    ryCd: string;
    /**
     * ryTxt
     */
    ryTxt: string;
    /**
     * tntshaCd
     */
    tntshaCd: string;
    /**
     * knyDt YYYY/MM/DD HH:mm:ss
     */
    knyDt: string;
    /**
     * tknId
     */
    tknId: string;
    /**
     * ykkgnChkFlg
     */
    ykkgnChkFlg: string;
}

export type IGrantLimitedResult = IPointResult;

export interface IRevokeLimitedArgs extends IPointRequest {
    /**
     * kiinCd
     */
    kiinCd: string;
    /**
     * ykkgnshryYm YYYY/MM
     */
    ykkgnshryYm: string;
    /**
     * pt
     */
    pt: string;
    /**
     * ryCd
     */
    ryCd: string;
    /**
     * ryTxt
     */
    ryTxt: string;
    /**
     * tntshaCd
     */
    tntshaCd: string;
    /**
     * knyDt YYYY/MM/DD HH:mm:ss
     */
    knyDt: string;
    /**
     * tknId
     */
    tknId: string;
}

export type IRevokeLimitedResult = IPointResult;
