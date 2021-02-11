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
    // tslint:disable-next-line: max-func-body-length
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

        return {
            hmbiTyp: result.hmbi_typ,
            hmbisttsTyp: result.hmbistts_typ,
            skhnCd: result.skhn_cd,
            skhnNm: result.skhn_nm,
            pstrgzUrl: result.pstrgz_url,
            eirnrtngCd: result.eirnrtng_cd,
            slscpy1Txt: result.slscpy1_txt,
            znkkkkikishDspt: result.znkkkkikish_dspt,
            skhnkistsTxt: result.skhnkists_txt,
            skhnmngtrTxt: result.skhnmngtr_txt,
            skhnchshkkytsuTxt: result.skhnchshkkytsu_txt,
            skhnchshkshsiTxt: result.skhnchshkshsi_txt,
            mtitrksyNum: result.mtitrksy_num,
            mtitrkzmFlg: result.mtitrkzm_flg,
            kshkstUrl: result.kshkst_url,
            stffInf: (result.stff_inf === null) ? [] : result.stff_inf.map(
                (res: any): filmFactory.IStffInf => {
                    return {
                        hyjjnNo: res.hyjjn_no,
                        jmbtsNm: res.jmbts_nm,
                        ykwrNm: res.ykwr_nm
                    };
                }
            ),
            cstInf: (result.cst_inf === null) ? [] : result.cst_inf.map(
                (res: any): filmFactory.ICstInf => {
                    return {
                        hyjjnNo: res.hyjjn_no,
                        jmbtsNm: res.jmbts_nm,
                        shenFlg: res.shen_flg
                    };
                }
            ),
            skhmmiorgnlNm: result.skhmmiorgnl_nm,
            siskY: result.sisk_y,
            siskkkNm: result.siskkk_nm,
            hikygishNm: result.hikygish_nm,
            jeiTmm: result.jei_tmm,
            skhnchskknDspt: result.skhnchskkn_dspt,
            shknhikygishCd: result.shknhikygish_cd,
            tktnzikjkymsgTxt: result.tktnzikjkymsg_txt,
            knshknhmbikishYmd: result.knshknhmbikish_ymd,
            knshknhmbishryYmd: result.knshknhmbishry_ymd,
            knyjgmmiNum: result.knyjgmmi_num,
            knshknknrNo: result.knshknknr_no,
            knshknInf: (result.knshkn_inf === null) ? [] : result.knshkn_inf.map(
                (res: any): filmFactory.IKnshknInf => {
                    return {
                        knshknknrmisiNo: res.knshknknrmisi_no,
                        knshTyp: res.knsh_typ,
                        knshkbnNm: res.knshkbn_nm,
                        knshknhmbiUnip: res.knshknhmbi_unip
                    };
                }
            ),
            bnnrInf: (result.bnnr_inf === null) ? [] : result.bnnr_inf.map(
                (res: any): filmFactory.IBnnrInf => {
                    return {
                        bnnrCd: res.bnnr_cd,
                        bnnrNm: res.bnnr_nm,
                        bnnrhyjkshTyp: res.bnnrhyjksh_typ,
                        bnnrgzUrl: res.bnnrgz_url,
                        bnnrlnkskUrl: res.bnnrlnksk_url,
                        bnnrstsmiTxt: res.bnnrstsmi_txt,
                        bnnrkisikishYmd: res.bnnrkisikish_ymd,
                        bnnrkisishryYmd: res.bnnrkisishry_ymd,
                        cptktnbtndsTyp: res.cptktnbtnds_typ
                    };
                }
            ),
            dgtlincntvInf: (result.dgtlincntv_inf === null) ? [] : result.dgtlincntv_inf.map(
                (res: any): filmFactory.IDgtlincntvInf => {
                    return {
                        dgtlincntvCd: res.dgtlincntv_cd,
                        dgtlincntvTtl: res.dgtlincntv_ttl,
                        dgtlincntvstsmiTxt: res.dgtlincntvstsmi_txt,
                        smplgzUrl: res.smplgz_url,
                        dgtlincntvknykishYmd: res.dgtlincntvknykish_ymd,
                        dgtlincntvknyshryYmd: res.dgtlincntvknyshry_ymd,
                        dgtlincntvdwnlodykTm: res.dgtlincntvdwnlodyk_tm,
                        dgtlincntvdwnlodjgnkiNum: res.dgtlincntvdwnlodjgnki_num,
                        skhndgtlincntvRmk: res.skhndgtlincntv_rmk
                    };
                }
            ),
            ykkhnInf: (result.ykkhn_inf === null) ? [] : result.ykkhn_inf.map(
                (res: any): filmFactory.IYkkhnInf => {
                    return {
                        ykkhnNo: res.ykkhn_no,
                        ykkhnTtl: res.ykkhn_ttl,
                        ykkhnUrl: res.ykkhn_url
                    };
                }
            )
        };
    }

}
