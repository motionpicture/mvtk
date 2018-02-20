import * as pointFactory from '../../factory/point/point.factory';
import { Service } from '../../service';
/**
 * ポイントサービス
 * @class
 */
export declare class PointService extends Service {
    /**
     * 口座作成
     */
    accountCreate(args: pointFactory.IAccountCreateArgs): Promise<pointFactory.IAccountCreateResult>;
    /**
     * 口座停止
     */
    accountStop(args: pointFactory.IAccountStopArgs): Promise<pointFactory.IAccountStopResult>;
    /**
     * 口座再開
     */
    accountRestart(args: pointFactory.IAccountRestartArgs): Promise<pointFactory.IAccountRestartResult>;
    /**
     * 口座番号取得
     */
    accountNumber(args: pointFactory.IAccountNumberArgs): Promise<pointFactory.IAccountNumberResult>;
    /**
     * 残高取得
     */
    balance(args: pointFactory.IBalanceArgs): Promise<pointFactory.IBalanceResult>;
    /**
     * 残高取得
     */
    info(args: pointFactory.IInfoArgs): Promise<pointFactory.IInfoResult>;
    /**
     * ポイント履歴取得
     */
    history(args: pointFactory.IHistoryArgs): Promise<pointFactory.IHistoryResult>;
    /**
     * 仮充当
     */
    tempRedeem(args: pointFactory.ITempRedeemArgs): Promise<pointFactory.ITempRedeemResult>;
    /**
     * 仮充当解除
     */
    tempRedeemCancel(args: pointFactory.ITempRedeemCancelArgs): Promise<pointFactory.ITempRedeemCancelResult>;
    /**
     * 充当
     */
    redeem(args: pointFactory.IRedeemArgs): Promise<pointFactory.IRedeemResult>;
    /**
     * 通常ポイント獲得
     */
    accumulate(args: pointFactory.IAccumulateArgs): Promise<pointFactory.IAccumulateResult>;
    /**
     * 通常ポイント付与
     */
    grant(args: pointFactory.IGrantArgs): Promise<pointFactory.IGrantResult>;
    /**
     * 通常ポイント削除
     */
    revoke(args: pointFactory.IRevokeArgs): Promise<pointFactory.IRevokeResult>;
    /**
     * 期間限定ポイント付与
     */
    grantLimited(args: pointFactory.IGrantLimitedArgs): Promise<pointFactory.IGrantLimitedResult>;
    /**
     * 期間限定ポイント削除
     */
    revokeLimited(args: pointFactory.IRevokeLimitedArgs): Promise<pointFactory.IRevokeLimitedResult>;
}
