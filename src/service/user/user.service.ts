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
        const form: { kiin_mladdr: string; kiintrkmekssiknr_no?: string } = {
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
            ...(args.kiinsiNm !== undefined ? { kiinsi_nm: args.kiinsiNm } : {}),
            ...(args.kiimmiNm !== undefined ? { kiimmi_nm: args.kiimmiNm } : {}),
            ...(args.sibtsTyp !== undefined ? { sibts_typ: args.sibtsTyp } : {}),
            ...(args.tdfknCd !== undefined ? { tdfkn_cd: args.tdfknCd } : {}),
            ...(args.kiinshgikykNo !== undefined ? { kiinshgikyk_no: args.kiinshgikykNo } : {}),
            ...(args.kiinshnikykNo !== undefined ? { kiinshnikyk_no: args.kiinshnikykNo } : {}),
            ...(args.kiinknyshNo !== undefined ? { kiinknysh_no: args.kiinknyshNo } : {}),
            ...(args.usrNm !== undefined ? { usr_nm: args.usrNm } : {})
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
            encryptKiinCd: result.encrypt_kiin_cd,
            usrNm: result.usr_nm,
            prflgzUrl: result.prflgz_url,
            prflgzMstiFlg: result.prflgz_msti_flg === '1'
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

    /**
     * アクセストークン発行
     */
    public async token(args: userFactory.ITokenArgs): Promise<userFactory.ITokenResult> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/user/token`,
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            accessToken: result.token
        };
    }

    /**
     * 本番登録用認証コードチェック
     */
    public async checkAuthenticationCode(args: userFactory.ICheckAuthenticationCodeArgs): Promise<{}> {
        debug('requesting...', args);
        const form = {
            kiin_cd: args.kiinCd,
            authentication_code: args.authenticationCode
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/user/checkAuthenticationCode`,
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
     * パスワード再設定用認証コードチェック
     */
    public async checkPasswordResetAuthenticationCode(args: userFactory.ICcheckPasswordResetAuthenticationCodeArgs):
        Promise<userFactory.ICcheckPasswordResetAuthenticationCodeResult> {
        debug('requesting...', args);
        const form = {
            kiin_mladdr: args.kiinMladdr,
            authentication_code: args.authenticationCode
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/user/checkPasswordResetAuthenticationCode`,
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
     * パスワード再設定メール送信
     */
    public async sendPasswordResetMail(kiinMladdr: string): Promise<{}> {
        debug('requesting...', kiinMladdr);
        const form = {
            kiin_mladdr: kiinMladdr
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/user/sendPasswordResetMail`,
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
     * パスワード更新
     */
    public async editPassword(args: userFactory.IEditPasswordArgs): Promise<{}> {
        debug('requesting...', args.kiinCd);
        const form = {
            kiin_cd: args.kiinCd,
            kiin_gnzipwd: args.kiinGnzipwd,
            kiin_snpwd: args.kiinSnpwd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/user/editPassword`,
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
     * 会員コード復号化
     */
    public async codeDecrypt(encryptedKiinCd: string): Promise<{}> {
        debug('requesting...', encryptedKiinCd);
        const form = {
            kiin_cd: encryptedKiinCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/user/codeDecrypt`,
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
     * ログイン通知
     */
    public async loginNotify(args: userFactory.ILoginNotifyArgs): Promise<{}> {
        debug('requesting...', args.kiinCd);
        const form = {
            kiin_cd: args.kiinCd,
            lginip_addr: args.lginIpAddr,
            lginusragnt_txt: args.lginusragntTxt,
            lginaccunt_nm: args.lginaccuntNm,
            lginsrvc_typ: args.lginsrvcTyp
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/user/loginNotify`,
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
     * プロフィール画像登録
     */
    public async registImage(kiinCd: string, args: userFactory.IRegistImageArgs): Promise<userFactory.IRegistImageResult> {
        debug('requesting...', kiinCd);
        const form = {
            kiin_cd: kiinCd,
            prflgz_fl: args.prflgzFl,
            prflgz_typ: args.prflgzTyp
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/user/registImage`,
            method: 'POST',
            form: form
        };
        const result = await this.request(options);
        debug('result...', result);

        return {
            prflgzUrl: result.prflgz_url
        };
    }

    /**
     * プロフィール画像削除
     */
    public async deleteImage(kiinCd: string) {
        debug('requesting...', kiinCd);
        const form = {
            kiin_cd: kiinCd
        };
        const options = {
            expectedStatusCodes: [OK],
            uri: `/api/user/deleteImage`,
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
