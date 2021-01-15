/**
 * campaign.factory
 */

export interface IEntryArgs {
    /**
     * キャンペーン管理番号（12桁）
     */
    cmpgnknrNo: string;
    /**
     * 会員コード
     */
    kiinCd: string;
}

export interface IDetailsResult {
    /**
     * キャンペーンステータス区分
     */
    cmpgnsttsTyp: string;
    /**
     * バナーURL
     */
    bnnrUrl: string;
    /**
     * エントリー区分（01:ログイン方式／02:個人情報入力方式／03:購入番号認証方式）
     */
    entryTyp: String;
}

export interface IInfoResult {
    /**
     * キャンペーンステータス区分（00:実施中／01:受付期間外（受付終了））
     */
    cmpgnsttsTyp: string;
    /**
     * エントリー済フラグ（0:未エントリー／1:エントリー済）
     */
    entryzmFlg: string;
    /**
     * インセンティブ区分（01:ムビチケポイント／02:プロモーションコード／03:映画GIFT／04:ムビチケ前売券GIFT／05:その他）
     */
    incntvTyp: string;
    /**
     * バナーURL
     */
    bnnrUrl: string;
    /**
     * バナーリンク先URL
     */
    bnnrlnkUrl: string;
    /**
     * エントリー受付終了日時
     */
    uktskshryDt: string;
    /**
     * エントリー年月日
     */
    entryYmd: string;
    /**
     * ソート用エントリー受付終了日時
     */
    uktskshrysrtDt: string;
    /**
     * ソート用エントリー年月日
     */
    entrysrtYmd: string;
}
