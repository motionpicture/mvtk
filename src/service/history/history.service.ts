import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as historyFactory from '../../factory/history/history.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:history');

/**
 * 購入履歴
 * @class
 */
export class HistoryService extends Service {
    /**
     * チケット履歴取得
     */
    public async tickets(args: historyFactory.ITicketsArgs): Promise<historyFactory.ITicketResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/history/tickets?kiin_cd=${args.kiinCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return (result === null) ? [] : result.map(
            (res: any): historyFactory.ITicket => {
                return {
                    tcktsttsTyp: res.tcktstts_typ,
                    knyknrNo: res.knyknr_no,
                    mvilgNo: res.mvilg_no,
                    skhnCd: res.skhn_cd,
                    skhnNm: res.skhn_nm,
                    pstrgzUrl: res.pstrgz_url,
                    znkkkkikishYmd: res.znkkkkikish_ymd,
                    znkkkkikishDspt: res.znkkkkikish_dspt,
                    knyYmd: res.kny_ymd,
                    knshknInf: (res.knshkn_inf === null) ? [] : res.knshkn_inf.map(
                        (knshknInf: any): historyFactory.IKnshknInf => {
                            return {
                                knshkbnNm: knshknInf.knshkbn_nm,
                                knymiNum: knshknInf.knymi_num
                            };
                        }
                    ),
                    kytsknFlg: res.kytskn_flg
                };
            }
        );
    }

    /**
     * チケット履歴詳細取得
     */
    public async ticketDetails(args: historyFactory.ITicketDetailsArgs): Promise<historyFactory.ITicketDetailResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/history/ticketDetails?mvilg_no=${args.mvilgNo}&kytskn_flg=${args.kytsknFlg}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            tcktsttsTyp: result.tcktstts_typ,
            knshYmd: result.knsh_ymd,
            knshstNm: result.knshst_nm,
            gftsfYmd: result.gftsf_ymd,
            gftatskNm: result.gftatsk_nm,
            gftsttsTyp: result.gftstts_typ,
            knshknInf: (result.knshkn_inf === null) ? [] : result.knshkn_inf.map(
                (knshknInf: any): historyFactory.IKnshknInf => {
                    return {
                        knshkbnNm: knshknInf.knshkbn_nm,
                        knymiNum: knshknInf.knymi_num
                    };
                }
            )
        };
    }

    /**
     * チケット履歴削除
     */
    public async ticketDelete(args: historyFactory.ITicketDeleteArgs): Promise<{}> {
        const form = {
            mvilg_no: args.mvilgNo,
            tcktstts_typ: args.tcktsttsTyp
        };
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/history/ticketDelete',
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
