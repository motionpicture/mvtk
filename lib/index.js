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
const pointUtil = require("./utils/point/point.util");
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
var utils;
(function (utils) {
    utils.point = pointUtil;
})(utils = exports.utils || (exports.utils = {}));
