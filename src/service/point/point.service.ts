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
     * 1.口座作成
     */
    public async create(args: pointFactory.IAccountCreateArgs): Promise<pointFactory.IAccountCreateResult> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/create',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            khzNo: result.khz_no
        };
    }

    /**
     * 2.口座停止
     */
    public async stop(args: pointFactory.IAccountStopArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd,
            usr_cd: args.usrCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/stop',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            status: 'OK'
        };
    }

    /**
     * 3.口座再開
     */
    public async restart(args: pointFactory.IAccountRestartArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd,
            usr_cd: args.usrCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/restart',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            status: 'OK'
        };
    }

    /**
     * 4.残高取得
     */
    public async balance(args: pointFactory.IBalanceArgs): Promise<pointFactory.IBalanceResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/point/balance?kiin_cd=${args.kiinCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            krjuthchPt: Number(result.krjuthch_pt),
            knyptZndk: Number(result.knypt_zndk),
            cpptInf: (result.cppt_inf === null)
                ? []
                : result.cppt_inf.map((cpptInfo: any): pointFactory.ICpptInf => {
                    return {
                        ykkgnshryYm: cpptInfo.ykkgnshry_ym,
                        cpptZndk: Number(cpptInfo.cppt_zndk)
                    };
                })
        };
    }

    /**
     * 5.情報取得
     */
    public async info(args: pointFactory.IInfoArgs): Promise<pointFactory.IInfoResult> {
        debug('requesting...', args);
        const rrksytkkishYm = (args.rrksytkkishYm !== undefined) ? `&rrksytkkish_ym=${args.rrksytkkishYm}` : '';
        const rrksytkshryYm = (args.rrksytkshryYm !== undefined) ? `&rrksytkshry_ym=${args.rrksytkshryYm}` : '';
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/point/info?kiin_cd=${args.kiinCd}${rrksytkkishYm}${rrksytkshryYm}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            krjuthchPt: Number(result.krjuthch_pt),
            knyptZndk: Number(result.knypt_zndk),
            knyptykkgnshryYmd: result.knyptykkgnshry_ymd,
            cpptInf: (result.cppt_inf === null) ? [] : result.cppt_inf.map((cpptInfo: any): pointFactory.ICpptInf => {
                return {
                    ykkgnshryYm: cpptInfo.ykkgnshry_ym,
                    cpptZndk: Number(cpptInfo.cppt_zndk)
                };
            }),
            rrkInf: (result.rrk_inf === null) ? [] : result.rrk_inf.map((rrkInfo: any): pointFactory.IRrkInf => {
                return {
                    rrkDt: rrkInfo.rrk_dt,
                    ptTyp: rrkInfo.pt_typ,
                    ptkbnNm: rrkInfo.ptkbn_nm,
                    rrkTyp: rrkInfo.rrk_typ,
                    rrkkbnNm: rrkInfo.rrkkbn_nm,
                    shrPt: Number(rrkInfo.shr_pt),
                    jyTxt: rrkInfo.jy_txt,
                    ykkgnshryYm: rrkInfo.ykkgnshry_ym
                };
            })
        };
    }

    /**
     * 6.ポイント履歴取得
     */
    public async history(args: pointFactory.IHistoryArgs): Promise<pointFactory.IHistoryResult> {
        debug('requesting...', args);
        const rrksytkkishYm = (args.rrksytkkishYm !== undefined) ? `&rrksytkkish_ym=${args.rrksytkkishYm}` : '';
        const rrksytkshryYm = (args.rrksytkshryYm !== undefined) ? `&rrksytkshry_ym=${args.rrksytkshryYm}` : '';
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/point/history?kiin_cd=${args.kiinCd}${rrksytkkishYm}${rrksytkshryYm}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return (result === null) ? [] : result.map((rrkInfo: any): pointFactory.IRrkInf => {
                return {
                    rrkDt: rrkInfo.rrk_dt,
                    ptTyp: rrkInfo.pt_typ,
                    ptkbnNm: rrkInfo.ptkbn_nm,
                    rrkTyp: rrkInfo.rrk_typ,
                    rrkkbnNm: rrkInfo.rrkkbn_nm,
                    shrPt: Number(rrkInfo.shr_pt),
                    jyTxt: rrkInfo.jy_txt,
                    ykkgnshryYm: rrkInfo.ykkgnshry_ym
                };
            });
    }

    /**
     * 7.仮充当
     */
    public async tempRedeem(args: pointFactory.ITempRedeemArgs): Promise<pointFactory.ITempRedeemResult> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd,
            krjuth_pt: String(args.krjuthchPt),
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
            uuid: result.uuid
        };
    }

    /**
     * 8.仮充当解除
     */
    public async tempRedeemCancel(args: pointFactory.ITempRedeemCancelArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
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
            status: 'OK'
        };
    }

    // /**
    //  * 充当
    //  */
    // public async redeem(args: pointFactory.IRedeemArgs): Promise<pointFactory.IRedeemResult> {
    //     debug('requesting...', args);
    //     const form = args;
    //     const options = {
    //         expectedStatusCodes: [OK],
    //         uri: '/api/point/redeem',
    //         method: 'POST',
    //         form: form
    //     };
    //     const result = await this.request(options);
    //     debug('result...', result);

    //     return result;
    // }

    // /**
    //  * 通常ポイント獲得
    //  */
    // public async accumulate(args: pointFactory.IAccumulateArgs): Promise<pointFactory.IAccumulateResult> {
    //     debug('requesting...', args);
    //     const form = args;
    //     const options = {
    //         expectedStatusCodes: [OK],
    //         uri: '/api/point/accumulate',
    //         method: 'POST',
    //         form: form
    //     };
    //     const result = await this.request(options);
    //     debug('result...', result);

    //     return result;
    // }

    /**
     * 10.通常ポイント付与
     */
    public async grant(args: pointFactory.IGrantArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd,
            sus_pt: String(args.susPt),
            jy_typ: args.jyTyp,
            ...(args.jyTxt !== undefined  ? {jy_txt: args.jyTxt} : {}),
            usr_cd: args.usrCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/grant',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            status: 'OK'
        };
    }

    /**
     * 11.通常ポイント削除
     */
    public async revoke(args: pointFactory.IRevokeArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd,
            sus_pt: String(args.susPt),
            jy_typ: args.jyTyp,
            ...(args.jyTxt !== undefined  ? {jy_txt: args.jyTxt} : {}),
            usr_cd: args.usrCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/revoke',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            status: 'OK'
        };
    }

    /**
     * 12.期間限定ポイント付与
     */
    public async grantLimited(args: pointFactory.IGrantLimitedArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd,
            sus_pt: String(args.susPt),
            jy_typ: args.jyTyp,
            ...(args.jyTxt !== undefined  ? {jy_txt: args.jyTxt} : {}),
            usr_cd: args.usrCd,
            ykkgnshry_ym: args.ykkgnshryYm
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/grantLimited',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            status: 'OK'
        };
    }

    /**
     * 13.期間限定ポイント削除
     */
    public async revokeLimited(args: pointFactory.IRevokeLimitedArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd,
            sus_pt: String(args.susPt),
            jy_typ: args.jyTyp,
            ...(args.jyTxt !== undefined  ? {jy_txt: args.jyTxt} : {}),
            usr_cd: args.usrCd,
            ykkgnshry_ym: args.ykkgnshryYm
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/point/revokeLimited',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            status: 'OK'
        };
    }

    /**
     * 14.獲得率取得
     */
    public async percentage(args: pointFactory.IPercentageArgs): Promise<pointFactory.IPercentageResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/point/percentage?skhn_cd=${args.skhnCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            kktkRt: Number(result.kktk_rt)
        };
    }
}
