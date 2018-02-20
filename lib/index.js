"use strict";
/**
 * GMOサービス
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });
// if (process.env.MVTK_ENDPOINT === undefined) {
//     throw new Error('NPM warnings. The environment variable "MVTK_ENDPOINT" is required for using @motionpicture/mvtk.');
// }
const factory = require("./factory");
// import * as pointUtil from './utils/point';
const point_service_1 = require("./service/point/point.service");
exports.factory = factory;
var service;
(function (service) {
    /**
     * ポイントサービス
     * @class
     */
    class Point extends point_service_1.PointService {
    }
    service.Point = Point;
})(service = exports.service || (exports.service = {}));
