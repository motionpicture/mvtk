import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as purchaseFactory from '../../factory/purchase/purchase.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:auth');

/**
 * 購入完了リコメンド情報取得
 * @class
 */
export class RecommendService extends Service {
    public async IinfoRecommend(args: purchaseFactory.IinfoRecommend): Promise<{}> {
        debug('requesting...', args);
        const form = {
            knyskhn_cd: args.knyskhn_cd,
            kiin_cd: args.kiin_cd,
            hyj_num: args.hyj_num,
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/purchase/recommend?knyskhn_cd=063511&kiin_cd=00000001&hyj_num=5',
            method: 'GET',
            form: form
        };

        const result = await this.request(options);
        debug('result...', result);

        return {
            status: 'OK'
        };
    }
}
