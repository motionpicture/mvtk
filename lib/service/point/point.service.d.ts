import * as pointFactory from '../../factory/point/point.factory';
import { Service } from '../../service';
/**
 * ポイントサービス
 * @class
 */
export declare class PointService extends Service {
    /**
     * 1.口座作成
     */
    accountCreate(args: pointFactory.IAccountCreateArgs): Promise<pointFactory.IAccountCreateResult>;
    /**
     * 2.口座停止
     */
    accountStop(args: pointFactory.IAccountStopArgs): Promise<pointFactory.IAccountStopResult>;
    /**
     * 3.口座再開
     */
    accountRestart(args: pointFactory.IAccountRestartArgs): Promise<pointFactory.IAccountRestartResult>;
    /**
     * 4.残高取得
     */
    balance(args: pointFactory.IBalanceArgs): Promise<pointFactory.IBalanceResult>;
    /**
     * 5.情報取得
     */
    info(args: pointFactory.IInfoArgs): Promise<pointFactory.IInfoResult>;
    /**
     * 6.ポイント履歴取得
     */
    history(args: pointFactory.IHistoryArgs): Promise<pointFactory.IHistoryResult>;
    /**
     * 7.仮充当
     */
    tempRedeem(args: pointFactory.ITempRedeemArgs): Promise<pointFactory.ITempRedeemResult>;
    /**
     * 8.仮充当解除
     */
    tempRedeemCancel(args: pointFactory.ITempRedeemCancelArgs): Promise<pointFactory.ITempRedeemCancelResult>;
    /**
     * 10.通常ポイント付与
     */
    grant(args: pointFactory.IGrantArgs): Promise<pointFactory.IGrantResult>;
    /**
     * 11.通常ポイント削除
     */
    revoke(args: pointFactory.IRevokeArgs): Promise<pointFactory.IRevokeResult>;
    /**
     * 12.期間限定ポイント付与
     */
    grantLimited(args: pointFactory.IGrantLimitedArgs): Promise<pointFactory.IGrantLimitedResult>;
    /**
     * 13.期間限定ポイント削除
     */
    revokeLimited(args: pointFactory.IRevokeLimitedArgs): Promise<pointFactory.IRevokeLimitedResult>;
    /**
     * 14.獲得率取得
     */
    percentage(args: pointFactory.IPercentageArgs): Promise<pointFactory.IPercentageResult>;
}
