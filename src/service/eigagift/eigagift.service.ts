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
     * 1 映画ギフトアクティベート
     */
    public async activate(args: eigagiftFactory.IActivateArgs): Promise<eigagiftFactory.IActivateResult> {
        debug('requesting...', args);
        const form = {
            eggft_inf: args.eggftInf.map((params: eigagiftFactory.IEggftInfArgs): {
                eggftkssiknr_no: string;
                eggft_cd: string;
                eggftpin_cd: string;
                chrgkn_gk: number;
            } => {
                return {
                    eggftkssiknr_no: params.eggftkssiknrNo,
                    eggft_cd: params.eggftCd,
                    eggftpin_cd: params.eggftpinCd,
                    chrgkn_gk: params.chrgknGk
                };
            })
        };

        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/eigagift/activate',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            errjharFlg: result.errjhar_flg,
            eggftInf: result.eggft_inf.map((res: any): eigagiftFactory.IEggftInfActivate => {
                return {
                    eggftCd: res.eggft_cd,
                    eggftpinCd: res.eggftpin_cd,
                    chrgknGk: res.chrgkn_gk,
                    eggftykkgnYmd: res.eggftykkgn_ymd,
                    errInf: (res.err_inf === undefined) ? [] : res.err_inf.map((err: any): eigagiftFactory.IErrInf => {
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
     * 2 映画ギフト認証
     */
    public async authentication(args: eigagiftFactory.IAuthenticationArgs): Promise<eigagiftFactory.IAuthenticationResult> {
        debug('requesting...', args);
        const form = {
            eggft_cd: args.eggftCd,
            eggftpin_cd: args.eggftpinCd,
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
            eggftCd: result.eggft_cd,
            eggftpinCd: result.eggftpin_cd,
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
                eggft_cd: string;
                eggftpin_cd: string;
                eggftkssiknr_no: string;
                eggftykkgn_ymd?: string;
                rykn_gk: number;
            } => {
                return {
                    eggft_cd: params.eggftCd,
                    eggftpin_cd: params.eggftpinCd,
                    eggftkssiknr_no: params.eggftkssiknrNo,
                    ...(params.eggftykkgnYmd !== undefined ? {eggftykkgn_ymd: params.eggftykkgnYmd} : {}),
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
                    eggftCd: info.eggft_cd,
                    eggftpinCd: info.eggftpin_cd,
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
                eggft_cd: string;
                eggftpin_cd: string;
                eggftkssiknr_no: string;
                rykn_gk: number;
                tppnshryky_dt: string;
            } => {
                return {
                    shgitrksh_flg: params.shgitrkshFlg,
                    eggft_cd: params.eggftCd,
                    eggftpin_cd: params.eggftpinCd,
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
                    eggftCd: info.eggft_cd,
                    eggftpinCd: info.eggftpin_cd,
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
            eggft_cd: args.eggftCd,
            eggftpin_cd: args.eggftpinCd
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
            amccupn_cd: args.amccupnCd
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
     * 7 映画ギフト交換
     */
    public async exchange(args: eigagiftFactory.IExchangeArgs): Promise<eigagiftFactory.IExchangeResult> {
        const form = {
            kiin_cd: args.kiinCd,
            amccupn_cd: args.amccupnCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/eigagift/exchange',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            chrgGk: result.chrg_gk,
            eggftykkgnYmd: result.eggftykkgn_ymd
        };
    }

    /**
     * 8 映画ギフト履歴取得
     */
    public async history(args: eigagiftFactory.IHistoryArgs): Promise<eigagiftFactory.IHistoryResultLst> {
        debug('requesting...', args);
        const shtkkishYm = (args.shtkkishYm !== undefined && args.shtkkishYm !== null) ? `&shtkkish_ym=${args.shtkkishYm}` : '';
        const shtkshryYm = (args.shtkshryYm !== undefined && args.shtkshryYm !== null) ? `&shtkshry_ym=${args.shtkshryYm}` : '';
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/eigagift/history?kiin_cd=${args.kiinCd}${shtkkishYm}${shtkshryYm}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result', result);

        return (result === null) ? [] : result.map((res: any): eigagiftFactory.IHistoryResult => {
            return {
                rrkYm: res.rrk_ym,
                rrkInf: (res.rrk_inf === null) ? [] : res.rrk_inf.map((rrkInfo: any): eigagiftFactory.IRrkInf => {
                    return {
                        rrkYmd: rrkInfo.rrk_ymd,
                        rrkTyp: rrkInfo.rrk_typ,
                        rrkTxt: rrkInfo.rrk_txt,
                        tratskiknGk: rrkInfo.tratskikn_gk
                    };
                })
            };
        });
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
            gkZndk: (result.gk_zndk == null) ? 0 : result.gk_zndk,
            eggftInf: (result.eggft_inf === null) ? [] : result.eggft_inf.map((info: any): eigagiftFactory.IEggftInfInfoResult => {
                return {
                    eggftCd: info.eggft_cd,
                    eggftpinCd: info.eggftpin_cd,
                    eggftykkgnYmd: info.eggftykkgn_ymd,
                    eggftZndk: info.eggft_zndk
                };
            })
        };
    }

    /**
     *  10 映画ギフト発行
     */
    public async issue(args: eigagiftFactory.IIssueArgs): Promise<eigagiftFactory.IIssueResult> {
        debug('requesting...', args);
        const form = {
            eggftkssiknr_no: args.eggftkssiknrNo,
            kiin_cd: args.kiinCd,
            knyshsi_nm: args.knyshsiNm,
            knyshmi_nm: args.knyshmiNm,
            knysh_mladdr: args.knyshMladdr,
            knyshshgikyk_no: args.knyshshgikykNo,
            knyshshnikyk_no: args.knyshshnikykNo,
            knyshknysh_no: args.knyshknyshNo,
            hmbichnnl_typ: args.hmbichnnlTyp,
            hmbigish_cd: args.hmbigishCd,
            kssihh_typ: args.kssihhTyp,
            accss_id: args.accssId,
            accss_pwd: args.accssPwd,
            trn_dt: args.trnDt,
            frwrd_cd: args.frwrdCd,
            apprv_no: args.apprvNo,
            trn_id: args.trnId,
            chrg_gk: args.chrgGk
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/eigagift/issue',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result', result);

        return {
            chrgGk: result.chrg_gk,
            eggftykkgnYmd: result.eggftykkgn_ymd
        };
    }

    /**
     * 11 映画ギフト決済管理番号採番
     */
    public async numberingSettlementNo(): Promise<eigagiftFactory.INumberingSettlementNoResult> {
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/eigagift/numberingSettlementNo',
            method: 'POST',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            eggftkssiknrNo: result.eggftkssiknr_no
        };
    }

    /**
     * 12 映画ギフト決済情報仮登録
     */
    public async tempSettlementRegister(args: eigagiftFactory.ITempSettlementRegisterArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            eggftkssiknr_no: args.eggftkssiknrNo,
            kiin_cd: args.kiinCd,
            knyshsi_nm: args.knyshsiNm,
            knyshmi_nm: args.knyshmiNm,
            knysh_mladdr: args.knyshMladdr,
            knyshshgikyk_no: args.knyshshgikykNo,
            knyshshnikyk_no: args.knyshshnikykNo,
            knyshknysh_no: args.knyshknyshNo,
            hmbigish_cd: args.hmbigishCd,
            kssihh_typ: args.kssihhTyp,
            chrg_gk: args.chrgGk
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/eigagift/tempSettlementRegister',
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
     * 13 映画ギフト処理完了メール送信
     */
    public async sendMail(args: eigagiftFactory.ISendMailArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd,
            chrg_gk: args.chrgGk,
            chrg_typ: args.chrgTyp,
            ...(args.eggftkssiknrNo !== undefined ? {eggftkssiknr_no: args.eggftkssiknrNo} : {}),
            ...(args.knyshsiNm !== undefined ? {knyshsi_nm: args.knyshsiNm} : {}),
            ...(args.knyshmiNm !== undefined ? {knyshmi_nm: args.knyshmiNm} : {}),
            ...(args.knyshMladdr !== undefined ? {knysh_mladdr: args.knyshMladdr} : {})
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/eigagift/sendMail',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result', result);

        return {
            status: 'OK'
        };
    }

    /**
     * 14 映画ギフトチャージ状況取得
     */
    public async status(args: eigagiftFactory.IStatusArgs): Promise<eigagiftFactory.IStatusResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/eigagift/status?eggftkssiknr_no=${args.eggftkssiknrNo}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result', result);

        return {
            chrgGk: result.chrg_gk,
            eggftykkgnYmd: result.eggftykkgn_ymd
        };
    }

}
