/**
 * GMOサービス
 * @module
 */

// if (process.env.MVTK_ENDPOINT === undefined) {
//     throw new Error('NPM warnings. The environment variable "MVTK_ENDPOINT" is required for using @motionpicture/mvtk.');
// }

import * as factory from './factory';

import * as campaignUtil from './utils/campaign/campaign.util';
import * as eigagiftUtil from './utils/eigagift/eigagift.util';
import * as pointUtil from './utils/point/point.util';

import { CampaignService } from './service/campaign/campaign.service';
import { EigagiftService } from './service/eigagift/eigagift.service';
import { FavoriteService } from './service/favorite/favorite.service';
import { FilmService } from './service/film/film.service';
import { GmoService } from './service/gmo/gmo.service';
import { HistoryService } from './service/history/history.service';
import { PointService } from './service/point/point.service';
import { PromotionCodeService } from './service/promotionCode/promotionCode.service';
import { PurchaseService } from './service/purchase/purchase.service';
import { ScheduleService } from './service/schedule/schedule.service';
import { TheaterService } from './service/theater/theater.service';
import { UserService } from './service/user/user.service';
import { UtilityService } from './service/utility/utility.service';

export import factory = factory;

//tslint:disable:max-classes-per-file
export namespace service {
    /**
     * キャンペーンサービス
     * @class
     */
    export class Campaign extends CampaignService { }
    /**
     * 映画ギフトサービス
     * @class
     */
    export class Eigagift extends EigagiftService { }

    /**
     * Authサービス
     * @class
     */
    export class Favorite extends FavoriteService { }

    /**
     * 作品情報サービス
     */
    export class Film extends FilmService { }

    /**
     * 購入履歴サービス
     */
    export class History extends HistoryService { }

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

    /**
     * プロモーションコード関連サービス
     * @class
     */
    export class PromotionCode extends PromotionCodeService { }

    /**
     * ユーティリティサービス
     * @class
     */
    export class Utility extends UtilityService { }
    /**
     * GMOサービス
     * @class
     */
    export class Gmo extends GmoService { }
}

export namespace utils {
    export import eigagift = eigagiftUtil;
    export import point = pointUtil;
    export import campaign = campaignUtil;
}
