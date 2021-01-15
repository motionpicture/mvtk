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
}
