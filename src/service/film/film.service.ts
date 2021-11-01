import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as filmFactory from '../../factory/film/film.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:film');

/**
 * 作品情報サービス
 * @class
 */
export class FilmService extends Service {

    /**
     * 21 作品情報取得
     */
    public async info(args: filmFactory.IFilmInfoArgs):  Promise<filmFactory.IFilmInfoLstResult> {
        debug('requesting...', args);
        let kiinCdParam: string = '';
        if (args.kiinCd !== undefined && args.kiinCd !== '') {
            kiinCdParam = `?kiin_cd=${args.kiinCd}`;
        }
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/film/info${kiinCdParam}`,
            method: 'GET',
            form: {}
        };

        const result = await this.request(options);
        debug('result...', result);

        return (result === null) ? [] : result.map(
            (res: any): filmFactory.IFilmInfoResult => {
                return {
                    hmbiTyp: res.hmbi_typ,
                    hmbisttsTyp: res.hmbistts_typ,
                    skhnCd: res.skhn_cd,
                    skhnNm: res.skhn_nm,
                    skhnHknnm: res.skhn_hknnm,
                    pstrgzUrl: res.pstrgz_url,
                    slscpy1Txt: res.slscpy1_txt,
                    slscpy2Txt: res.slscpy2_txt,
                    slscpy3Txt: res.slscpy3_txt,
                    znkkkkikishDspt: res.znkkkkikish_dspt,
                    mtitrkzmFlg: res.mtitrkzm_flg,
                    srtkkikishYmd: res.srtkkikish_ymd,
                    srthmbikishYmd: res.srthmbikish_ymd,
                    chmkdrnkngNo: res.chmkdrnkng_no,
                    skhnchskknDspt: res.skhnchskkn_dspt,
                    knshknhmbishryYmd: res.knshknhmbishry_ymd
                };
            }
        );
    }

    /**
     * 22 作品検索
     */
    public async search(args: filmFactory.IFilmSearchArgs): Promise<filmFactory.IFilmSearchLstResult> {
        debug('requesting...', args);
        let kiinCdParam: string = '';
        if (args.kiinCd !== undefined && args.kiinCd !== '') {
            kiinCdParam = `&kiin_cd=${args.kiinCd}`;
        }
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/film/search?srch_txt=${args.srchTxt}${kiinCdParam}`,
            method: 'GET',
            form: {}
        };

        const result = await this.request(options);
        debug('result...', result);

        return (result === null) ? [] : result.map(
            (res: any): filmFactory.IFilmSearchResult => {
                return {
                    hmbiTyp: res.hmbi_typ,
                    hmbisttsTyp: res.hmbistts_typ,
                    skhnCd: res.skhn_cd,
                    skhnNm: res.skhn_nm,
                    pstrgzUrl: res.pstrgz_url,
                    slscpy2Txt: res.slscpy2_txt,
                    slscpy3Txt: res.slscpy3_txt,
                    znkkkkikishDspt: res.znkkkkikish_dspt,
                    mtitrkzmFlg: res.mtitrkzm_flg,
                    srtkkikishYmd: res.srtkkikish_ymd,
                    srthmbikishYmd: res.srthmbikish_ymd
                };
            }
        );
    }

    /**
     * 23.作品詳細情報取得
     */
    public async detail(args: filmFactory.IFilmDetailArgs): Promise<filmFactory.IFilmDetailResult> {
        debug('requesting...', args);
        let kiinCdParam: string = '';
        if (args.kiinCd !== undefined && args.kiinCd !== '') {
            kiinCdParam = `&kiin_cd=${args.kiinCd}`;
        }
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/film/details?skhn_cd=${args.skhnCd}${kiinCdParam}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return filmFactory.factoryDetailResult(result);
    }

}
