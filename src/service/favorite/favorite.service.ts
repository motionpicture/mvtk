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
