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
        debug('requesting...', args.kiin_cd);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/schedule/favorite?kiin_cd=${args.kiin_cd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            st_cd: result.st_cd,
            st_nm: result.st_nm,
            mdgchtrykn_flg: result.mdgchtrykn_flg,
            ntrykn_flg: result.ntrykn_flg,
            jeiskhn_inf: result.jeiskhn_inf
        };
    }

    /**
     * 43 現在地周辺劇場上映スケジュール検索
     */
    public async nearest(args: scheduleFactory.INearestArgs): Promise<scheduleFactory.INearestResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/schedule/nearest?gnzichi_do=${args.gnzichi_do}&gnzichki_do=${args.gnzichki_do}&kiin_cd=${args.kiin_cd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            are_cd: result.are_cd,
            are_nm: result.are_nm,
            st_inf: result.st_inf
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
            uri: `/api/schedule/area?skhn_cd=${args.skhn_cd}&kik_cd=${args.kik_cd}&tdfkn_cd=${args.tdfkn_cd}&are_cd=${args.are_cd}&kiin_cd=${args.kiin_cd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            st_cd: result.st_cd,
            st_nm: result.st_nm,
            mdgchtrykn_flg: result.mdgchtrykn_flg,
            ntrykn_flg: result.ntrykn_flg,
            oknirstturkzm_flg: result.oknirstturkzm_flg,
            jeiskhn_inf: result.jeiskhn_inf
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
            uri: `/api/schedule/favoriteForFilm?skhn_cd=${args.skhn_cd}&kiin_cd=${args.kiin_cd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            st_cd: result.st_cd,
            st_nm: result.st_nm,
            mdgchtrykn_flg: result.mdgchtrykn_flg,
            ntrykn_flg: result.ntrykn_flg,
            jei_inf: result.jei_inf
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
            uri: `/api/schedule/nearestForFilm?skhn_cd=${args.skhn_cd}&gnzichi_do=${args.gnzichi_do}&gnzichki_do=${args.gnzichki_do}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            are_cd: result.are_cd,
            are_nm: result.are_nm,
            st_inf: result.st_inf
        };
    }

    /**
     * 47 エリア内劇場作品上映スケジュール検索
     */
    public async areaForFilm(args: scheduleFactory.IAreaForFilmArgs): Promise<scheduleFactory.IAreaForFilmResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/schedule/areaForFilm?skhn_cd=${args.skhn_cd}&kik_cd=${args.kik_cd}&tdfkn_cd=${args.tdfkn_cd}&are_cd=${args.are_cd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            st_cd: result.st_cd,
            st_nm: result.st_nm,
            mdgchtrykn_flg: result.mdgchtrykn_flg,
            ntrykn_flg: result.ntrykn_flg,
            jei_inf: result.jei_inf
        };
    }

}
