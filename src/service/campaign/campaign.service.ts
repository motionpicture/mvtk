import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as campaignFactory from '../../factory/campaign/campaign.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:auth');

/**
 * ユーザサービス
 * @class
 */
export class CampaignService extends Service {
    /**
     * キャンペーン詳細情報取得
     */
    public async details(cmpgnknrNo: string): Promise<campaignFactory.IDetailsResult> {
        debug('requesting...', cmpgnknrNo);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/campaign/details?cmpgnknr_no=${cmpgnknrNo}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            cmpgnsttsTyp: result.cmpgnstts_typ,
            bnnrUrl: result.bnnr_url,
            entryTyp: result.entry_typ
        };
    }
    /**
     * キャンペーンエントリー
     */
    public async entry(args: campaignFactory.IEntryArgs): Promise<{}> {
        debug('requesting...', args);
        const form: { cmpgnknr_no: string; kiin_cd: string } = {
            cmpgnknr_no: args.cmpgnknrNo,
            kiin_cd: args.kiinCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/campaign/entry',
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
     * キャンペーン情報
     */
    public async info(kiinCd: string): Promise<campaignFactory.IInfoResult[]> {
        debug('requesting...', kiinCd);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/campaign/info?kiin_cd=${kiinCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return (result === null) ? [] : result.map((res: any) => {
            return {
                cmpgnsttsTyp: res.cmpgnstts_typ,
                entryzmFlg: res.entryzm_flg,
                incntvTyp: res.incntv_typ,
                bnnrUrl: res.bnnr_url,
                bnnrlnkUrl: res.bnnrlnk_url,
                uktskshryDt: res.uktskshry_dt,
                entryYmd: res.entry_ymd,
                uktskshrysrtDt: res.uktskshrysrt_dt,
                entrysrtYmd: res.entrysrt_ymd
            };
        });
    }
}
