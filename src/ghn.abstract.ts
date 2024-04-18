import { GHN_DEV_API_URL } from './ghn.constant';
import { GhnConfig } from './types';

export abstract class GhnAbstract {
    protected globalConfig: GhnConfig;

    constructor(config: GhnConfig) {
        if (!config.token) {
            throw new Error('Invalid config, missing token');
        }

        if (!config.shopId) {
            throw new Error('Invalid config, missing shopId');
        }

        if (config.testMode) {
            config.host = GHN_DEV_API_URL;
        }

        if (!config?.host) {
            throw new Error('Invalid config, missing host');
        }

        this.globalConfig = config;
    }

    protected fetch(url: string | URL | Request, data?: any, method?: 'POST' | 'GET') {
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
