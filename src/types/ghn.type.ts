export type GhnConfig = {
    /**
     * @required
     */
    token: string;
    /**
     * @required
     */
    shopId: number;
    /**
     * Mặc định là môi trường dev
     */
    host: string;
    /**
     * Mặc định là môi trường dev
     */
    trackingHost?: string;
    testMode?: boolean;
};
