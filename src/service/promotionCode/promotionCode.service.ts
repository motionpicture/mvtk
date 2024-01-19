import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as promotionCodeFactory from '../../factory/promotionCode/promotionCode.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:promotionCode');

/**
 * プロモーションコードサービス
 * @class
 */
export class PromotionCodeService extends Service {
    /**
     * 1.会員保有コード数取得
     */
    public async ownedCount (args: promotionCodeFactory.IOwnedCountArgs): Promise<promotionCodeFactory.IOwnedCountResult> {
        debug('requesting...', args);

        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/promotionCode/ownedCount?kiin_cd=${args.kiin_cd}`,
            method: 'GET',
            from: {}
        };

        const result = await this.request(options);
        debug('result...', result);

        return {
            hjcd_num: result.hjcd_num,
            ykkgngrmjk_num: result.ykkgngrmjk_num
        };
    }

    /**
     * 2.会員保有コード取得
     */
    public async owned (args: promotionCodeFactory.IOwnedArgs): Promise<promotionCodeFactory.IOwnedResult> {
        debug('requesting...', args);

        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/promotionCode/owned?kiin_cd=${args.kiin_cd}`,
            method: 'GET',
            from: {}
        };

        const result = await this.request(options);
        debug('result...', result);

        return {
            prmtn_cd: result.prmtn_cd,
            prmtncd_txt: result.prmtncd_txt,
            ryjkn_txt: result.ryjkn_txt,
            skhnsti_flg: result.skhnsti_flg,
            skhn_inf: Object.keys(result.skhn_inf).map((key) => {
                return {
                    skhn_cd: result.skhn_inf[key].skhn_cd,
                    skhn_nm: result.skhn_inf[key].skhn_nm
                };
            }),
            wrbk_dspt: result.wrbk_dspt,
            ykkgn_ymd: result.ykkgn_ymd,
            ykkgn_dspt: result.ykkgn_dspt,
            ryzm_flg: result.ryzm_flg,
            ry_ymd: result.ry_ymd,
            sisn_flg: result.sisn_flg
        };
    }

    /**
     * 3.登録
     */
    public async register (args: promotionCodeFactory.IRegisterArgs): Promise<Boolean> {
        debug('requesting...', args);

        const form = {
            kiin_cd: args.kiin_cd,
            prmtn_cd: args.prmtn_cd
        };

        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/promotionCode/register',
            method: 'POST',
            form: form
        };

        const result = await this.request(options);
        debug('result...', result);

        return true;
    }

    /**
     * 4.利用可能コード一覧
     */
    public async available (args: promotionCodeFactory.IAvailableArgs): Promise<promotionCodeFactory.IAvailableResult> {
        debug('requesting...', args);

        const form = {
            kiin_cd: args.kiin_cd,
            skhn_cd: args.skhn_cd,
            knshknknr_no: args.knshknknr_no,
            knshkn_inf: Object.keys(args.knshkn_inf).map((key) => {
                const ikey = parseInt(key, 10);

                return {
                    knshknknrmisi_no: args.knshkn_inf[ikey].knshknknrmisi_no,
                    knsh_typ: args.knshkn_inf[ikey].knsh_typ,
                    knymi_num: args.knshkn_inf[ikey].knymi_num,
                    knshknhmbi_unip: args.knshkn_inf[ikey].knshknhmbi_unip
                };
            })
        };

        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/promotionCode/available',
            method: 'POST',
            form: form
        };

        const result = await this.request(options);
        debug('result...', result);

        return {
            prmtncd_cd: result.prmtncd_cd,
            prmtncd_txt: result.prmtncd_txt,
            wrbk_typ: result.wrbk_typ,
            wrbk_num: result.wrbk_num,
            wrbk_dspt: result.wrbk_dspt,
            ykkgn_ymd: result.ykkgn_ymd,
            ykkgn_dspt: result.ykkgn_dspt
        };
    }

    /**
     * 5.入力コード検証
     */
    public async validation (args: promotionCodeFactory.IValidationArgs): Promise<promotionCodeFactory.IValidationResult> {
        debug('requesting...', args);

        const form = {
            prmtncd_cd: args.prmtncd_cd,
            ...((args.kiin_cd !== undefined && args.kiin_cd !== null) ? { kiin_cd: args.kiin_cd } : {}),
            skhn_cd: args.skhn_cd,
            knshknknr_no: args.knshknknr_no,
            stshkbts_cd: args.stshkbts_cd,
            hmbichnnl_typ: args.hmbichnnl_typ,
            knshkn_inf: Object.keys(args.knshkn_inf).map((key) => {
                const ikey = parseInt(key, 10);

                return {
                    knshknknrmisi_no: args.knshkn_inf[ikey].knshknknrmisi_no,
                    knsh_typ: args.knshkn_inf[ikey].knsh_typ,
                    knymi_num: args.knshkn_inf[ikey].knymi_num,
                    knshknhmbi_unip: args.knshkn_inf[ikey].knshknhmbi_unip
                };
            })
        };

        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/promotionCode/validation',
            method: 'POST',
            form: form
        };

        const result = await this.request(options);
        debug('result...', result);

        return {
            prmtncd_cd: result.prmtncd_cd,
            prmtncd_txt: result.prmtncd_txt,
            wrbk_gk: result.wrbk_gk,
            wrbk_dspt: result.wrbk_dspt,
            krsyki_num: result.krsyki_num
        };
    }

    /**
     * 6.仮利用
     */
    public async tempUse (args: promotionCodeFactory.ITempUseArgs): Promise<promotionCodeFactory.ITempUseResult> {
        debug('requesting...', args);

        const form = {
            prmtn_cd: args.prmtn_cd,
            ...((args.kiin_cd !== undefined && args.kiin_cd !== null) ? { kiin_cd: args.kiin_cd } : {}),
            krsyki_num: args.krsyki_num
        };

        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/promotionCode/tempUse',
            method: 'POST',
            form: form
        };

        const result = await this.request(options);
        debug('result...', result);

        return {uuid: result.uuid};
    }

    /**
     * 7.仮利用解除
     */
    public async tempUseCancel (args: promotionCodeFactory.ITempUseCancelArgs): Promise<boolean> {
        debug('requesting...', args);

        const form = {
            uuid: args.uuid
        };

        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/promotionCode/tempUseCancel',
            method: 'POST',
            form: form
        };

        const result = await this.request(options);
        debug('result...', result);

        return true;
   }

    /**
     * 8.利用
     */
    public async use (args: promotionCodeFactory.IUseArgs): Promise<boolean> {
        debug('requesting...', args);

        const form = {
            uuid: args.uuid
        };

        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/promotionCode/use',
            method: 'POST',
            form: form
        };

        const result = await this.request(options);
        debug('result...', result);

        return true;
    }
}
