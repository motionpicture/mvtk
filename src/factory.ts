/**
 * ファクトリー
 * @namespace factory
 */

import * as PointFactory from './factory/point/point.factory';
import * as PurchaseFactory from './factory/purchase/purchase.factory';

export import point = PointFactory;
export import purchase = PurchaseFactory;
