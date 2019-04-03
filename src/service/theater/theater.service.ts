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
    public async searchCondition(args: theaterFactory.ISearchConditionArgs): Promise<theaterFactory.ISearchConditionResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            // tslint:disable-next-line: max-line-length
            uri: `/api/theater/searchCondition?kik_cd=${args.kik_cd}&tdfkn_cd=${args.tdfkn_cd}&are_cd=${args.are_cd}&skhn_cd=${args.skhn_cd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            kik_cd: result.kik_cd,
            kik_nm: result.kik_nm,
            tdfkn_inf: result.tdfkn_inf
        };
    }

    /**
     * 49 対応劇場情報取得
     */
    public async info(): Promise<theaterFactory.ITheaterInfoResult> {
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/theater/info',
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            kik_cd: result.kik_cd,
            kik_nm: result.kik_nm,
            tdfkn_inf: result.tdfkn_inf
        };
    }

    /**
     * 50 劇場詳細
     */
    public async detail(args: theaterFactory.IDetailArgs): Promise<theaterFactory.IDetailsResult> {
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/theater/details?st_cd=${args.st_cd}&skhn_cd=${args.skhn_cd}&kiin_cd=${args.kiin_cd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            st_cd: result.st_cd,
            st_nm: result.st_nm,
            stybn_no: result.stybn_no,
            st_addr: result.st_addr,
            stjshi_do: result.stjshi_do,
            stjshki_do: result.stjshki_do,
            stdnw_no: result.stdnw_no,
            stkshkst_url: result.stkshkst_url,
            mdgchtrykn_flg: result.mdgchtrykn_flg,
            ntrykn_flg: result.ntrykn_flg,
            oknirstturkzm_flg: result.oknirstturkzm_flg,
            jeischdl_inf: result.jeischdl_inf
        };
    }

}
