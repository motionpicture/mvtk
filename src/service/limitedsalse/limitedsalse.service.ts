import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as filmFactory from '../../factory/film/film.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:film');

/**
 * 限定販売作品サービス
 * @class
 */
export class LimitedsalseService extends Service {
    /**
     * 限定販売作品詳細情報取得
     */
    public async filmdetails(skhnCd: string): Promise<filmFactory.IFilmDetailResult> {
        debug('requesting...', skhnCd);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/limitedsalse/filmdetails?skhn_cd=${skhnCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return filmFactory.factoryDetailResult(result);
    }
}
