/**
 * ファクトリー
 * @namespace factory
 */

import * as EigagiftFactory from './factory/eigagift/eigagift.factory';
import * as FavoriteFactory from './factory/favorite/favorite.factory';
import * as FilmFactory from './factory/film/film.factory';
import * as GmoFactory from './factory/gmo/gmo.factory';
import * as HistoryFactory from './factory/history/history.factory';
import * as PointFactory from './factory/point/point.factory';
import * as PromotionCodeFactory from './factory/promotionCode/promotionCode.factory';
import * as PurchaseFactory from './factory/purchase/purchase.factory';
import * as ScheduleFactory from './factory/schedule/schedule.factory';
import * as TheaterFactory from './factory/theater/theater.factory';
import * as UtilityFactory from './factory/utility/utility.factory';

export import eigagift = EigagiftFactory;
export import favorite = FavoriteFactory;
export import film = FilmFactory;
export import history = HistoryFactory;
export import point = PointFactory;
export import promotionCode = PromotionCodeFactory;
export import purchase = PurchaseFactory;
export import schedule = ScheduleFactory;
export import theater = TheaterFactory;
export import utility = UtilityFactory;
export import gmo = GmoFactory;
