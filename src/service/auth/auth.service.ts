import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as authFactory from '../../factory/auth/auth.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:auth');

/**
 * Authサービス
 * @class
 */
export class AuthService extends Service {
    /**
     * 1.会員情報仮登録
     */
    public async tempRegist(args: authFactory.ITempRegistArgs): Promise<authFactory.ITempRegistResult> {
        debug('requesting...', args);
        const form: {kiin_mladdr: string; kiintrkmekssiknr_no?: string} = {
            kiin_mladdr: args.kiinMladdr
        };
        if (args.kiintrkmekssiknrNo) {
            form.kiintrkmekssiknr_no = args.kiintrkmekssiknrNo;
        }
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/user/tempRegist',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            kiinCd: result.kiin_cd
        };
    }
}
