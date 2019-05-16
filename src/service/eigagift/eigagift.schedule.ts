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
     * 7 映画ギフト交換
     */
    public async exchange(args: eigagiftFactory.IExchangeArgs): Promise<eigagiftFactory.IExchangeResult> {
        const form = {
            kiin_cd: args.kiinCd,
            evuchr_cd: args.evuchrCd
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
            chrgGk: result.chrg_gk
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
            kssihh_typ: args.kssihhTyp,
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
            chrgGk: result.chrg_gk
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
            chrgGk: result.chrg_gk
        };
    }

}
