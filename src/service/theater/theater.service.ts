import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as theaterFactory from '../../factory/theater/theater.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:theater');

/**
 * 劇場サービス
 * @class
 */
export class TheaterService extends Service {

    /**
     * 51 劇場エリア情報取得
     */
    public async area(args: theaterFactory.IAreaArgs): Promise<theaterFactory.IAreaResult> {
        debug('requesting...', args);
        const tdfknCd = (args.tdfknCd === undefined) ? '' : `?tdfkn_cd=${args.tdfknCd}`;
        const areCd = (args.areCd === undefined) ? '' : (tdfknCd === '') ? `?are_cd=${args.areCd}` : `&are_cd=${args.areCd}`;
        // tslint:disable-next-line: max-line-length
        const skhnCd = (args.skhnCd === undefined) ? '' : (tdfknCd === '' && areCd === '') ? `?skhn_cd=${args.skhnCd}` : `&skhn_cd=${args.skhnCd}`;
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/theater/area${tdfknCd}${areCd}${skhnCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return (result === null) ? [] : result.map((tdInf: any): theaterFactory.ITodofukenInfo => {
            return {
                tdfknCd: tdInf.tdfkn_cd,
                tdfknNm: tdInf.tdfkn_nm,
                tdfknhyjjnNo: tdInf.tdfknhyjjn_no,
                stNum: tdInf.st_num,
                areInf: (tdInf.are_inf === null) ? [] : tdInf.are_inf.map((areInf: any): theaterFactory.IAreInfAreaResult => {
                    return {
                        areCd: areInf.are_cd,
                        areNm: areInf.are_nm,
                        arehyjjnNo: areInf.arehyjjn_no
                    };
                })
            };
        });
    }

}
