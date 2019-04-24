import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as eigagiftFactory from '../../factory/eigagift/eigagift.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:eigagift');

/**
 * 映画ギフトサービス
 * @class
 */
export class EigagiftService extends Service {
    /**
     * 2 映画ギフト認証
     */
    public async authentication(args: eigagiftFactory.IAuthenticationArgs): Promise<eigagiftFactory.IAuthenticationResult> {
        debug('requesting...', args);
        const form = {
            eggift_cd: args.eggiftCd,
            eggiftpin_cd: args.eggiftpinCd,
            kiin_flg: args.kiinFlg,
            ...(args.kiinCd !== undefined ? {kiin_cd: args.kiinCd} : {})
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/eigagift/authentication',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            eggiftCd: result.eggift_cd,
            eggiftpinCd: result.eggiftpin_cd,
            eggftZndk: result.eggft_zndk,
            chrgFlg: result.chrg_flg
        };
    }

    /**
     * 3 映画ギフト利用
     */
    public async use(args: eigagiftFactory.IUseArgs): Promise<eigagiftFactory.IUseResult> {
        debug('requesting...', args);
        const form = {
            myeggftry_flg: args.myeggftryFlg,
            eggft_inf: args.eggftInf.map((params: eigagiftFactory.IEggftInf): {
                eggift_cd: string;
                eggiftpin_cd: string;
                eggftkssiknr_no: string;
                eggftykkgn_ymd: string;
                rykn_gk: number;
            } => {
                return {
                    eggift_cd: params.eggiftCd,
                    eggiftpin_cd: params.eggiftpinCd,
                    eggftkssiknr_no: params.eggftkssiknrNo,
                    eggftykkgn_ymd: params.eggftykkgnYmd,
                    rykn_gk: params.ryknGk
                };
            })
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/eigagift/use',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            errjharFlg: result.errjharFlg,
            eggftInf: result.eggftInf.map((info: any): eigagiftFactory.IEggftInfResult => {
                return {
                    eggiftCd: info.eggift_cd,
                    eggiftpinCd: info.eggiftpin_cd,
                    eggftkssiknrNo: info.eggftkssiknr_no,
                    ryknGk: info.rykn_gk,
                    rymeZndk: info.ryme_zndk,
                    rygZndk: info.ryg_zndk,
                    shnnNo: info.shnn_no,
                    tppnshrykyDt: info.tppnshryky_dt,
                    errInf: (info.err_inf === undefined) ? [] : info.err_inf.map((err: any): eigagiftFactory.IErrInf => {
                        return {
                            errCd: err.err_cd,
                            errMsg: err.err_msg
                        };
                    })
                };
            })
        };
    }

    /**
     * 4 映画ギフト取消
     */
    public async cancel(args: eigagiftFactory.ICancelArgs): Promise<eigagiftFactory.ICancelResult> {
        debug('requesting...', args);
        const form = {
            eggft_inf: args.eggftInf.map((params: eigagiftFactory.IEggftInfArgs): {
                shgitrksh_flg: string;
                eggift_cd: string;
                eggiftpin_cd: string;
                eggftkssiknr_no: string;
                rykn_gk: number;
                tppnshryky_dt: string;
            } => {
                return {
                    shgitrksh_flg: params.shgitrkshFlg,
                    eggift_cd: params.eggiftCd,
                    eggiftpin_cd: params.eggiftpinCd,
                    eggftkssiknr_no: params.eggftkssiknrNo,
                    rykn_gk: params.ryknGk,
                    tppnshryky_dt: params.tppnshrykyDt
                };
            })
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/eigagift/cancel',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            errjharFlg: result.errjhar_flg,
            eggftInf: (result.eggft_inf === undefined) ? [] : result.eggft_inf.map((info: any): eigagiftFactory.IEggftInfCancelResult => {
                return {
                    eggiftCd: info.eggift_cd,
                    eggiftpinCd: info.eggiftpin_cd,
                    eggftkssiknrNo: info.eggftkssiknr_no,
                    rymeZndk: info.ryme_zndk,
                    rygZndk: info.ryg_zndk,
                    errInf: (info.err_inf === undefined) ? [] : info.err_inf.map((err: any): eigagiftFactory.IErrInf => {
                        return {
                            errCd: err.err_cd,
                            errMsg: err.err_msg
                        };
                    })
                };
            })
        };
    }

    /**
     * 5 映画ギフト登録
     */
    public async register(args: eigagiftFactory.IRegisterArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd,
            eggift_cd: args.eggiftCd,
            eggiftpin_cd: args.eggiftpinCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/eigagift/register',
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
     * 6 映画ギフト交換可能認証
     */
    public async exchangeable(args: eigagiftFactory.IExchangeableArgs): Promise<eigagiftFactory.IExchangeableResult> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd,
            evuchr_cd: args.evuchrCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/eigagift/exchangeable',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            chrgytiGk: result.chrgyti_gk,
            evuchrkknykkgnDt: result.evuchrkknykkgn_dt
        };
    }

    /**
     * 9 保有映画ギフト情報取得
     */
    public async info(args: eigagiftFactory.IInfoArgs): Promise<eigagiftFactory.IInfoResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/eigagift/info?kiin_cd=${args.kiinCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            gkZndk: result.gk_zndk,
            eggftInf: result.eggft_inf.map((info: any): eigagiftFactory.IEggftInfInfoResult => {
                return {
                    eggiftCd: info.eggift_cd,
                    eggiftpinCd: info.eggiftpin_cd,
                    eggftykkgnYmd: info.eggftykkgn_ymd,
                    eggftZndk: info.eggft_zndk
                };
            })
        };
    }

}