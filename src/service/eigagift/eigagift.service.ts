import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as eigagiftFactory from '../../factory/eigagift/eigagift.factory';
import { Service } from '../../service';
// import * as pointUtil from '../../utils/point/point.util';

const debug = createDebug('mvtk:service:point');

/**
 * ポイントサービス
 * @class
 */
export class PointService extends Service {
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
}
