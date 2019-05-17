/**
 * ファクトリー
 * @namespace factory
 */

import * as EigagiftFactory from './factory/eigagift/eigagift.factory';
import * as PointFactory from './factory/point/point.factory';
import * as PurchaseFactory from './factory/purchase/purchase.factory';

export import point = PointFactory;
export import purchase = PurchaseFactory;
export import eigagift = EigagiftFactory;
