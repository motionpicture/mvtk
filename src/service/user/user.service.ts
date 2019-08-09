import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as userFactory from '../../factory/user/user.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:auth');

/**
 * ユーザサービス
 * @class
 */
export class UserService extends Service {
    /**
     * 1.会員情報仮登録
     */
    public async tempRegist(args: userFactory.ITempRegistArgs): Promise<userFactory.ITempRegistResult> {
        debug('requesting...', args);
        const form: {kiin_mladdr: string; kiintrkmekssiknr_no?: string} = {
            kiin_mladdr: args.kiinMladdr
        };
        if (args.kiintrkmekssiknrNo !== undefined) {
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
    /**
     * 2.会員情報仮登録完了のメール送信
     */
    public async sendRegistTempMail(kiinCd: string): Promise<{}> {
        debug('requesting...', kiinCd);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/user/sendRegistTempMail?kiin_cd=${kiinCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            status: 'OK'
        };
    }
    /**
     * 3.会員情報登録
     */
    public async regist(args: userFactory.IRegistArgs): Promise<userFactory.IUserCommon> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd,
            kiin_pwd: args.kiinPwd,
            kiinsi_ymd: args.kiinsiYmd,
            mlmgznkb_flg: args.mlmgznkbFlg
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/user/regist',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            kiinCd: result.kiin_cd
        };
    }
    /**
     * 4.会員情報更新
     */
    public async edit(args: userFactory.IEditArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd,
            kiinsi_ymd: args.kiinsiYmd,
            kiin_mladdr: args.kiinMladdr,
            mlmgznkb_flg: args.mlmgznkbFlg,
            ...(args.kiinsiNm !== undefined ? {kiinsi_nm: args.kiinsiNm} : {}),
            ...(args.kiimmiNm !== undefined ? {kiimmi_nm: args.kiimmiNm} : {}),
            ...(args.sibtsTyp !== undefined ? {sibts_typ: args.sibtsTyp} : {}),
            ...(args.tdfknCd !== undefined ? {tdfkn_cd: args.tdfknCd} : {}),
            ...(args.kiinshgikykNo !== undefined ? {kiinshgikyk_no: args.kiinshgikykNo} : {}),
            ...(args.kiinshnikykNo !== undefined ? {kiinshnikyk_no: args.kiinshnikykNo} : {}),
            ...(args.kiinknyshNo !== undefined ? {kiinknysh_no: args.kiinknyshNo} : {})
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/user/edit',
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
     * 5.ユーザー認証
     */
    public async authentication(args: userFactory.IAuthentication): Promise<userFactory.IAuthenticationResult> {
        debug('requesting...', args);
        const form = {
            kiin_mladdr: args.kiinMladdr,
            kiin_pwd: args.kiinPwd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: '/api/user/authentication',
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            kiinCd: result.kiin_cd,
            kiinMladdr: result.kiin_mladdr,
            encryptKiinCd: result.encrypt_kiin_cd,
            mvtckthsskmknshFlg: result.mvtckthsskmknsh_flg
        };
    }
    /**
     * 6.会員情報取得
     */
    public async info(kiinCd: string): Promise<userFactory.IInfoResult> {
        debug('requesting...', kiinCd);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/user/info?kiin_cd=${kiinCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            kiinCd: kiinCd,
            kiinMladdr: result.kiin_mladdr,
            kiinmladdrssdvcTyp: result.kiinmladdrssdvc_typ,
            hyjNm: result.hyj_nm,
            kiinsiNm: result.kiinsi_nm,
            kiimmiNm: result.kiimmi_nm,
            sibtsTyp: result.sibts_typ,
            kiinsiYmd: result.kiinsi_ymd,
            tdfknCd: result.tdfkn_cd,
            kiinshgikykNo: result.kiinshgikyk_no,
            kiinshnikykNo: result.kiinshnikyk_no,
            kiinknyshNo: result.kiinknysh_no,
            mlmgznkbFlg: result.mlmgznkb_flg,
            encryptKiinCd: result.encrypt_kiin_cd
        };
    }

    /**
     * 7.本番登録用URLをチェック
     */
    public async checkUrl(hmbntrkyUrl: string): Promise<userFactory.IUserCommon> {
        debug('requesting...', hmbntrkyUrl);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/user/checkUrl?hmbntrky_url=${hmbntrkyUrl}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            kiinCd: result.kiin_cd
        };
    }

    /**
     * 51 会員ヘッダー情報取得
     */
    public async topInfo(args: userFactory.ITopInfoArgs): Promise<userFactory.ITopInfoResult> {
        debug('requesting...', args);
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/user/topInfo?kiin_cd=${args.kiinCd}`,
            method: 'GET',
            form: {}
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            hyjNm: result.hyj_nm,
            ptZndk: result.pt_zndk,
            mtitrkNum: result.mtitrk_num,
            rymeskhnNum: result.rymeskhn_num
        };
    }

}
