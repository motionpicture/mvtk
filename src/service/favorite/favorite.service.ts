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
        debug('requesting...', args.kiin_cd);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/favorite/filmInfo?kiin_cd=${args.kiin_cd}`,
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
            znkkkkikish_dspt: result.znkkkkikish_dspt,
            knshknhmbishry_ymd: result.knshknhmbishry_ymd
        };
    }

    /**
     * 11 観たい作品登録
     */
    public async filmRegister (args: favoriteFactory.IFilmRegisterArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            skhn_cd: args.skhn_cd,
            kiin_cd: args.kiin_cd
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
            skhn_cd: args.skhn_cd,
            kiin_cd: args.kiin_cd
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
