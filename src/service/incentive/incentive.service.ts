import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as incentiveFactory from '../../factory/incentive/incentive.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:history');

/**
 * インセンティブ
 * @class
 */
export class IncentiveService extends Service {
    /**
     * デジタルインセンティブダウンロード情報検索
     */
    public async downloadInfo(args: incentiveFactory.IDownloadInfoArgs): Promise<incentiveFactory.IDownloadInfoResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/incentive/downloadInfo?dgtlincntv_url=${args.dgtlincntvUrl}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            knyknrNo: result.knyknr_no,
            dgtlincntvInf: (result.dgtlincntv_inf === null) ? [] : result.dgtlincntv_inf.map(
                (dgtlincntvInfo: any): incentiveFactory.IDgtlincntvInf => {
                    return {
                        dgtlincntvCd: dgtlincntvInfo.dgtlincntv_cd,
                        dgtlincntvTtl: dgtlincntvInfo.dgtlincntv_ttl,
                        dgtlincntvstsmiTxt: dgtlincntvInfo.dgtlincntvstsmi_txt,
                        smplgzUrl: dgtlincntvInfo.smplgz_url,
                        dgtlincntvknykishYmd: dgtlincntvInfo.dgtlincntvknykish_ymd,
                        dgtlincntvknyshryYmd: dgtlincntvInfo.dgtlincntvknyshry_ymd,
                        dgtlincntvdwnlodykTm: dgtlincntvInfo.dgtlincntvdwnlodyk_tm,
                        skhndgtlincntvRmk: dgtlincntvInfo.skhndgtlincntv_rmk,
                        dgtlincntvshsiInf: (dgtlincntvInfo.dgtlincntvshsi_inf === null) ? [] : dgtlincntvInfo.dgtlincntvshsi_inf.map(
                            (dgtlincntvshsiInfo: any): incentiveFactory.IDgtlincntvshsiInf => {
                                return {
                                    dgtlincntvedNo: dgtlincntvshsiInfo.dgtlincntved_no,
                                    dgtlincntvshsiTtl: dgtlincntvshsiInfo.dgtlincntvshsi_ttl
                                };
                            }
                        )
                    };
                }
            )
        };
    }

    /**
     * デジタルインセンティブダウンロード
     */
    public async download(args: incentiveFactory.IDownloadArgs): Promise<incentiveFactory.IDownloadResult> {
        debug('requesting...', args);
        const form = {
            knyknr_no: args.knyknrNo,
            dgtlincntv_cd: args.dgtlincntvCd,
            dgtlincntved_no: args.dgtlincntvedNo
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/incentive/download',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            dwnlodflNm: result.dwnlodfl_nm,
            dwnlodflBt: result.dwnlodfl_bt
        };
    }
}
