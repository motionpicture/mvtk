import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as favoriteFactory from '../../factory/favorite/favorite.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:favorite');

/**
 * お気に入りサービス
 * @class
 */
export class FavoriteService extends Service {
    /**
     * 観たい作品情報取得
     */
    public async filmInfo (args: favoriteFactory.IFilmInfoArgs): Promise<favoriteFactory.IFilmInfoResult> {
        debug('requesting...', args.kiinCd);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/favorite/filmInfo?kiin_cd=${args.kiinCd}`,
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
            znkkkkikishDspt: result.znkkkkikish_dspt,
            knshknhmbishryYmd: result.knshknhmbishry_ymd
        };
    }

    /**
     * 11 観たい作品登録
     */
    public async filmRegister (args: favoriteFactory.IFilmRegisterArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            skhn_cd: args.skhnCd,
            kiin_cd: args.kiinCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/favorite/filmRegister',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            status: 'OK'
        };
    }

    /**
     * 12 観たい作品削除
     */
    public async filmDelete (args: favoriteFactory.IFilmDeleteArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            skhn_cd: args.skhnCd,
            kiin_cd: args.kiinCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/favorite/filmDelete',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            status: 'OK'
        };
    }

}
