/**
 * eigagift.factory
 */

export interface IEigagiftCommon {
    /**
     * 映画ギフトコード（16桁固定）
     */
    eggiftCd: string;
    /**
     * 映画ギフトPINコード（4桁固定）
     */
    eggiftpinCd: string;
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
    rymeZndk: number;
    /**
     * 映画ギフト利用後残高
     */
    rygZndk: number;
    /**
     * 映画ギフトエラー情報
     */
    errInf: IErrInf[];
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
     * 会員コード（8桁固定）
     */
    kiinCd: string;
    /**
     * eバウチャーコード
     */
    evuchrCd: string;
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
