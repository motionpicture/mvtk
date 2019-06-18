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
        const skhnCd = (args.skhnCd !== undefined && args.skhnCd !== null) ? `&skhn_cd=${args.skhnCd}` : '';
        const kiinFlg = (args.kiinFlg !== undefined && args.kiinFlg !== null) ? `&kiin_flg=${args.kiinFlg}` : '';
        const kiinCd = (args.kiinCd !== undefined && args.kiinCd !== null) ? `&kiin_cd=${args.kiinCd}` : '';
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/theater/details?st_cd=${args.stCd}${skhnCd}${kiinFlg}${kiinCd}`,
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
            mdgchryknFlg: result.mdgchrykn_flg,
            ntryknFlg: result.ntrykn_flg,
            oknirsttrkzmFlg: result.oknirsttrkzm_flg,
            jeischdlInf: (result.jeischdl_inf === null) ? [] : result.jeischdl_inf.map((jeischdlInfo: any): theaterFactory.IJeischdlInf => {
                return {
                    jeiYmd: jeischdlInfo.jei_ymd,
                    jeiMd: jeischdlInfo.jei_md,
                    jeiybNm: jeischdlInfo.jeiyb_nm,
                    jeiskhnInf: (jeischdlInfo.jeiskhn_inf === null) ? [] : jeischdlInfo.jeiskhn_inf.map(
                        (jeiskhnInfo: any): theaterFactory.IJeiskhnInf => {
                            return {
                                skhnCd: jeiskhnInfo.skhn_cd,
                                skhnNm: jeiskhnInfo.skhn_nm,
                                pstrgzUrl: jeiskhnInfo.pstrgz_url,
                                skhnchskknDspt: jeiskhnInfo.skhnchskkn_dspt,
                                jeiTmm: jeiskhnInfo.jei_tmm,
                                eirnrtngCd: jeiskhnInfo.eirnrtng_cd,
                                meurknhmbiFlg: jeiskhnInfo.meurknhmbi_flg,
                                tjtsknhmbiFlg: jeiskhnInfo.tjtsknhmbi_flg,
                                jeiInf: (jeiskhnInfo.jei_inf === null) ? [] : jeiskhnInfo.jei_inf.map(
                                    (jeiInfo: any): theaterFactory.IJeiInf => {
                                        return {
                                            jmkonsiTyp: jeiInfo.jmkonsi_typ,
                                            jmkonsikbnNm: jeiInfo.jmkonsikbn_nm,
                                            eishhshkTyp: jeiInfo.eishhshk_typ,
                                            eishhshkkbnNm: jeiInfo.eishhshkkbn_nm,
                                            tkshjeikishkTyp: jeiInfo.tkshjeikishk_typ,
                                            tkshjeikishkkbnNm: jeiInfo.tkshjeikishkkbn_nm,
                                            jeischdlRmk: jeiInfo.jeischdl_rmk,
                                            jeihmInf: (jeiInfo.jeihm_inf === null) ? [] : jeiInfo.jeihm_inf.map(
                                                (jeihmInfo: any): theaterFactory.IJeihmInf => {
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

    /**
     * 51 劇場エリア情報取得
     */
    public async area(args: theaterFactory.IAreaArgs): Promise<theaterFactory.IAreaResult> {
        debug('requesting...', args);
        const tdfknCd = (args.tdfknCd === undefined) ? '' : `?tdfkn_cd=${args.tdfknCd}`;
        const areCd = (args.areCd === undefined) ? '' : (tdfknCd === '') ? `?are_cd=${args.areCd}` : `&are_cd=${args.areCd}`;
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/theater/area${tdfknCd}${areCd}`,
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
