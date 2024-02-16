import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as purchaseFactory from '../../factory/purchase/purchase.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:auth');

/**
 * 購入関連サービス
 * @class
 */
export class PurchaseService extends Service {
    /**
     * 1.決済情報仮登録
     */
    public async tempSettlementRegister(args: purchaseFactory.ITempSettlementRegistArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            kssiknr_no: args.kssiknrNo,
            knyshsi_nm: args.knyshsiNm,
            knyshmi_nm: args.knyshmiNm,
            knysh_mladdr: args.knyshMladdr,
            knyshshgikyk_no: args.knyshshgikykNo,
            knyshshnikyk_no: args.knyshshnikykNo,
            knyshknysh_no: args.knyshknyshNo,
            kny_dt: args.knyDt,
            hmbichnnl_typ: args.hmbichnnlTyp,
            hmbigish_cd: args.hmbigishCd,
            knydvc_typ: args.knydvcTyp,
            knysh_cd: args.knyshCd,
            kiin_flg: args.kiinFlg,
            skhn_cd: args.skhnCd,
            skhn_nm: args.skhnNm,
            knshknknr_no: args.knshknknrNo,
            knshkn_inf: args.knshknInf,
            kssihh_typ: args.kssihhTyp,
            hiykssi_flg: args.hiykssiFlg,
            hiykssihh_typ: args.hiykssihhTyp,
            hiykssirygkikn_gk: args.hiykssirygkiknGk,
            crdjhhzn_flg: args.crdjhhznFlg,
            hnnnnnshar_flg: args.hnnnnnsharFlg,
            gft_inf: args.gftInf,
            pintry_flg: args.pintryFlg,
            pintkssi_uuid: args.pintkssiUuid,
            ry_pt: args.ryPt,
            kktk_pt: args.kktkPt,
            rykn_gk: args.ryknGk,
            gkkn_gk: args.gkknGk,
            mltmplt_cd: args.mltmpltCd,
            tktncdkkh_inf: args.tktncdkkhInf,
            prmtncdry_flg: args.prmtncdryFlg,
            prmtn_cd: args.prmtnCd,
            prmtncdkssi_uuid: args.prmtncdkssiUuid,
            prmtncdwrbk_gk: args.prmtncdwrbkGk,
            eggftry_flg: args.eggftryFlg,
            myeggftry_flg: args.myeggftryFlg,
            eggft_inf: args.eggftInf != null ? args.eggftInf.map((info) => {
                return {
                    eggft_cd: info.eggftCd,
                    eggftpin_cd: info.eggftpinCd,
                    eggftkssiknr_no: info.eggftkssiknrNo,
                    eggftykkgn_ymd: info.eggftykkgnYmd,
                    eggftrykn_gk: info.eggftryknGk
                };
            }) : [],
            stshkbts_cd: args.stshkbtsCd,
            usrshkbts_cd: args.usrshkbtsCd,
            snimtknshsntkgmn_typ: args.snimtknshsntkgmnTyp,
            stsshshmigzhtsufl_nm: args.stsshshmigzhtsuflNm,
            stsshshmigznnifl_nm: args.stsshshmigznniflNm,
            hmbi_typ: args.hmbiTyp
        };

        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/purchase/tempSettlementRegister',
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
     * 2.購入情報取得
     */
    public async info(args: purchaseFactory.IInfoArgs): Promise<purchaseFactory.IInfoResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/purchase/info?kssiknr_no=${args.kssiknrNo}`,
            method: 'GET',
            form: {}
        };

        const result = await this.request(options);
        debug('result...', result);

        return {
            knyknrNo: result.knyknr_no,
            qrcdUrl: result.qrcd_url,
            dgtlincntvdwnlodgmnUrl: result.dgtlincntvdwnlodgmn_url,
            kktkPt: result.kktk_pt
        };
    }

    /**
     * 3.決済管理番号採番
     */
    public async numberingSettlementNo(): Promise<purchaseFactory.INumberingSettlementNoResult> {
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/purchase/numberingSettlementNo',
            method: 'POST',
            form: {}
        };

        const result = await this.request(options);
        debug('result...', result);

        return {
            kssiknr_no: result.kssiknr_no
        };
    }

    /**
     * 購入日時チェック
     * @deprecated MWSR-493の対応後に削除される予定
     */
    public async purchasableDateTime(args: purchaseFactory.IPurchasableDateTimeArgs): Promise<purchaseFactory.IPurchasableDateTimeResult> {
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/purchase/purchasableDateTime?skhn_cd=${args.skhnCd}&hmbi_typ=${args.hmbiTyp}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            knyDt: result.kny_dt
        };
    }

    /**
     * 購入可能チェック
     * @see https://api-reference.azurewebsites.net/#購入-購入可能チェック-get
     */
    public async isPurchasable(args: purchaseFactory.IIsPurchasableArgs): Promise<purchaseFactory.IIsPurchasableResult> {
        const knyshCd = (args.knyshCd !== undefined && args.knyshCd !== null) ? `&knysh_cd=${args.knyshCd}` : '';
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/purchase/isPurchasable?skhn_cd=${args.skhnCd}&hmbi_typ=${args.hmbiTyp}${knyshCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            knyDt: result.kny_dt
        };
    }

    /**
     * 特典一時確保
     */
    public async tempPreserveBonus(args: purchaseFactory.ITempPreserveBonusArgs): Promise<purchaseFactory.ITempPreserveBonusResult> {
        const form = {
            kssiknr_no: args.kssiknrNo,
            skhn_cd: args.skhnCd,
            kssihh_typ: args.kssihhTyp,
            hiykssi_flg: args.hiykssiFlg,
            hiykssihh_typ: args.hiykssihhTyp,
            pintry_flg: args.pintryFlg,
            prmtncdry_flg: args.prmtncdryFlg,
            eggftry_flg: args.eggftryFlg,
            kny_dt: args.knyDt,
            knshkn_inf: args.knshknInf.map((inf) => {
                return {
                    knsh_typ: inf.knshTyp,
                    knymi_num: inf.knymiNum
                };
            })
        };

        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/purchase/tempPreserveBonus',
            method: 'POST',
            form: form
        };

        const result = await this.request(options);
        debug('result...', result);

        return {
            errjharFlg: result.errjhar_flg,
            tktncdkkhnoLst: result.tktncdkkhno_lst,
            tktnzikjkymsgLst: result.tktnzikjkymsg_lst
        };
    }

    /**
     * 購入完了リコメンド取得
     */
    public async recommend(args: purchaseFactory.IRecommend): Promise<purchaseFactory.IRecommendDetailResult> {
        debug('requesting...', args);
        const kiinCdQuery = args.kiinCd !== undefined ? `&kiin_cd=${args.kiinCd}` : '';
        const hyjNumQuery = args.hyjNum !== undefined ? `&hyj_num=${args.hyjNum}` : '';
        const query = `knyskhn_cd=${args.knyskhnCd}${kiinCdQuery}${hyjNumQuery}`;
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/purchase/recommend?${query}`,
            method: 'GET',
            form: {}
        };

        const result = await this.request(options);
        debug('result...', result);

        return (result === null) ? [] : result.map(
            (res: any): purchaseFactory.IRecommendResult => {
                return {
                    skhnCd: res.skhn_cd,
                    skhnNm: res.skhn_nm,
                    pstrgzUrl: res.pstrgz_url,
                    znkkkkikishYmd: res.znkkkkikish_ymd,
                    znkkkkikishDspt: res.znkkkkikish_dspt,
                    knshknhmbishryYmd: res.knshknhmbishry_ymd,
                    mtitrksyNum: res.mtitrksy_num
                };
            }
        );
    }

    /**
     * メール転送
     */
    public async forwardMail(args: purchaseFactory.IForwardMail): Promise<{}> {
        const form = {
            knyknr_no: args.knyknrNo,
            frwrd_mladdr: args.frwrdMladdr
        };

        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/purchase/forwardMail',
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
     * 本人認証
     */
    public async identityVerify(args: purchaseFactory.IIdentityVerifyArgs): Promise<purchaseFactory.IIdentityVerifyResult> {
        const form = {
            kssiknr_no: args.kssiknrNo,
            knysh_mladdr: args.knyshMladdr,
            knysh_cd: args.knyshCd,
            ip_addr: args.ipAddr
        };

        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/purchase/identityVerify',
            method: 'POST',
            form: form
        };

        const result = await this.request(options);
        debug('result...', result);

        return {
            hnnnnnsharFlg: result.hnnnnnshar_flg,
            hznzmcrdtcrdybdshFlg: result.hznzmcrdtcrdybdsh_flg,
            fshnkiJh: result.fshnkiJh,
            kiinSishkshnYmd: result.kiinSishkshnYmd,
            kiinTrkYmd: result.kiinTrkYmd,
            kiinPwdKshnYmd: result.kiinPwdKshnYmd
        };
    }

    /**
     * 決済キャンセル
     */
    public async gmoCancel(args: purchaseFactory.IGmoCancel): Promise<{}> {
        const form = {
            kssiknr_no: args.kssiknrNo,
            accss_id: args.accssId,
            accss_pwd: args.accssPwd,
            kssihh_typ: args.kssihhTyp,
            rykn_gk: args.ryknGk
        };

        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/gmo/cancel',
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
     * アンケート情報取得
     */
    public async questionary(args: purchaseFactory.IQuestionary): Promise<purchaseFactory.IQuestionaryDetailResult> {
        debug('requesting...', args);
        const hmbiTypQuery = args.hmbiTyp !== undefined ? `&hmbi_typ=${args.hmbiTyp}` : '';
        const query = `skhn_cd=${args.skhnCd}${hmbiTypQuery}`;
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/purchase/questionary?${query}`,
            method: 'GET',
            form: {}
        };

        const result = await this.request(options);
        debug('result...', result);

        return (result === null) ? [] : result.map(
            (res: any): purchaseFactory.IQuestionaryResult => {
                return {
                    qustinnarNo: res.qustinnar_no,
                    qustinnarTxt: res.qustinnar_txt,
                    kithshkTyp: res.kithshk_typ,
                    hyjkishkTyp: res.hyjkishk_typ,
                    kitjgnNum: res.kitjgn_num,
                    stsmnTyp: res.stsmn_typ,
                    sntkshInf: (res.sntksh_inf === null) ? [] : res.sntksh_inf.map(
                        (sntkshInfo: any): purchaseFactory.ISntkshInf => {
                            return {
                                sntkshNo: sntkshInfo.sntksh_no,
                                sntkshNm: sntkshInfo.sntksh_nm
                            };
                        }
                    )
                };
            }
        );
    }

    /**
     * アンケート登録
     */
    public async questionaryRegister(args: purchaseFactory.IQuestionaryRegisterArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            knyknr_no: args.knyknrNo,
            skhn_cd: args.skhnCd,
            kit_inf: args.kitInf != null ? args.kitInf.map((info) => {
                return {
                    qustinnar_no: info.qustinnarNo,
                    kithshk_typ: info.kithshkTyp,
                    kjtskit_txt: info.kjtskitTxt,
                    sntkshkkit_inf: info.sntkshkkitInf != null ? info.sntkshkkitInf.map((sntkshkkitInfo) => {
                        return {
                            sntksh_no: sntkshkkitInfo.sntkshNo
                        };
                    }) : []
                };
            }) : []
        };

        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/purchase/questionaryRegister',
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
     * 購入確定
     */
    public async register(args: purchaseFactory.IRegistArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            kssiknr_no: args.kssiknrNo
        };

        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/purchase/register',
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
