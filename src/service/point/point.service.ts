import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as pointFactory from '../../factory/point/point.factory';
import { Service } from '../../service';
// import * as pointUtil from '../../utils/point/point.util';

const debug = createDebug('mvtk:service:point');

/**
 * ポイントサービス
 * @class
 */
export class PointService extends Service {
    /**
     * 口座作成
     */
    public async accountCreate(args: pointFactory.IAccountCreateArgs): Promise<pointFactory.IAccountCreateResult> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/accountCreate',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            khzNo: result.khz_no,
            resultInfo: {
                status: result.result_info.status,
                message: result.result_info.message
            }
        };
    }

    /**
     * 口座停止
     */
    public async accountStop(args: pointFactory.IAccountStopArgs): Promise<pointFactory.IAccountStopResult> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/accountStop',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            resultInfo: {
                status: result.result_info.status,
                message: result.result_info.message
            }
        };
    }

    /**
     * 口座再開
     */
    public async accountRestart(args: pointFactory.IAccountRestartArgs): Promise<pointFactory.IAccountRestartResult> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd,
            tntsha_cd: args.tntshaCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/accountRestart',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            resultInfo: {
                status: result.result_info.status,
                message: result.result_info.message
            }
        };
    }

    /**
     * 口座番号取得
     */
    public async accountNumber(args: pointFactory.IAccountNumberArgs): Promise<pointFactory.IAccountNumberResult> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/accountNumber',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            khzNo: result.khz_no,
            resultInfo: {
                status: result.result_info.status,
                message: result.result_info.message
            }
        };
    }

    /**
     * 残高取得
     */
    public async balance(args: pointFactory.IBalanceArgs): Promise<pointFactory.IBalanceResult> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/balance',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            krjuthchPt: (result.krjuthch_pt === null) ? 0 : Number(result.krjuthch_pt),
            tujptZndk: (result.tujpt_zndk === null) ? 0 : Number(result.tujpt_zndk),
            kkngntiptZndkLst: (result.kkngntiptzndk_lst === null) ? [] : result.kkngntiptzndk_lst.map((kkngntiptZndk: any) => {
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
    }

    /**
     * 残高取得
     */
    public async info(args: pointFactory.IInfoArgs): Promise<pointFactory.IInfoResult> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd,
            shtkKish_ym: args.shtkKishYm,
            shtkShry_ym: args.shtkShryYm
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/info',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            khzNo: result.khz_no,
            krjhthPt: (result.krjuthch_pt === null) ? 0 : Number(result.krjuthch_pt),
            tujptZndk: (result.tujpt_zndk === null) ? 0 : Number(result.tujpt_zndk),
            kkngntiptZndkLst: (result.kkngntiptzndk_lst === null) ? [] : result.kkngntiptzndk_lst.map((kkngntiptZndk: any) => {
                return {
                    ykkgnshryYm: kkngntiptZndk.ykkgnshry_ym,
                    kkngntiptZndk: kkngntiptZndk.ykkgnshry_ym
                };
            }),
            ptRrkLst: (result.ptrrk_lst === null) ? [] : result.ptrrk_lst.map((ptRrk: any) => {
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
    }

    /**
     * ポイント履歴取得
     */
    public async history(args: pointFactory.IHistoryArgs): Promise<pointFactory.IHistoryResult> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd,
            shtkKish_ym: args.shtkKishYm,
            shtkShry_ym: args.shtkShryYm
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/history',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            ptRrkLst: (result.ptrrk_lst === null) ? [] : result.ptrrk_lst.map((ptRrk: any) => {
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
    }

    /**
     * 仮充当
     */
    public async tempRedeem(args: pointFactory.ITempRedeemArgs): Promise<pointFactory.ITempRedeemResult> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd,
            krjuth_pt: args.krjuthchPt,
            tran_dt: args.tranDt,
            tkn_id: args.tknId
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/tempRedeem',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            uuid: result.uuid,
            resultInfo: {
                status: result.result_info.status,
                message: result.result_info.message
            }
        };
    }

    /**
     * 仮充当解除
     */
    public async tempRedeemCancel(args: pointFactory.ITempRedeemCancelArgs): Promise<pointFactory.ITempRedeemCancelResult> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd,
            uuid: args.uuid
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/tempRedeemCancel',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            resultInfo: {
                status: result.result_info.status,
                message: result.result_info.message
            }
        };
    }

    /**
     * 充当
     */
    public async redeem(args: pointFactory.IRedeemArgs): Promise<pointFactory.IRedeemResult> {
        debug('requesting...', args);
        const form = args;
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/redeem',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return result;
    }

    /**
     * 通常ポイント獲得
     */
    public async accumulate(args: pointFactory.IAccumulateArgs): Promise<pointFactory.IAccumulateResult> {
        debug('requesting...', args);
        const form = args;
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/accumulate',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return result;
    }

    /**
     * 通常ポイント付与
     */
    public async grant(args: pointFactory.IGrantArgs): Promise<pointFactory.IGrantResult> {
        debug('requesting...', args);
        const form = args;
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/grant',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return result;
    }

    /**
     * 通常ポイント削除
     */
    public async revoke(args: pointFactory.IRevokeArgs): Promise<pointFactory.IRevokeResult> {
        debug('requesting...', args);
        const form = args;
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/revoke',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return result;
    }

    /**
     * 期間限定ポイント付与
     */
    public async grantLimited(args: pointFactory.IGrantLimitedArgs): Promise<pointFactory.IGrantLimitedResult> {
        debug('requesting...', args);
        const form = args;
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/grantLimited',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return result;
    }

    /**
     * 期間限定ポイント削除
     */
    public async revokeLimited(args: pointFactory.IRevokeLimitedArgs): Promise<pointFactory.IRevokeLimitedResult> {
        debug('requesting...', args);
        const form = args;
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/revokeLimited',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return result;
    }
}
