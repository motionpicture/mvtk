/**
 * point.factory
 */
// import * as util from '../../utils/point/point.util';

// tslint:disable-next-line:no-empty-interface
export interface IPointRequest {
}

export interface ICpptInf {
    /**
     * 有効期限終了年月（年月形式 format：yyyy/MM）
     */
    ykkgnshryYm: string;
    /**
     * キャンペーンポイント残高
     */
    cpptZndk: number;
}

export interface IRrkInf {
    /**
     * 履歴日時（日時形式 format：yyyy/MM/dd HH:mm:ss）
     */
    rrkDt: string;
    /**
     * ポイント区分（0：購入／1：キャンペーン）
     */
    ptTyp: string;
    /**
     * ポイント区分名称
     */
    ptkbnNm: string;
    /**
     * 履歴区分（0：利用／1：付与／2：獲得／3：取消／4：失効）
     */
    rrkTyp: string;
    /**
     * 履歴区分名称
     */
    rrkkbnNm: string;
    /**
     * 処理ポイント（マイナス表記あり）
     */
    shrPt: number;
    /**
     * 事由
     */
    jyTxt?: string;
    /**
     * 有効期限終了年月（年月形式 format：yyyy/MM）※履歴がキャンペーンポイントの場合のみ設定される
     */
    ykkgnshryYm: null;
}

export interface IAccountCreateArgs extends IPointRequest {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
}

export interface IAccountCreateResult {
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
     * 担当ユーザーコード
     */
    usrCd: string;
}

export type IAccountRestartArgs = IAccountStopArgs;

export interface IBalanceArgs extends IPointRequest {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
}

export interface IBalanceResult {
    /**
     * 仮充当中ポイント
     */
    krjuthchPt: number;
    /**
     * 購入ポイント残高
     */
    knyptZndk: number;
    /**
     * キャンペーンポイント情報
     */
    cpptInf: ICpptInf[];
}

export interface IInfoArgs {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * 履歴取得開始年月（年月形式 format：yyyy/MM）
     */
    rrksytkkishYm?: string;
    /**
     * 履歴取得終了年月（年月形式 format：yyyy/MM）
     */
    rrksytkshryYm?: string;
}

export interface IInfoResult {
    /**
     * 仮充当中ポイント
     */
    krjuthchPt: number;
    /**
     * 購入ポイント残高
     */
    knyptZndk: number;
    /**
     * 購入ポイント有効期限終了年月日（年月日形式 format：yyyy/MM/dd）
     */
    knyptykkgnshryYmd: string;
    /**
     * キャンペーンポイント情報
     */
    cpptInf: ICpptInf[];
    /**
     * 履歴情報
     */
    rrkInf: IRrkInf[];
}

export type IHistoryArgs = IInfoArgs;

export type IHistoryResult = IRrkInf[];

export interface ITempRedeemArgs extends IPointRequest {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
    /**
     * 仮充当中ポイント
     */
    krjuthchPt: number;
    /**
     * 取引日時（日時形式 format：yyyy/MM/dd HH:mm:ss）
     */
    tranDt: string;
    /**
     * トークンID
     */
    tknId?: string;
}

export interface ITempRedeemResult {
    /**
     * ポイント決済UUID
     */
    uuid: string;
}

export type ITempRedeemCancelArgs = ITempRedeemResult;

export interface IGrantArgs extends IPointRequest {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
    /**
     * 操作ポイント（付与）
     */
    susPt: number;
    /**
     * 事由区分
     */
    jyTyp: string;
    /**
     * 事由
     */
    jyTxt?: string;
    /**
     * 担当ユーザーコード
     */
    usrCd: string;
}

export type IRevokeArgs = IGrantArgs;

export interface IGrantLimitedArgs extends IGrantArgs {
    /**
     * 有効期限終了年月（年月形式 format：yyyy/MM）
     */
    ykkgnshryYm: string;
}

export type IRevokeLimitedArgs = IGrantLimitedArgs;

export interface IPercentageArgs {
    /**
     * 作品コード（6桁固定）
     */
    skhnCd: string;
}

export interface IPercentageResult {
    /**
     * 獲得率
     */
    kktkRt: number;
}
