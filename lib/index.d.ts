/**
 * GMOサービス
 * @module
 */
import * as factory from './factory';
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
}
