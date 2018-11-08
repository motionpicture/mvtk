import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as purchaseFactory from '../../factory/purchase/purchase.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:auth');

/**
 * 購入関連サービス
 * @class
 */
export class PurchaseService extends Service {
    /**
     * 1.決済情報仮登録
     */
    public async tempSettlementRegister (args: purchaseFactory.ITempSettlementRegistArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            kssiknr_no: args.kssiknrNo,
            knyshsi_nm: args.knyshsiNm,
            knyshmi_nm: args.knyshmiNm,
            knysh_mladdr: args.knyshMladdr,
            knyshshgikyk_no: args.knyshshgikykNo,
            knyshshnikyk_no: args.knyshshnikykNo,
            knyshknysh_no: args.knyshknyshNo,
            kny_dt: args.knyDt,
            hmbichnnl_typ: args.hmbichnnlTyp,
            hmbigish_cd: args.hmbigishCd,
            knydvc_typ: args.knydvcTyp,
            knysh_cd: args.knyshCd,
            kiin_flg: args.kiinFlg,
            skhn_cd: args.skhnCd,
            skhn_nm: args.skhnNm,
            knshknknr_no: args.knshknknrNo,
            knshkn_inf: args.knshknInf,
            kssihh_typ: args.kssihhTyp,
            hiykssi_flg: args.hiykssiFlg,
            hiykssihh_typ: args.hiykssihhTyp,
            hiykssirygkikn_gk: args.hiykssirygkiknGk,
            gft_inf: args.gftInf,
            pintry_flg: args.pintryFlg,
            pintkssi_uuid: args.pintkssiUuid,
            ry_pt: args.ryPt,
            kktk_pt: args.kktkPt,
            rykn_gk: args.ryknGk,
            gkkn_gk: args.gkknGk,
            mltmplt_cd: args.mltmpltCd,
            tktncdkkh_inf: args.tktncdkkhInf
        };

        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/purchase/tempSettlementRegister',
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
     * 2.購入情報取得
     */
     public async info (args: purchaseFactory.IInfoArgs): Promise<purchaseFactory.IInfoResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/purchase/info${args.kssiknrNo}`,
            method: 'GET',
            form: {}
        };

        const result = await this.request(options);
        debug('result...', result);

        return {
            knyknrNo: result.knyknr_no,
            qrcdUrl: result.qrcd_url,
            dgtlincntvdwnlodgmnUrl: result.dgtlincntvdwnlodgmn_url,
            kktkPt: result.kktk_pt
        };
     }
}
