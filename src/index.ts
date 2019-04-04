/**
 * GMOサービス
 * @module
 */

// if (process.env.MVTK_ENDPOINT === undefined) {
//     throw new Error('NPM warnings. The environment variable "MVTK_ENDPOINT" is required for using @motionpicture/mvtk.');
// }

import * as factory from './factory';
import * as pointUtil from './utils/point/point.util';

import { FavoriteService } from './service/favorite/favorite.service';
import { FilmService } from './service/film/film.service';
import { PointService } from './service/point/point.service';
import { PurchaseService } from './service/purchase/purchase.service';
import { ScheduleService } from './service/schedule/schedule.service';
import { TheaterService } from './service/theater/theater.service';
import { UserService } from './service/user/user.service';

export import factory = factory;

//tslint:disable:max-classes-per-file
export namespace service {
    /**
     * お気に入りサービス
     * @class
     */
    export class Favorite extends FavoriteService { }
    /**
     * 作品情報サービス
     */
    export class Film extends FilmService { }
    /**
     * ポイントサービス
     * @class
     */
    export class Point extends PointService { }
    /**
     * 決済関連サービス
     * @class
     */
    export class Purchase extends PurchaseService { }
    /**
     * Authサービス
     * @class
     */
    export class User extends UserService { }
    /**
     * 上映スケジュールサービス
     * @class
     */
    export class Schedule extends ScheduleService { }
    /**
     * 劇場サービス
     * @class
     */
    export class Theater extends TheaterService { }
}

export namespace utils {
    export import point = pointUtil;
}
