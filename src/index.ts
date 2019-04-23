/**
 * GMOサービス
 * @module
 */

// if (process.env.MVTK_ENDPOINT === undefined) {
//     throw new Error('NPM warnings. The environment variable "MVTK_ENDPOINT" is required for using @motionpicture/mvtk.');
// }

import * as factory from './factory';
import * as eigagiftUtil from './utils/eigagift/eigagift.util';
import * as pointUtil from './utils/point/point.util';

import { EigagiftService } from './service/eigagift/eigagift.service';
import { PointService } from './service/point/point.service';
import { PurchaseService } from './service/purchase/purchase.service';
import { UserService } from './service/user/user.service';

export import factory = factory;

// tslint:disable:max-classes-per-file
export namespace service {
    /**
     * 映画ギフトサービス
     * @class
     */
    export class Eigagift extends EigagiftService { }
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
    export import eigagift = eigagiftUtil;
    export import point = pointUtil;
}
