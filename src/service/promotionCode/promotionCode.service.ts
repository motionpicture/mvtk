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
     * 5.入力コード検証
     */
    public async validation (args: promotionCodeFactory.IValidationArgs): Promise<promotionCodeFactory.IValidationResult> {
        debug('requesting...', args);

        const form = {
            prmtncd_cd: args.prmtncd_cd,
            ...((args.kiin_cd !== undefined && args.kiin_cd !== null) ? { kiin_cd: args.kiin_cd } : {}),
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
            wrbk_dspt: result.wrbk_dspt
        };
    }

    /**
     * 6.仮利用
     */
    public async tempUse (args: promotionCodeFactory.ITempUseArgs): Promise<promotionCodeFactory.ITempUseResult> {
        debug('requesting...', args);

        const form = {
            prmtn_cd: args.prmtn_cd,
            ...((args.kiin_cd !== undefined && args.kiin_cd !== null) ? { kiin_cd: args.kiin_cd } : {})
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

}
