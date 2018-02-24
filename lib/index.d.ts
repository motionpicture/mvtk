/**
 * GMOサービス
 * @module
 */
import * as factory from './factory';
import * as pointUtil from './utils/point/point.util';
import { PointService } from './service/point/point.service';
export import factory = factory;
export declare namespace service {
    /**
     * ポイントサービス
     * @class
     */
    class Point extends PointService {
    }
}
export declare namespace utils {
    export import point = pointUtil;
}
