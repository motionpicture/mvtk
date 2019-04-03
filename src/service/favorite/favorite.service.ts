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
    public async filmInfo (args: favoriteFactory.IFilmInfoArgs): Promise<favoriteFactory.IFilmInfoLstRes> {
        debug('requesting...', args.kiinCd);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/favorite/filmInfo?kiin_cd=${args.kiinCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return (result === null) ? [] : result.map(
            (film: any): favoriteFactory.IFilmInfoResult => {
                return {
                    hmbiTyp: film.hmbi_typ,
                    hmbisttsTyp: film.hmbistts_typ,
                    skhnCd: film.skhn_cd,
                    skhnNm: film.skhn_nm,
                    pstrgzUrl: film.pstrgz_url,
                    znkkkkikishDspt: film.znkkkkikish_dspt,
                    knshknhmbishryYmd: film.knshknhmbishry_ymd
                };
            }
        );
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
