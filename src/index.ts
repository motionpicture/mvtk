/**
 * GMOサービス
 * @module
 */

// if (process.env.MVTK_ENDPOINT === undefined) {
//     throw new Error('NPM warnings. The environment variable "MVTK_ENDPOINT" is required for using @motionpicture/mvtk.');
// }

import * as factory from './factory';
// import * as pointUtil from './utils/point';

import { PointService } from './service/point/point.service';

export import factory = factory;

export namespace service {
    /**
     * ポイントサービス
     * @class
     */
    export class Point extends PointService { }
}

export namespace utils {
    // export import point = pointUtil;
}
