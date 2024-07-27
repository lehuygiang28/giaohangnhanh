import { GHN_DEV_API_URL, GHN_TRACKING_DEV_API_URL } from './ghn.constant';
import type { GhnConfig } from './types';

export abstract class GhnAbstract {
    protected globalConfig: GhnConfig;

    constructor({
        host = GHN_DEV_API_URL,
        trackingHost = GHN_TRACKING_DEV_API_URL,
        ...config
    }: GhnConfig) {
        if (!config?.token) {
            throw new Error(`Invalid config, missing 'token'`);
        }

        if (!config?.shopId) {
            throw new Error(`Invalid config, missing 'shopId'`);
        }

        if (config?.testMode) {
            host = GHN_DEV_API_URL;
            trackingHost = GHN_TRACKING_DEV_API_URL;
        }

        this.globalConfig = { ...config, host, trackingHost };
    }

    protected fetch(url: string | URL | Request, data?: unknown, method?: 'POST' | 'GET') {
        return fetch(url, {
            method: method ?? 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: this.globalConfig.token,
                ShopId: `${this.globalConfig.shopId}`,
            },
            body: JSON.stringify(data),
        });
    }
}
