import * as createDebug from 'debug';
import { OK } from 'http-status';
import * as eventFactory from '../../factory/event/event.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:event');

/**
 * イベント割用サービス
 * @class
 */
export class EventService extends Service {
  /**
   * メールアドレスの存在チェック
   * @param args
   */
  public async email(args: eventFactory.IEventSendAuthCodeMailRequest): Promise<eventFactory.IEventSendAuthCodeMailResult> {
    debug('requesting...', args);
    const options = {
      expectedStatusCodes: [OK],
      uri: `/api/event/sendAuthCodeMail`,
      method: 'POST',
      body: JSON.stringify({
        knysh_mladdr: args.knyshMladdr
      })
    };
    const result = await this.request(options);
    debug('result...', result);

    return {
      // メールアドレス
      knyshMladdr: args.knyshMladdr
    };
  }

  public async emailCodeCheck(args: eventFactory.IEventCheckAuthCodeRequest): Promise<eventFactory.IEventCheckAuthCodeResult> {
    debug('requesting...', args);
    const options = {
      expectedStatusCodes: [OK],
      uri: `/api/event/checkAuthCode`,
      method: 'POST',
      form: {
        knysh_mladdr: args.knyshMladdr,
        auth_code: args.authCode
      }
    };
    const result = await this.request(options);
    debug('result...', result);

    return {
      // メールアドレス
      knyshMladdr: args.knyshMladdr
    };
  }

  public async prepareFileUpload(args: eventFactory.IEventUploadCredentialsRequest): Promise<eventFactory.IEventUploadCredentialsResult> {
    debug('requesting...', args);
    const options = {
      expectedStatusCodes: [OK],
      uri: `/api/event/getUploadCredentialUrl`,
      method: 'POST',
      form: {
        stsshshmigzhtsu_typ: args.stsshshmigzhtsuTyp,
        stsshshmigznni_typ: args.stsshshmigznniTyp
      }
    };
    const result = await this.request(options);
    debug('result...', result);

    return {
      // 接種証明書必須画像ファイル名
      stsshshmigzhtsuflNm: result.stsshshmigzhtsufl_nm,
      // 接種証明書必須画像アップロード用URL
      stsshshmigzhtsuUrl: result.stsshshmigzhtsu_url,
      // 接種証明書任意画像ファイル名
      stsshshmigznniflNm: result.stsshshmigznnifl_nm,
      // 接種証明書任意画像アップロード用URL
      stsshshmigznniUrl: result.stsshshmigznni_url
    };
  }
}
