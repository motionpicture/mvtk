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
                    oknirtrkDt: res.oknirtrk_dt,
                    stCd: res.st_cd,
                    stNm: res.st_nm,
                    mdgchryknFlg: res.mdgchrykn_flg,
                    ntryknFlg: res.ntrykn_flg,
                    jeiskhnInf: (res.jeiskhn_inf === null) ? [] : res.jeiskhn_inf.map(
                        (jeiskhnInfo: any): scheduleFactory.IJeiskhnInfFavoriteResult => {
                            return {
                                kkikishYmd: jeiskhnInfo.kkikish_ymd,
                                skhnCd: jeiskhnInfo.skhn_cd,
                                skhnNm: jeiskhnInfo.skhn_nm,
                                pstrgzUrl: jeiskhnInfo.pstrgz_url,
                                skhnchskknDspt: jeiskhnInfo.skhnchskkn_dspt
                            };
                        }
                    )
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
            uri: `/api/schedule/nearest?gnzichi_do=${args.gnzichiDo}&gnzichki_do=${args.gnzichkiDo}`,
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
                    stInf: (res.st_inf === null) ? [] : res.st_inf.map((stInfo: any): scheduleFactory.IStInf => {
                        return {
                            chtnknkyrNum: stInfo.chtnknkyr_num,
                            stCd: stInfo.st_cd,
                            stNm: stInfo.st_nm,
                            mdgchryknFlg: stInfo.mdgchrykn_flg,
                            ntryknFlg: stInfo.ntrykn_flg,
                            jeiskhnInf: (stInfo.jeiskhn_inf === null) ? [] : stInfo.jeiskhn_inf.map(
                                (jeiskhnInfo: any): scheduleFactory.IJeiskhnInfNearestResult => {
                                    return {
                                        kkikishYmd: jeiskhnInfo.kkikish_ymd,
                                        skhnCd: jeiskhnInfo.skhn_cd,
                                        skhnNm: jeiskhnInfo.skhn_nm,
                                        pstrgzUrl: jeiskhnInfo.pstrgz_url,
                                        skhnchskknDspt: jeiskhnInfo.skhnchskkn_dspt
                                    };
                                }
                            )
                        };
                    })
                };
            }
        );
    }

    /**
     * 44 エリア内劇場上映スケジュール検索
     */
    public async area(args: scheduleFactory.IAreaArgs): Promise<scheduleFactory.IAreaLstResult> {
        debug('requesting...', args);
        const areCd = (args.areCd !== undefined && args.areCd !== null) ? `&are_cd=${args.areCd}` : '';
        const pgNo = (args.pgNo !== undefined && args.pgNo !== null) ? `&pg_no=${args.pgNo}` : '';
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/schedule/area?tdfkn_cd=${args.tdfknCd}${areCd}${pgNo}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return (result === null) ? [] : result.map(
            (res: any): scheduleFactory.IAreaResult => {
                return {
                    areCd: res.are_cd,
                    areNm: res.are_nm,
                    arehyjjnNo: res.arehyjjn_no,
                    sishpgFlg: res.sishpg_flg,
                    stInf: (res.st_inf === null) ? [] : res.st_inf.map((stInfo: any): scheduleFactory.IStInfAreaResult => {
                        return {
                            sthyjjnNo: stInfo.sthyjjn_no,
                            stCd: stInfo.st_cd,
                            stNm: stInfo.st_nm,
                            mdgchryknFlg: stInfo.mdgchrykn_flg,
                            ntryknFlg: stInfo.ntrykn_flg,
                            jeiskhnInf: (stInfo.jeiskhn_inf === null) ? [] : stInfo.jeiskhn_inf.map(
                                (jeiskhnInfo: any): scheduleFactory.IJeiskhnInf => {
                                    return {
                                        kkikishYmd: jeiskhnInfo.kkikish_ymd,
                                        skhnCd: jeiskhnInfo.skhn_cd,
                                        skhnNm: jeiskhnInfo.skhn_nm,
                                        pstrgzUrl: jeiskhnInfo.pstrgz_url,
                                        skhnchskknDspt: jeiskhnInfo.skhnchskkn_dspt
                                    };
                                }
                            )
                        };
                    })
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
            (favorite: any): scheduleFactory.IAreaForFilmResult => {
                return {
                    jeiYmd: favorite.jei_ymd,
                    jeiMd: favorite.jei_md,
                    jeiybNm: favorite.jeiyb_nm,
                    sishpgFlg: favorite.sishpg_flg,
                    jeistInf: (favorite.jeist_inf === null) ? [] : favorite.jeist_inf.map(
                        (jeistInfo: any): scheduleFactory.IJeistInfFavoriteForFilm => {
                            return {
                                oknirtrkDt: jeistInfo.oknirtrk_dt,
                                stCd: jeistInfo.st_cd,
                                stNm: jeistInfo.st_nm,
                                mdgchryknFlg: jeistInfo.mdgchrykn_flg,
                                ntryknFlg: jeistInfo.ntrykn_flg,
                                jeiInf: (jeistInfo.jei_inf === null) ? [] : jeistInfo.jei_inf.map(
                                    (jeiInfo: any): scheduleFactory.IJeiInf => {
                                        return {
                                            jmkonsiTyp: jeiInfo.jmkonsi_typ,
                                            jmkonsikbnNm: jeiInfo.jmkonsikbn_nm,
                                            eishhshkTyp: jeiInfo.eishhshk_typ,
                                            eishhshkkbnNm: jeiInfo.eishhshkkbn_nm,
                                            tkshjeikishkTyp: jeiInfo.tkshjeikishk_typ,
                                            tkshjeikishkkbnNm: jeiInfo.tkshjeikishkkbn_nm,
                                            jeischdlRmk: jeiInfo.jeischdl_rmk,
                                            jeihmInf: (jeiInfo.jeihm_inf === null) ? [] : jeiInfo.jeihm_inf.map(
                                                (jeihmInfo: any): scheduleFactory.IJeihmInfAreaForFilm => {
                                                    return {
                                                        jeikishHm: jeihmInfo.jeikish_hm,
                                                        znskjkyTyp: jeihmInfo.znskjky_typ
                                                    };
                                                }
                                            )
                                        };
                                    }
                                )
                            };
                        }
                    )
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
                    jeiYmd: area.jei_ymd,
                    jeiMd: area.jei_md,
                    jeiybNm: area.jeiyb_nm,
                    areInf: (area.are_inf === null) ? [] : area.are_inf.map((areInfo: any): scheduleFactory.IAreInf => {
                        return {
                            areCd: areInfo.are_cd,
                            areNm: areInfo.are_nm,
                            jeistInf: (areInfo.jeist_inf === null) ? [] : areInfo.jeist_inf.map(
                                (jeistInfo: any): scheduleFactory.IJeistInfNearestForFilm => {
                                    return {
                                        chtnknkyrNum: jeistInfo.chtnknkyr_num,
                                        stCd: jeistInfo.st_cd,
                                        stNm: jeistInfo.st_nm,
                                        mdgchryknFlg: jeistInfo.mdgchrykn_flg,
                                        ntryknFlg: jeistInfo.ntrykn_flg,
                                        jeiInf: (jeistInfo.jei_inf === null) ? [] : jeistInfo.jei_inf.map(
                                            (jeiInfo: any): scheduleFactory.IJeiInf => {
                                                return {
                                                    jmkonsiTyp: jeiInfo.jmkonsi_typ,
                                                    jmkonsikbnNm: jeiInfo.jmkonsikbn_nm,
                                                    eishhshkTyp: jeiInfo.eishhshk_typ,
                                                    eishhshkkbnNm: jeiInfo.eishhshkkbn_nm,
                                                    tkshjeikishkTyp: jeiInfo.tkshjeikishk_typ,
                                                    tkshjeikishkkbnNm: jeiInfo.tkshjeikishkkbn_nm,
                                                    jeischdlRmk: jeiInfo.jeischdl_rmk,
                                                    jeihmInf: (jeiInfo.jeihm_inf === null) ? [] : jeiInfo.jeihm_inf.map(
                                                        (jeihmInfo: any): scheduleFactory.IJeihmInfAreaForFilm => {
                                                            return {
                                                                jeikishHm: jeihmInfo.jeikish_hm,
                                                                znskjkyTyp: jeihmInfo.znskjky_typ
                                                            };
                                                        }
                                                    )
                                                };
                                            }
                                        )
                                    };
                                }
                            )
                        };
                    })
                };
            }
        );
    }

    /**
     * 47 エリア内劇場作品上映スケジュール検索
     */
    public async areaForFilm(args: scheduleFactory.IAreaForFilmArgs): Promise<scheduleFactory.IAreaForFilmLstResult> {
        debug('requesting...', args);
        const pgNo: string = (args.pgNo !== undefined && args.pgNo !== null) ? `&pg_no=${args.pgNo}` : '';
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/schedule/areaForFilm?skhn_cd=${args.skhnCd}&tdfkn_cd=${args.tdfknCd}&are_cd=${args.areCd}${pgNo}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return (result === null) ? [] : result.map(
            (area: any): scheduleFactory.IAreaForFilmResult => {
                return {
                    jeiYmd: area.jei_ymd,
                    jeiMd: area.jei_md,
                    jeiybNm: area.jeiyb_nm,
                    sishpgFlg: area.sishpg_flg,
                    jeistInf: (area.jeist_inf === null) ? [] : area.jeist_inf.map((jeistInfo: any): scheduleFactory.IJeistInf => {
                        return {
                            sthyjjnNo: jeistInfo.sthyjjn_no,
                            stCd: jeistInfo.st_cd,
                            stNm: jeistInfo.st_nm,
                            mdgchryknFlg: jeistInfo.mdgchrykn_flg,
                            ntryknFlg: jeistInfo.ntrykn_flg,
                            jeiInf: jeistInfo.jei_inf
                        };
                    })
                };
            }
        );
    }

}
