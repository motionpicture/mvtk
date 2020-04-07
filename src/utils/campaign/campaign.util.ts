/**
 * キャンペーンユーティリティー
 * @namespace utils/campaign
 */

 /**
  * キャンペーンステータス
  */
export enum CampaignStatus {
    /**
     * 実施中
     */
    'InPeriod' = '00',
    /**
     * 受付期間外
     */
    'OutsidePeriod' = '01'
}
