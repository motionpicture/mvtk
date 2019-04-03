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
    public async favorite(args: scheduleFactory.IFavoriteArgs): Promise<scheduleFactory.IScheduleFavoriteLstResult> {
        debug('requesting...', args.kiinCd);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/schedule/favorite?kiin_cd=${args.kiinCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return (result === null) ? [] : result.map(
            (res: any): scheduleFactory.IScheduleFavoriteResult => {
                return {
                    stCd: res.st_cd,
                    stNm: res.st_nm,
                    mdgchtryknFlg: res.mdgchtrykn_flg,
                    ntryknFlg: res.ntrykn_flg,
                    jeiskhnInf: res.jeiskhn_inf
                };
            }
        );
    }

    /**
     * 43 現在地周辺劇場上映スケジュール検索
     */
    public async nearest(args: scheduleFactory.INearestArgs): Promise<scheduleFactory.INearestLstResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/schedule/nearest?gnzichi_do=${args.gnzichiDo}&gnzichki_do=${args.gnzichkiDo}&kiin_cd=${args.kiinCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return (result === null) ? [] : result.map(
            (res: any): scheduleFactory.INearestResult => {
                return {
                    areCd: res.are_cd,
                    areNm: res.are_nm,
                    stInf: res.st_inf
                };
            }
        );
    }

    /**
     * 44 エリア内劇場上映スケジュール検索
     */
    public async area(args: scheduleFactory.IAreaArgs): Promise<scheduleFactory.IAreaLstResult> {
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

        return (result === null) ? [] : result.map(
            (res: any): scheduleFactory.IAreaResult => {
                return {
                    stCd: res.st_cd,
                    stNm: res.st_nm,
                    mdgchtryknFlg: res.mdgchtrykn_flg,
                    ntryknFlg: res.ntrykn_flg,
                    oknirstturkzmFlg: res.oknirstturkzm_flg,
                    jeiskhnInf: res.jeiskhn_inf
                };
            }
        );
    }

    /**
     * 45 お気に入り劇場作品上映スケジュール検索
     */
    public async favoriteForFilm(args: scheduleFactory.IFavoriteForFilmArgs): Promise<scheduleFactory.IFavoriteForFilmLstResult> {
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

        return (result === null) ? [] : result.map(
            (res: any): scheduleFactory.IFavoriteForFilmResult => {
                return {
                    stCd: res.st_cd,
                    stNm: res.st_nm,
                    mdgchtryknFlg: res.mdgchtrykn_flg,
                    ntryknFlg: res.ntrykn_flg,
                    jeiInf: res.jei_inf
                };
            }
        );
    }

    /**
     * 46 現在地周辺劇場作品上映スケジュール検索
     */
    public async nearestForFilm(args: scheduleFactory.INearestForFilmArgs): Promise<scheduleFactory.INearestForFilmLstResult> {
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

        return (result === null) ? [] : result.map(
            (area: any): scheduleFactory.INearestForFilmResult => {
                return {
                    areCd: area.are_cd,
                    areNm: area.are_nm,
                    stInf: area.st_inf
                };
            }
        );
    }

    /**
     * 47 エリア内劇場作品上映スケジュール検索
     */
    public async areaForFilm(args: scheduleFactory.IAreaForFilmArgs): Promise<scheduleFactory.IAreaForFilmLstResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/schedule/areaForFilm?skhn_cd=${args.skhnCd}&kik_cd=${args.kikCd}&tdfkn_cd=${args.tdfknCd}&are_cd=${args.areCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return (result === null) ? [] : result.map(
            (area: any): scheduleFactory.IAreaForFilmResult => {
                return {
                    stCd: area.st_cd,
                    stNm: area.st_nm,
                    mdgchtryknFlg: area.mdgchtrykn_flg,
                    ntryknFlg: area.ntrykn_flg,
                    jeiInf: area.jei_inf
                };
            }
        );
    }

}
