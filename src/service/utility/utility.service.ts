import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as utilityFactory from '../../factory/utility/utility.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:history');

/**
 * ユーティリティ
 * @class
 */
export class UtilityService extends Service {
    /**
     * 各種コード検索
     */
    public async code(args: utilityFactory.ICodeArgs): Promise<utilityFactory.ICodeResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/utility/code?kmk_typ=${args.kmkTyp}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            kmkTyp: result.kmk_typ,
            kmkkbnNm: result.kmkkbn_nm,
            kbnInf: (result.kbn_inf === null) ? [] : result.kbn_inf.map(
                (res: any): utilityFactory.IKbnInf => {
                    return {
                        kbnTyp: res.kbn_typ,
                        kbnNm: res.kbn_nm
                    };
                }
            )
        };
    }

    /**
     * QRコード生成
     */
    public async qrcode(args: utilityFactory.IQrcodeArgs): Promise<utilityFactory.IQrcodeResult> {
        debug('requesting...', args);
        const form = {
            knyknr_no: args.knyknrNo,
            ...(args.pinCd !== undefined ? {pin_cd: args.pinCd} : {}),
            pinchk_flg: args.pinchkFlg
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/utility/qrcode',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            qrcdUrl: result.qrcd_url
        };
    }

    /**
     * チケット情報照会
     */
    public async ticketInfo(args: utilityFactory.ITicketInfoArgs): Promise<utilityFactory.ITicketInfoResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/utility/ticketInfo?knyknr_no=${args.knyknrNo}&pin_cd=${args.pinCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            tcktjhhyjTyp: result.tcktjhhyj_typ,
            knyknrNo: result.knyknr_no,
            qrcdUrl: result.qrcd_url,
            ykkgnYmd: result.ykkgn_ymd,
            ryknhstInf: (result.ryknhst_inf === null) ? [] : result.ryknhst_inf.map(
                (res: any): utilityFactory.IRyknhstInf => {
                    return {
                        stNm: res.st_nm,
                        sthyjjnNo: res.sthyjjn_no
                    };
                }
            ),
            gkmiNum: result.gkmi_num,
            ryzmmiNum: result.ryzmmi_num,
            ryknhmiNum: result.ryknhmi_num,
            ryjkyInf: (result.ryjky_inf === null) ? [] : result.ryjky_inf.map(
                (res: any): utilityFactory.IRyjkyInf => {
                    return {
                        ryzmFlg: res.ryzm_flg,
                        knshkbnNm: res.knshkbn_nm,
                        knshstNm: res.knshst_nm,
                        knshskhnNm: res.knshskhn_nm,
                        knshYmd: res.knsh_ymd,
                        knshHm: res.knsh_hm
                    };
                }
            )
        };
    }
}
