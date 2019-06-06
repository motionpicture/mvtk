import * as createDebug from './node_modules/debug';
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
                    znkkkkikishYmd: film.znkkkkikish_ymd,
                    hmbishryYmd: film.hmbishry_ymd
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

    /**
     * 13 お気に入り劇場情報取得
     */
    public async theaterInfo(args: favoriteFactory.ITheaterInfoArgs): Promise<favoriteFactory.ITheaterInfoLstResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/favorite/theaterInfo?kiin_cd=${args.kiinCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result', result);

        return (result === null) ? [] : result.map(
            (res: any): favoriteFactory.ITheaterInfoResult => {
                return {
                    oknirtrkDt: res.oknirtrk_dt,
                    stCd: res.st_cd,
                    stNm: res.st_nm,
                    mdgchryknFlg: res.mdgchrykn_flg,
                    ntryknFlg: res.ntrykn_flg
                };
            }
        );
    }

    /**
     * 14 お気に入り劇場登録
     */
    public async theaterRegister(args: favoriteFactory.ITheaterRegisterArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            st_cd: args.stCd,
            kiin_cd: args.kiinCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/favorite/theaterRegister',
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
     * 15 お気に入り劇場削除
     */
    public async theaterDelete(args: favoriteFactory.ITheaterDeleteArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            st_cd: args.stCd,
            kiin_cd: args.kiinCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/favorite/theaterDelete',
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
