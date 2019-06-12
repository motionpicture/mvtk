/**
 * eigagift.factory
 */

export interface IEigagiftCommon {
    /**
     * 映画ギフトコード（16桁固定）
     */
    eggftCd: string;
    /**
     * 映画ギフトPINコード（4桁固定）
     */
    eggftpinCd: string;
}

//-------------------------------- 映画ギフト認証 --------------------------------//
export interface IAuthenticationArgs extends IEigagiftCommon {
    /**
     * 会員フラグ
     */
    kiinFlg: string;
    /**
     * 会員コード（8桁固定）
     */
    kiinCd?: string;
}

export interface IAuthenticationResult extends IEigagiftCommon {
    /**
     * 映画ギフト残高
     */
    eggftZndk: number;
    /**
     * チャージフラグ
     */
    chrgFlg: string;
}

//-------------------------------- 映画ギフト利用 --------------------------------//
export interface IEggftInf extends IEigagiftCommon {
    /**
     * 映画ギフト決済管理番号
     */
    eggftkssiknrNo: string;
    /**
     * 映画ギフト有効期限
     */
    eggftykkgnYmd: string;
    /**
     * 映画ギフト利用金額
     */
    ryknGk: number;
}

export interface IUseArgs {
    /**
     * 保有映画ギフト利用フラグ（保有映画ギフトからの利用の場合：1／それ以外：0）
     */
    myeggftryFlg: string;
    /**
     * 利用映画ギフト情報
     */
    eggftInf: IEggftInf[];
}

export interface IErrInf {
    /**
     * 映画ギフトエラーコード
     */
    errCd: string;
    /**
     * 映画ギフトエラーメッセージ
     */
    errMsg: string;
}

export interface IEggftInfResult extends IEigagiftCommon {
    /**
     * 映画ギフト決済管理番号
     */
    eggftkssiknrNo: string;
    /**
     * 映画ギフト利用金額
     */
    ryknGk: number;
    /**
     * 映画ギフト利用前残高
     */
    rymeZndk?: number;
    /**
     * 映画ギフト利用後残高
     */
    rygZndk?: number;
    /**
     * 映画ギフト承認番号
     */
    shnnNo?: string;
    /**
     * 凸版処理要求日時（日時形式 format: yyyy/MM/dd HH:mm:ss）
     */
    tppnshrykyDt: string;
    /**
     * 映画ギフトエラー情報
     */
    errInf?: IErrInf[];
}

export interface IUseResult {
    /**
     * 映画ギフトエラー情報ありフラグ
     */
    errjharFlg: string;
    /**
     * 映画ギフト情報
     */
    eggftInf: IEggftInfResult[];
}

//-------------------------------- 映画ギフト取消 --------------------------------//
export interface IEggftInfArgs extends IEigagiftCommon {
    /**
     * 障害取消フラグ（0：通常取消／1：障害取消）
     */
    shgitrkshFlg: string;
    /**
     * 映画ギフト決済管理番号
     */
    eggftkssiknrNo: string;
    /**
     * 映画ギフト利用金額
     */
    ryknGk: number;
    /**
     * 凸版処理要求日時（日時形式 format: yyyy/MM/dd HH:mm:ss）
     */
    tppnshrykyDt: string;
}

export interface ICancelArgs {
    /**
     * 取消映画ギフト情報
     */
    eggftInf: IEggftInfArgs[];
}

export interface IEggftInfCancelResult extends IEigagiftCommon {
    /**
     * 映画ギフト決済管理番号
     */
    eggftkssiknrNo: string;
    /**
     * 映画ギフト利用前残高
     */
    rymeZndk?: number;
    /**
     * 映画ギフト利用後残高
     */
    rygZndk?: number;
    /**
     * 映画ギフトエラー情報
     */
    errInf?: IErrInf[];
}

export interface ICancelResult {
    /**
     * 映画ギフトエラー情報ありフラグ
     */
    errjharFlg: string;
    /**
     * 保有映画ギフト情報
     */
    eggftInf: IEggftInfCancelResult[];
}

//-------------------------------- 映画ギフト登録 --------------------------------//
export interface IRegisterArgs extends IEigagiftCommon {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
}

//-------------------------------- 映画ギフト交換可能認証 --------------------------------//
export interface IExchangeableArgs {
    /**
     * AMCクーポンコード
     */
    amccupnCd: string;
}

export interface IExchangeableResult {
    /**
     * チャージ予定金額
     */
    chrgytiGk: number;
    /**
     * eバウチャー交換有効期限（日時形式 format：yyyy/MM/dd HH:mm:ss）
     */
    evuchrkknykkgnDt: string;
}

//-------------------------------- 保有映画ギフト情報取得 --------------------------------//
export interface IInfoArgs {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
}

export interface IEggftInfInfoResult extends IEigagiftCommon {
    /**
     * 映画ギフト有効期限
     */
    eggftykkgnYmd: string;
    /**
     * 映画ギフト残高
     */
    eggftZndk: number;
}

export interface IInfoResult {
    /**
     * 合計残高 ※保有映画ギフト情報が存在しない場合は0をセット
     */
    gkZndk: number;
    /**
     * 保有映画ギフト情報
     */
    eggftInf: IEggftInfInfoResult[];
}

export interface IEggftInfArgs {
    /**
     * 映画ギフトコード（16桁固定）
     */
    eggftCd: string;
    /**
     * 映画ギフトPINコード（4桁固定）
     */
    eggftpinCd: string;
    /**
     * 映画ギフトチャージ金額
     */
    chrgknGk: number;
}

export interface IActivateArgs {
    /**
     * 映画ギフト情報
     */
    eggftInf: IEggftInfArgs[];
}

export interface IEggftInfActivate {
    /**
     * 映画ギフトコード（16桁固定）
     */
    eggftCd: string;
    /**
     * 映画ギフトPINコード（4桁固定）
     */
    eggftpinCd: string;
    /**
     * 映画ギフトチャージ金額
     */
    chrgknGk: number;
    /**
     * 映画ギフト有効期限
     */
    eggftykkgnYmd: string;
    /**
     * 映画ギフトエラー情報
     */
    errInf?: IErrInf[];
}

export interface IActivateResult {
    /**
     * 映画ギフトエラー情報ありフラグ
     */
    errjharFlg: string;
    /**
     * 映画ギフト情報
     */
    eggftInf: IEggftInfActivate[];
}

//******************************* 映画ギフト交換 *******************************//
export interface IExchangeArgs {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
    /**
     * AMCクーポンコード
     */
    amccupnCd: string;
}

export interface IExchangeResult {
    /**
     * チャージ金額
     */
    chrgGk: number;
    /**
     * 映画ギフト有効期限
     */
    eggftykkgnYmd: string;
}

//******************************* 映画ギフト発行 *******************************//
export interface IIssueArgs {
    /**
     * 映画ギフト決済管理番号（16桁固定）
     */
    eggftkssiknrNo: string;
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
    /**
     * 購入者 姓（最大15文字）
     */
    knyshsiNm: string;
    /**
     * 購入者 名（最大15文字）
     */
    knyshmiNm: string;
    /**
     * 購入者メールアドレス（最大128文字）
     */
    knyshMladdr: string;
    /**
     * 購入者市外局番（最大5文字）
     */
    knyshshgikykNo: string;
    /**
     * 購入者市内局番（最大4文字）
     */
    knyshshnikykNo: string;
    /**
     * 購入者加入者番号（最大4文字）
     */
    knyshknyshNo: string;
    /**
     * 販売チャネル区分（2桁固定）
     */
    hmbichnnlTyp: string;
    /**
     * 販売会社コード（6桁固定）
     */
    hmbigishCd: string;
    /**
     * 決済方法区分（00：クレジット）
     */
    kssihhTyp: string;
    /**
     * アクセスID
     */
    accssId: string;
    /**
     * アクセスパスワード
     */
    accssPwd: string;
    /**
     * 決済日時
     */
    trnDt: string;
    /**
     * 仕向先コード
     */
    frwrdCd: string;
    /**
     * 決済承認番号
     */
    apprvNo: string;
    /**
     * トランザクションID
     */
    trnId: string;
    /**
     * チャージ金額
     */
    chrgGk: number;
}

export type IIssueResult = IExchangeResult;

//******************************* 映画ギフト決済管理番号採番 *******************************//
export interface INumberingSettlementNoResult {
    /**
     * 映画ギフト決済管理番号（16桁固定）
     */
    eggftkssiknrNo: string;
}

//******************************* 映画ギフト決済情報仮登録 *******************************//
export interface ITempSettlementRegisterArgs {
    /**
     * 映画ギフト決済管理番号（16桁固定）
     */
    eggftkssiknrNo: string;
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
    /**
     * 購入者 姓（最大15文字）
     */
    knyshsiNm: string;
    /**
     * 購入者 名（最大15文字）
     */
    knyshmiNm: string;
    /**
     * 購入者メールアドレス（最大128文字）
     */
    knyshMladdr: string;
    /**
     * 購入者市外局番（最大5文字）
     */
    knyshshgikykNo: string;
    /**
     * 購入者市内局番（最大4文字）
     */
    knyshshnikykNo: string;
    /**
     * 購入者加入者番号（最大4文字）
     */
    knyshknyshNo: string;
    /**
     * 販売チャネル区分（2桁固定）
     */
    hmbichnnlTyp: string;
    /**
     * 販売会社コード（6桁固定）
     */
    hmbigishCd: string;
    /**
     * 決済方法区分（00：クレジット）
     */
    kssihhTyp: string;
    /**
     * チャージ金額
     */
    chrgGk: number;
}

//******************************* 映画ギフト処理完了メール送信 *******************************//
export interface ISendMailArgs {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
    /**
     * 映画ギフト決済管理番号（16桁固定）
     * ※映画ギフト金額指定チャージ時のみセット
     */
    eggftkssiknrNo?: string;
    /**
     * チャージ金額
     */
    chrgGk: number;
    /**
     * 映画GIFT有効期限（年月日形式 format：yyyyMMdd）
     */
    eggftykkgnYmd: string;
    /**
     * チャージ区分（2桁固定）（00：映画GIFT購入／01：AMCクーポン交換）
     */
    chrgTyp: string;
    /**
     * メールテンプレートコード（5桁固定）（U0021：映画GIFT購入／U0022：AMCクーポン交換）
     */
    mltmpltCd: string;
    /**
     * 購入者 姓（最大15文字）
     * ※映画ギフト金額指定チャージ時のみセット
     */
    knyshsiNm?: string;
    /**
     * 購入者 名（最大15文字）
     * ※映画ギフト金額指定チャージ時のみセット
     */
    knyshmiNm?: string;
    /**
     * 購入者メールアドレス（最大128文字）
     * ※映画ギフト金額指定チャージ時のみセット
     */
    knyshMladdr?: string;
}

//******************************* 映画ギフトチャージ状況取得 *******************************//
export interface IStatusArgs {
    /**
     * 映画ギフト決済管理番号（16桁固定）
     * ※映画ギフト金額指定チャージ時のみセット
     */
    eggftkssiknrNo: string;
}

export interface IStatusResult {
    /**
     * チャージ金額
     */
    chrgGk: number;
    /**
     * 映画ギフト有効期限
     */
    eggftykkgnYmd: string;
}

//******************************** 映画ギフト履歴取得 ********************************//
export interface IHistoryArgs {
    /**
     * 会員コード（8桁固定）
     */
    kiinCd: string;
    /**
     * 取得開始年月（年月形式 format：yyyyMM）
     */
    shtkkishYm?: string;
    /**
     * 取得終了年月（年月形式 format：yyyyMM）
     */
    shtkshryYm?: string;
}

export interface IRrkInf {
    /**
     * 履歴年月日（年月日形式 format：yyyyMMdd）
     */
    rrkYmd: string;
    /**
     * 履歴区分（01：購入／02：コードチャージ／03：交換／04：利用／05：有効期限切れ／06：マニュアル入金／07：マニュアル出金）
     */
    rrkTyp: string;
    /**
     * 履歴内容
     */
    rrkTxt?: string;
    /**
     * 取扱金額
     */
    tratskiknGk?: number;
}

export interface IHistoryResult {
    /**
     * 履歴年月（年月形式 format：yyyyMM）
     */
    rrkYm: string;
    /**
     * 映画ギフト履歴情報
     */
    rrkInf?: IRrkInf[];
}

export type IHistoryResultLst = IHistoryResult[];
