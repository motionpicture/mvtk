/**
 * 映画ギフトユーティリティー
 * @namespace utils/eigagift
 */

/**
 * ステータス
 */
export enum Status {
    /**
     * 正常
     */
    'Normal' = 'E000'
}

/**
 * チャージ区分
 */
export enum ChrgTyp {
    /**
     * 映画GIFT購入
     */
    'GiftPurchase' = '00',
    /**
     * AMCクーポン交換
     */
    'AmcCoupon' = '01'
}

/**
 * メールテンプレートコード（5桁固定）
 */
export enum MltmpltCd {
    /**
     * 映画GIFT購入
     */
    'GiftPurchase' = 'U0021',
    /**
     * AMCクーポン交換
     */
    'AmcCoupon' = 'U0022'
}
