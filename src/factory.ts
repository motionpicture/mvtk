/**
 * ファクトリー
 * @namespace factory
 */

import * as EigagiftFactory from './factory/eigagift/eigagift.factory';
import * as PointFactory from './factory/point/point.factory';
import * as PurchaseFactory from './factory/purchase/purchase.factory';
import * as TheaterFactory from './factory/theater/theater.factory';

export import eigagift = EigagiftFactory;
export import point = PointFactory;
export import purchase = PurchaseFactory;
export import theater = TheaterFactory;
