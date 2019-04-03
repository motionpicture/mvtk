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
     * 17.作品詳細情報取得
     */
    // tslint:disable-next-line: max-func-body-length
    public async detail(args: filmFactory.IFilmDetailArgs): Promise<filmFactory.IFilmDetailResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/film/details?skhn_cd=${args.skhnCd}&kiin_cd=${args.kiinCd}`,
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
            stffInf: result.stff_inf,
            cstInf: result.cst_inf,
            skhmmiorgnlNm: result.skhmmiorgnl_nm,
            siskY: result.sisk_y,
            siskkkNm: result.siskkk_nm,
            hikygishNm: result.hikygish_nm,
            jeiTmm: result.jei_tmm,
            skhnchskknDspt: result.skhnchskkn_dspt,
            shknhikygishCd: result.shknhikygish_cd,
            tktnzikjkymsgTxt: result.tktnzikjkymsg_txt,
            knshknhmbishryYmd: result.knshknhmbishry_ymd,
            knyjgmmiNum: result.knyjgmmi_num,
            knshknknrNo: result.knshknknr_no,
            knshknInf: result.knshkn_inf
        };
    }

}
