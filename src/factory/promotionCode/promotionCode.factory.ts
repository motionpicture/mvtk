/**
 * promotionCode.factory
 */

 /**
  * 会員保有コード取得パラメータ
  */
export interface IOwnedArgs {
    /**
     * 会員コード（8桁固定）
     */
    kiin_cd: string;
}

/**
 * 会員保有コード取得レスポンス
 */
export interface IOwnedResult {
    /**
     * プロモーションコード
     */
    prmtn_cd: string;

    /**
     * プロモーションコード内容
     */
    prmtncd_txt: string;

    /**
     * プロモーションコード利用条件
     */
    ryjkn_txt: string;

    /**
     * 作品指定フラグ
     */
    skhnsti_flg: string;

    /**
     * 対象作品情報（作品指定フラグが1の場合のみ）
     */
    skhn_inf: ISkhnInf[] | null;

    /**
     * 割引記述
     */
    wrbk_dspt: string;

    /**
     * 有効期限年月日
     */
    ykkgn_ymd: string;

    /**
     * 有効期限記述（有効期限が残り7日以下の場合のみ）
     */
    ykkgn_dspt: string | null;

    /**
     * 利用済フラグ
     */
    ryzm_flg: string | null;

    /**
     * 利用年月日（利用済フラグが1の場合のみ）
     */
    ry_ymd: string | null;

    /**
     * 最新フラグ（コードが登録されて14日以内の場合のみ）
     */
    sisn_flg: string | null;
}

/**
 * 対象作品情報
 */
export interface ISkhnInf {
    /**
     * 作品コード
     */
    skhn_cd: string;

    /**
     * 作品名称"
     */
    skhn_nm: string;
}

/**
 * 会員保有コード数取得パラメータ
 */
export type IOwnedCountArgs = IOwnedArgs;

/**
 * 会員保有コード数取得レスポンス
 */
export interface IOwnedCountResult {
    /**
     * 保有コード数
     */
    hjcd_num: number;

    /**
     * 有効期限切れ間近のコード数
     */
    ykkgngrmjk_num: number;
}

/**
 * 登録パラメータ
 */
export interface IRegisterArgs {
    /**
     * 会員コード（8桁固定）
     */
    kiin_cd: string;

    /**
     * プロモーションコード（14桁固定）
     */
    prmtn_cd: string;
}

/**
 * 割引区分（00：円／01：％）
 */
export enum wrbkTyp {
    YEN = '00',
    RATE = '01'
}

/**
 * 入力コード検証パラメータ
 */
export interface IValidationArgs {
    /**
     * プロモーションコード
     */
    prmtncd_cd: string;

    /**
     * 会員コード（8桁固定）
     */
    kiin_cd?: string;

    /**
     * 作品コード（6桁固定）
     */
    skhn_cd: string;

    /**
     * サイト識別コード（外部遷移元パラメータ）
     */
    stshkbts_cd?: string;

    /**
     * 販売チャネル区分（2桁固定）
     */
    hmbichnnl_typ?: string;

    /**
     * 鑑賞券管理番号（8桁固定）
     */
    knshknknr_no: string;

    /**
     * 鑑賞券情報
     */
    knshkn_inf: IKnshknInf[];
}

/**
 * 鑑賞券情報
 */
export interface IKnshknInf {
    /**
     * 鑑賞券管理明細番号（2桁固定）
     */
    knshknknrmisi_no: string;

    /**
     * 券種区分（2桁固定）
     */
    knsh_typ: string;

    /**
     * 購入枚数
     */
    knymi_num: number;

    /**
     * 鑑賞券販売単価
     */
    knshknhmbi_unip: number;
}

/**
 * 入力コード検証レスポンス
 */
export interface IValidationResult {
    /**
     * プロモーションコード
     */
    prmtncd_cd: string;

    /**
     * プロモーションコード内容
     */
    prmtncd_txt: string;

    /**
     * 割引額（円）
     */
    wrbk_gk: number;

    /**
     * 割引記述
     */
    wrbk_dspt: string;

    /**
     * 仮使用回数
     */
    krsyki_num: number;
}

/**
 * 利用可能コード一覧パラメータ
 */
export interface IAvailableArgs {
    /**
     * 会員コード（8桁固定）
     */
    kiin_cd: string;

    /**
     * 作品コード（6桁固定）
     */
    skhn_cd: string;

    /**
     * 鑑賞券管理番号（8桁固定）
     */
    knshknknr_no: string;

    /**
     * 鑑賞券情報
     */
    knshkn_inf: IKnshknInf[];
}

/**
 * 利用可能コード一覧レスポンス
 */
export interface IAvailableResult {
    /**
     * プロモーションコード
     */
    prmtncd_cd: string;

    /**
     * プロモーションコード内容
     */
    prmtncd_txt: string;
    /**
     * 割引区分（00：円／01：％）
     */
    wrbk_typ: wrbkTyp;

    /**
     * 割引数
     */
    wrbk_num: number;

    /**
     * 割引記述
     */
    wrbk_dspt: string;

    /**
     * 有効期限年月日
     */
    ykkgn_ymd: string;

    /**
     * 有効期限記述（有効期限が残り7日以下の場合のみ）
     */
    ykkgn_dspt: string | null;
}

/**
 * 仮利用パラメータ
 */
export interface ITempUseArgs {
    /**
     * プロモーションコード（14桁固定）
     */
    prmtn_cd: string;

    /**
     * 会員コード（8桁固定）
     */
    kiin_cd?: string;

    /**
     * 仮使用回数
     */
    krsyki_num: number;
}

/**
 * 仮利用レスポンス
 */
export interface ITempUseResult {
    /**
     * プロモーションコード決済UUID（仮使用回数が2以上の場合はカンマ区切りとなる）
     */
    uuid: string;
}

/**
 * 仮利用解除パラメータ
 */
export type ITempUseCancelArgs = ITempUseResult;

 /**
  * 利用パラメータ
  */
export type IUseArgs = ITempUseResult;
