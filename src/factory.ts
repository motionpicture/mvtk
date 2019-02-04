/**
 * ファクトリー
 * @namespace factory
 */

import * as PointFactory from './factory/point/point.factory';
import * as PromotionCodeFactory from './factory/promotionCode/promotionCode.factory';
import * as PurchaseFactory from './factory/purchase/purchase.factory';

export import point = PointFactory;
export import promotionCode = PromotionCodeFactory;
export import purchase = PurchaseFactory;
