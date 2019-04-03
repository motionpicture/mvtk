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
     * 48 劇場検索条件取得
     */
    public async searchCondition(args: theaterFactory.ISearchConditionArgs): Promise<theaterFactory.ISearchConditionLstResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            // tslint:disable-next-line: max-line-length
            uri: `/api/theater/searchCondition?kik_cd=${args.kikCd}&tdfkn_cd=${args.tdfknCd}&are_cd=${args.areCd}&skhn_cd=${args.skhnCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return (result === null) ? [] : result.map(
            (res: any): theaterFactory.ISearchConditionResult => {
                return {
                    kikCd: res.kik_cd,
                    kikNm: res.kik_nm,
                    tdfknInf: res.tdfkn_inf
                };
            }
        );
    }

    /**
     * 49 対応劇場情報取得
     */
    public async info(): Promise<theaterFactory.ITheaterInfoLstResult> {
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/theater/info',
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return (result == null) ? [] : result.map(
            (res: any): theaterFactory.ITheaterInfoResult => {
                return {
                    kikCd: res.kik_cd,
                    kikNm: res.kik_nm,
                    tdfknInf: res.tdfkn_inf
                };
            }
        );
    }

    /**
     * 50 劇場詳細
     */
    public async detail(args: theaterFactory.IDetailArgs): Promise<theaterFactory.IDetailsResult> {
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/theater/details?st_cd=${args.stCd}&skhn_cd=${args.skhnCd}&kiin_cd=${args.kiinCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            stCd: result.st_cd,
            stNm: result.st_nm,
            stybnNo: result.stybn_no,
            stAddr: result.st_addr,
            stjshiDo: result.stjshi_do,
            stjshkiDo: result.stjshki_do,
            stdnwNo: result.stdnw_no,
            stkshkstUrl: result.stkshkst_url,
            mdgchtryknFlg: result.mdgchtrykn_flg,
            ntryknFlg: result.ntrykn_flg,
            oknirstturkzmFlg: result.oknirstturkzm_flg,
            jeischdlInf: result.jeischdl_inf
        };
    }

}
