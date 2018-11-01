/**
 * GMOサービス
 * @module
 */

// if (process.env.MVTK_ENDPOINT === undefined) {
//     throw new Error('NPM warnings. The environment variable "MVTK_ENDPOINT" is required for using @motionpicture/mvtk.');
// }

import * as factory from './factory';
import * as pointUtil from './utils/point/point.util';

import { PointService } from './service/point/point.service';
import { PurchaseService } from './service/purchase/purchase.service';
import { UserService } from './service/user/user.service';

export import factory = factory;

export namespace service {
    /**
     * Authサービス
     * @class
     */
    export class User extends UserService { }
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
}

export namespace utils {
    export import point = pointUtil;
}
