"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createDebug = require("debug");
const http_status_1 = require("http-status");
const service_1 = require("../../service");
// import * as pointUtil from '../../utils/point/point.util';
const debug = createDebug('mvtk:service:point');
/**
 * ポイントサービス
 * @class
 */
class PointService extends service_1.Service {
    /**
     * 口座作成
     */
    accountCreate(args) {
        return __awaiter(this, void 0, void 0, function* () {
            debug('requesting...', args);
            const form = {
                kiin_cd: args.kiinCd
            };
            const options = {
                expectedStatusCodes: [http_status_1.OK],
                uri: '/api/point/accountCreate',
                method: 'POST',
                form: form
            };
            const result = yield this.request(options);
            debug('result...', result);
            return {
                khzNo: result.khz_no,
                resultInfo: {
                    status: result.result_info.status,
                    message: result.result_info.message
                }
            };
        });
    }
    /**
     * 口座停止
     */
    accountStop(args) {
        return __awaiter(this, void 0, void 0, function* () {
            debug('requesting...', args);
            const form = {
                kiin_cd: args.kiinCd
            };
            const options = {
                expectedStatusCodes: [http_status_1.OK],
                uri: '/api/point/accountStop',
                method: 'POST',
                form: form
            };
            const result = yield this.request(options);
            debug('result...', result);
            return {
                resultInfo: {
                    status: result.result_info.status,
                    message: result.result_info.message
                }
            };
        });
    }
    /**
     * 口座再開
     */
    accountRestart(args) {
        return __awaiter(this, void 0, void 0, function* () {
            debug('requesting...', args);
            const form = {
                kiin_cd: args.kiinCd,
                tntsha_cd: args.tntshaCd
            };
            const options = {
                expectedStatusCodes: [http_status_1.OK],
                uri: '/api/point/accountRestart',
                method: 'POST',
                form: form
            };
            const result = yield this.request(options);
            debug('result...', result);
            return {
                resultInfo: {
                    status: result.result_info.status,
                    message: result.result_info.message
                }
            };
        });
    }
    /**
     * 口座番号取得
     */
    accountNumber(args) {
        return __awaiter(this, void 0, void 0, function* () {
            debug('requesting...', args);
            const form = {
                kiin_cd: args.kiinCd
            };
            const options = {
                expectedStatusCodes: [http_status_1.OK],
                uri: '/api/point/accountNumber',
                method: 'POST',
                form: form
            };
            const result = yield this.request(options);
            debug('result...', result);
            return {
                khzNo: result.khz_no,
                resultInfo: {
                    status: result.result_info.status,
                    message: result.result_info.message
                }
            };
        });
    }
    /**
     * 残高取得
     */
    balance(args) {
        return __awaiter(this, void 0, void 0, function* () {
            debug('requesting...', args);
            const form = {
                kiin_cd: args.kiinCd
            };
            const options = {
                expectedStatusCodes: [http_status_1.OK],
                uri: '/api/point/balance',
                method: 'POST',
                form: form
            };
            const result = yield this.request(options);
            debug('result...', result);
            return {
                krjuthchPt: (result.krjuthch_pt === null) ? 0 : Number(result.krjuthch_pt),
                tujptZndk: (result.tujpt_zndk === null) ? 0 : Number(result.tujpt_zndk),
                kkngntiptZndkLst: (result.kkngntiptzndk_lst === null) ? [] : result.kkngntiptzndk_lst.map((kkngntiptZndk) => {
                    return {
                        ykkgnshryYm: kkngntiptZndk.ykkgnshry_ym,
                        kkngntiptZndk: kkngntiptZndk.ykkgnshry_ym
                    };
                }),
                resultInfo: {
                    status: result.result_info.status,
                    message: result.result_info.message
                }
            };
        });
    }
    /**
     * 残高取得
     */
    info(args) {
        return __awaiter(this, void 0, void 0, function* () {
            debug('requesting...', args);
            const form = {
                kiin_cd: args.kiinCd,
                shtkKish_ym: args.shtkKishYm,
                shtkShry_ym: args.shtkShryYm
            };
            const options = {
                expectedStatusCodes: [http_status_1.OK],
                uri: '/api/point/info',
                method: 'POST',
                form: form
            };
            const result = yield this.request(options);
            debug('result...', result);
            return {
                khzNo: result.khz_no,
                krjhthPt: (result.krjuthch_pt === null) ? 0 : Number(result.krjuthch_pt),
                tujptZndk: (result.tujpt_zndk === null) ? 0 : Number(result.tujpt_zndk),
                kkngntiptZndkLst: (result.kkngntiptzndk_lst === null) ? [] : result.kkngntiptzndk_lst.map((kkngntiptZndk) => {
                    return {
                        ykkgnshryYm: kkngntiptZndk.ykkgnshry_ym,
                        kkngntiptZndk: kkngntiptZndk.ykkgnshry_ym
                    };
                }),
                ptRrkLst: (result.ptrrk_lst === null) ? [] : result.ptrrk_lst.map((ptRrk) => {
                    return {
                        rrkDt: ptRrk.rrk_dt,
                        ptTyp: ptRrk.pt_typ,
                        ptKbnNm: ptRrk.ptkbn_nm,
                        rrkTyp: ptRrk.rrk_typ,
                        rrkkbnNm: ptRrk.rrkkbn_nm,
                        pt: ptRrk.pt,
                        ryCd: ptRrk.ry_cd,
                        ryTxt: ptRrk.ry_txt,
                        ykkgnshryYm: ptRrk.ykkgnshry_ym
                    };
                }),
                resultInfo: {
                    status: result.result_info.status,
                    message: result.result_info.message
                }
            };
        });
    }
    /**
     * ポイント履歴取得
     */
    history(args) {
        return __awaiter(this, void 0, void 0, function* () {
            debug('requesting...', args);
            const form = {
                kiin_cd: args.kiinCd,
                shtkKish_ym: args.shtkKishYm,
                shtkShry_ym: args.shtkShryYm
            };
            const options = {
                expectedStatusCodes: [http_status_1.OK],
                uri: '/api/point/history',
                method: 'POST',
                form: form
            };
            const result = yield this.request(options);
            debug('result...', result);
            return {
                ptRrkLst: (result.ptrrk_lst === null) ? [] : result.ptrrk_lst.map((ptRrk) => {
                    return {
                        rrkDt: ptRrk.rrk_dt,
                        ptTyp: ptRrk.pt_typ,
                        ptKbnNm: ptRrk.ptkbn_nm,
                        rrkTyp: ptRrk.rrk_typ,
                        rrkkbnNm: ptRrk.rrkkbn_nm,
                        pt: ptRrk.pt,
                        ryCd: ptRrk.ry_cd,
                        ryTxt: ptRrk.ry_txt,
                        ykkgnshryYm: ptRrk.ykkgnshry_ym
                    };
                }),
                resultInfo: {
                    status: result.result_info.status,
                    message: result.result_info.message
                }
            };
        });
    }
    /**
     * 仮充当
     */
    tempRedeem(args) {
        return __awaiter(this, void 0, void 0, function* () {
            debug('requesting...', args);
            const form = {
                kiin_cd: args.kiinCd,
                krjuth_pt: args.krjuthchPt,
                tran_dt: args.tranDt,
                tkn_id: args.tknId
            };
            const options = {
                expectedStatusCodes: [http_status_1.OK],
                uri: '/api/point/tempRedeem',
                method: 'POST',
                form: form
            };
            const result = yield this.request(options);
            debug('result...', result);
            return {
                uuid: result.uuid,
                resultInfo: {
                    status: result.result_info.status,
                    message: result.result_info.message
                }
            };
        });
    }
    /**
     * 仮充当解除
     */
    tempRedeemCancel(args) {
        return __awaiter(this, void 0, void 0, function* () {
            debug('requesting...', args);
            const form = {
                kiin_cd: args.kiinCd,
                uuid: args.uuid
            };
            const options = {
                expectedStatusCodes: [http_status_1.OK],
                uri: '/api/point/tempRedeemCancel',
                method: 'POST',
                form: form
            };
            const result = yield this.request(options);
            debug('result...', result);
            return {
                resultInfo: {
                    status: result.result_info.status,
                    message: result.result_info.message
                }
            };
        });
    }
    /**
     * 充当
     */
    redeem(args) {
        return __awaiter(this, void 0, void 0, function* () {
            debug('requesting...', args);
            const form = args;
            const options = {
                expectedStatusCodes: [http_status_1.OK],
                uri: '/api/point/redeem',
                method: 'POST',
                form: form
            };
            const result = yield this.request(options);
            debug('result...', result);
            return result;
        });
    }
    /**
     * 通常ポイント獲得
     */
    accumulate(args) {
        return __awaiter(this, void 0, void 0, function* () {
            debug('requesting...', args);
            const form = args;
            const options = {
                expectedStatusCodes: [http_status_1.OK],
                uri: '/api/point/accumulate',
                method: 'POST',
                form: form
            };
            const result = yield this.request(options);
            debug('result...', result);
            return result;
        });
    }
    /**
     * 通常ポイント付与
     */
    grant(args) {
        return __awaiter(this, void 0, void 0, function* () {
            debug('requesting...', args);
            const form = args;
            const options = {
                expectedStatusCodes: [http_status_1.OK],
                uri: '/api/point/grant',
                method: 'POST',
                form: form
            };
            const result = yield this.request(options);
            debug('result...', result);
            return result;
        });
    }
    /**
     * 通常ポイント削除
     */
    revoke(args) {
        return __awaiter(this, void 0, void 0, function* () {
            debug('requesting...', args);
            const form = args;
            const options = {
                expectedStatusCodes: [http_status_1.OK],
                uri: '/api/point/revoke',
                method: 'POST',
                form: form
            };
            const result = yield this.request(options);
            debug('result...', result);
            return result;
        });
    }
    /**
     * 期間限定ポイント付与
     */
    grantLimited(args) {
        return __awaiter(this, void 0, void 0, function* () {
            debug('requesting...', args);
            const form = args;
            const options = {
                expectedStatusCodes: [http_status_1.OK],
                uri: '/api/point/grantLimited',
                method: 'POST',
                form: form
            };
            const result = yield this.request(options);
            debug('result...', result);
            return result;
        });
    }
    /**
     * 期間限定ポイント削除
     */
    revokeLimited(args) {
        return __awaiter(this, void 0, void 0, function* () {
            debug('requesting...', args);
            const form = args;
            const options = {
                expectedStatusCodes: [http_status_1.OK],
                uri: '/api/point/revokeLimited',
                method: 'POST',
                form: form
            };
            const result = yield this.request(options);
            debug('result...', result);
            return result;
        });
    }
}
exports.PointService = PointService;
