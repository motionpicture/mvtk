import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as gmoFactory from '../../factory/gmo/gmo.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:gmo');

/**
 * GMO関連サービス
 * @class
 */
export class GmoService extends Service {
    /**
     * カード情報確認
     */
    public async searchCard(args: gmoFactory.ISearchCardArgs): Promise<gmoFactory.ISearchCardResult> {
        debug('requesting...', args);

        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/gmo/searchCard?kiin_cd=${args.kiinCd}`,
            method: 'get',
            form: {}
        };

        const result = await this.request(options);
        debug('result...', result);

        return {
            crdturkzmFlg: result.crdturkzm_flg
        };
    }
}
