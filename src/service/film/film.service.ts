import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as filmFactory from '../../factory/film/film.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:film');

/**
 * 作品サービス
 * @class
 */
export class FilmService extends Service {

    /**
     * 16 作品情報取得
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
                    pstrgzUrl: res.pstrgz_url,
                    slscpy1Txt: res.slscpy1_txt,
                    slscpy2Txt: res.slscpy2_txt,
                    slscpy3Txt: res.slscpy3_txt,
                    znkkkkikishDspt: res.hmbi_typ,
                    mtitrkzmFlg: res.mtitrkzm_flg,
                    srtkkikishYmd: res.srtkkikish_ymd,
                    srthmbikishYmd: res.srthmbikish_ymd,
                    chmkdrnkngNo: res.chmkdrnkng_no
                };
            }
        );
    }

    /**
     * 17 作品検索
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
                    znkkkkikishDspt: res.hmbi_typ,
                    mtitrkzmFlg: res.mtitrkzm_flg,
                    srtkkikishYmd: res.srtkkikish_ymd,
                    srthmbikishYmd: res.srthmbikish_ymd
                };
            }
        );
    }

}
