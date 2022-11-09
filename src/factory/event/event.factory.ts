
export interface IEventSendAuthCodeMailRequest {
  /**
   * メールアドレス
   */
  knyshMladdr: string;
}

export interface IEventSendAuthCodeMailResult {
  /**
   * メールアドレス
   */
  knyshMladdr: string;
}

export interface IEventCheckAuthCodeRequest {
  /**
   * メールアドレス
   */
  knyshMladdr: string;

  /**
   * コード
   */
  authCode: string;
}

export interface IEventCheckAuthCodeResult {
  /**
   * メールアドレス
   */
  knyshMladdr: string;
}

export interface IEventUploadCredentialsRequest {
  stsshshmigzhtsuTyp: string;
  stsshshmigznniTyp?: string;
}

/**
 *
 */
export interface IEventUploadCredentialsResult {
  // 接種証明書必須画像ファイル名
  stsshshmigzhtsuflNm: string;
  // 接種証明書必須画像アップロード用URL
  stsshshmigzhtsuUrl: string;
  // 接種証明書任意画像ファイル名
  stsshshmigznniflNm?: string;
  // 接種証明書任意画像アップロード用URL
  stsshshmigznniUrl?: string;
}
