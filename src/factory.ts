/**
 * ファクトリー
 * @namespace factory
 */

import * as FavoriteFactory from './factory/favorite/favorite.factory';
import * as FilmFactory from './factory/film/film.factory';
import * as PointFactory from './factory/point/point.factory';
import * as PurchaseFactory from './factory/purchase/purchase.factory';
import * as ScheduleFactory from './factory/schedule/schedule.factory';
import * as TheaterFactory from './factory/theater/theater.factory';

export import favorite = FavoriteFactory;
export import film = FilmFactory;
export import point = PointFactory;
export import purchase = PurchaseFactory;
export import schedule = ScheduleFactory;
export import theater = TheaterFactory;
