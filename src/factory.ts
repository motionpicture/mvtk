/**
 * ファクトリー
 * @namespace factory
 */

import * as FilmFactory from './factory/film/film.factory';
import * as PointFactory from './factory/point/point.factory';
import * as PurchaseFactory from './factory/purchase/purchase.factory';

export import film = FilmFactory;
export import point = PointFactory;
export import purchase = PurchaseFactory;
