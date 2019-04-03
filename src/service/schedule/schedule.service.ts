import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as scheduleFactory from '../../factory/schedule/schedule.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:schedule');

/**
 * 上映スケジュールサービス
 * @class
 */
export class ScheduleService extends Service {

    /**
     * 42.お気に入り劇場上映スケジュール検索
     */
    public async favorite(args: scheduleFactory.IFavoriteArgs): Promise<scheduleFactory.IScheduleFavoriteResult> {
        debug('requesting...', args.kiinCd);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/schedule/favorite?kiin_cd=${args.kiinCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            stCd: result.st_cd,
            stNm: result.st_nm,
            mdgchtryknFlg: result.mdgchtrykn_flg,
            ntryknFlg: result.ntrykn_flg,
            jeiskhnInf: result.jeiskhn_inf
        };
    }

    /**
     * 43 現在地周辺劇場上映スケジュール検索
     */
    public async nearest(args: scheduleFactory.INearestArgs): Promise<scheduleFactory.INearestResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/schedule/nearest?gnzichi_do=${args.gnzichiDo}&gnzichki_do=${args.gnzichkiDo}&kiin_cd=${args.kiinCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            areCd: result.are_cd,
            areNm: result.are_nm,
            stInf: result.st_inf
        };
    }

    /**
     * 44 エリア内劇場上映スケジュール検索
     */
    public async area(args: scheduleFactory.IAreaArgs): Promise<scheduleFactory.IAreaResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            // tslint:disable-next-line: max-line-length
            uri: `/api/schedule/area?skhn_cd=${args.skhnCd}&kik_cd=${args.kikCd}&tdfkn_cd=${args.tdfknCd}&are_cd=${args.areCd}&kiin_cd=${args.kiinCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            stCd: result.st_cd,
            stNm: result.st_nm,
            mdgchtryknFlg: result.mdgchtrykn_flg,
            ntryknFlg: result.ntrykn_flg,
            oknirstturkzmFlg: result.oknirstturkzm_flg,
            jeiskhnInf: result.jeiskhn_inf
        };
    }

    /**
     * 45 お気に入り劇場作品上映スケジュール検索
     */
    public async favoriteForFilm(args: scheduleFactory.IFavoriteForFilmArgs): Promise<scheduleFactory.IFavoriteForFilmResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            // tslint:disable-next-line: max-line-length
            uri: `/api/schedule/favoriteForFilm?skhn_cd=${args.skhnCd}&kiin_cd=${args.kiinCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            stCd: result.st_cd,
            stNm: result.st_nm,
            mdgchtryknFlg: result.mdgchtrykn_flg,
            ntryknFlg: result.ntrykn_flg,
            jeiInf: result.jei_inf
        };
    }

    /**
     * 46 現在地周辺劇場作品上映スケジュール検索
     */
    public async nearestForFilm(args: scheduleFactory.INearestForFilmArgs): Promise<scheduleFactory.INearestForFilmResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            // tslint:disable-next-line: max-line-length
            uri: `/api/schedule/nearestForFilm?skhn_cd=${args.skhnCd}&gnzichi_do=${args.gnzichiDo}&gnzichki_do=${args.gnzichkiDo}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            areCd: result.are_cd,
            areNm: result.are_nm,
            stInf: result.st_inf
        };
    }

    /**
     * 47 エリア内劇場作品上映スケジュール検索
     */
    public async areaForFilm(args: scheduleFactory.IAreaForFilmArgs): Promise<scheduleFactory.IAreaForFilmResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/schedule/areaForFilm?skhn_cd=${args.skhnCd}&kik_cd=${args.kikCd}&tdfkn_cd=${args.tdfknCd}&are_cd=${args.areCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            stCd: result.st_cd,
            stNm: result.st_nm,
            mdgchtryknFlg: result.mdgchtrykn_flg,
            ntryknFlg: result.ntrykn_flg,
            jeiInf: result.jei_inf
        };
    }

}
