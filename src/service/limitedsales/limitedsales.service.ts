import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as filmFactory from '../../factory/film/film.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:film');

/**
 * 限定販売作品サービス
 * @class
 */
export class LimitedsalesService extends Service {
    /**
     * 限定販売作品詳細情報取得
     */
    public async filmdetails(skhnCd: string): Promise<filmFactory.IFilmDetailResult | null> {
        debug('requesting...', skhnCd);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/limitedsales/filmdetails?skhn_cd=${skhnCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        // 返すべき作品が存在しないと、各フィールドがnullや空配列で返される
        if (result.skhn_cd === null) {
            return null;
        }

        return filmFactory.factoryFilmDetailResult(result, true);
    }
}
