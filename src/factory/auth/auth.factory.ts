/**
 * auth.factory
 */

export interface ITempRegistArgs {
    /**
     * 会員メールアドレス
     */
    kiinMladdr: string;
    /**
     * 会員登録前決済管理番号
     */
    kiintrkmekssiknrNo?: string;
}

export interface ITempRegistResult {
    /**
     * 会員コード
     */
    kiinCd: string;
}
