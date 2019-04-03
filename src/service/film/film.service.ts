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
            uri: `/api/film/details?skhn_cd=${args.skhn_cd}&kiin_cd=${args.kiin_cd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            hmbi_typ: result.hmbi_typ,
            hmbistts_typ: result.hmbistts_typ,
            skhn_cd: result.skhn_cd,
            skhn_nm: result.skhn_nm,
            pstrgz_url: result.pstrgz_url,
            eirnrtng_cd: result.eirnrtng_cd,
            slscpy1_txt: result.slscpy1_txt,
            znkkkkikish_dspt: result.znkkkkikish_dspt,
            skhnkists_txt: result.skhnkists_txt,
            skhnmngtr_txt: result.skhnmngtr_txt,
            skhnchshkkytsu_txt: result.skhnchshkkytsu_txt,
            skhnchshkshsi_txt: result.skhnchshkshsi_txt,
            mtitrksy_num: result.mtitrksy_num,
            mtitrkzm_flg: result.mtitrkzm_flg,
            kshkst_url: result.kshkst_url,
            stff_inf: result.stff_inf,
            cst_inf: result.cst_inf,
            skhmmiorgnl_nm: result.skhmmiorgnl_nm,
            sisk_y: result.sisk_y,
            siskkk_nm: result.siskkk_nm,
            hikygish_nm: result.hikygish_nm,
            jei_tmm: result.jei_tmm,
            skhnchskkn_dspt: result.skhnchskkn_dspt,
            shknhikygish_cd: result.shknhikygish_cd,
            tktnzikjkymsg_txt: result.tktnzikjkymsg_txt,
            knshknhmbishry_ymd: result.knshknhmbishry_ymd,
            knyjgmmi_num: result.knyjgmmi_num,
            knshknknr_no: result.knshknknr_no,
            knshkn_inf: result.knshkn_inf
        };
    }

}
