/**
 * promotionCode.factory
 */

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
}

/**
 * 仮利用レスポンス
 */
export interface ITempUseResult {
    /**
     * プロモーションコード決済UUID
     */
    uuid: string;
}
