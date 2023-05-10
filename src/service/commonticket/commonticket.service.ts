import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as filmFactory from '../../factory/film/film.factory';
import { Service } from '../../service';

const debug = createDebug('mvtk:service:film');

/**
 * 共通鑑賞券情報サービス
 * @class
 */
export class CommonticketService extends Service {
  /**
   * 共通鑑賞券詳細情報取得
   */
  public async detail(
    args: filmFactory.IFilmDetailArgs
  ): Promise<filmFactory.IFilmDetailResultArray> {
    debug('requesting...', args);
    let kiinCdParam: string = '';
    if (args.kiinCd !== undefined && args.kiinCd !== '') {
      kiinCdParam = `&kiin_cd=${args.kiinCd}`;
    }
    const options = {
      expectedStatusCodes: [OK],
      uri: `/api/commonticket/details?kytsknshknknr_no=${args.skhnCd}${kiinCdParam}`,
      method: 'GET',
      form: {}
    };
    const result = await this.request(options);
    debug('result...', result);

    return filmFactory.factoryCommonticketDetailResult(result, false, true);
  }
}
