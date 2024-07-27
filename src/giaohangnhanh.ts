import { GhnAbstract } from './ghn.abstract';
import type { GhnConfig } from './types';
import { GhnAddress } from './address';
import { CalculateFee } from './calculate-fee';
import { Order } from './order';
import { resolveUrl } from './utils';

/**
 * Đối tượng Ghn chứa các đối tượng con như address, calculateFee, ...
 *
 * @en
 * Ghn instance contains sub-instances like address, calculateFee, ...
 *
 * @example
 *
 * ```ts
 * import { Ghn } from 'giaohangnhanh';
 *
 * const ghn = new Ghn({
 *   token: 'YOUR_GHN_TOKEN', // Change to your token
 *   shopId: 123456, // Change to your shopId
 *   host: 'https://dev-online-gateway.ghn.vn',
 *   testMode: true, // Enable test mode to override host
 * });
 * ```
 * @see https://api.ghn.vn/home/docs/detail
 */
export class Ghn extends GhnAbstract {
    constructor(config: GhnConfig) {
        super(config);
        this.address = new GhnAddress(config);
        this.calculateFee = new CalculateFee(config);
        this.order = new Order(config);
    }

    /**
     * Đối tượng address để tương tác với API address
     *
     * @en
     * Address instance to interact with address API
     *
     * @example
     *
     * ```ts
     * const provinces = await ghn.address.getProvinces();
     * ```
     *
     */
    public address: GhnAddress;

    /**
     * Đối tượng calculateFee để tương tác với API calculateFee
     *
     * @en
     * CalculateFee instance to interact with calculateFee API
     *
     * @example
     *
     * ```ts
     * const fromDistrictId = 123;
     * const toDistrictId = 456;
     * const service = await ghn.calculateFee.getServiceList(fromDistrictId, toDistrictId);
     * ```
     */
    public calculateFee: CalculateFee;

    /**
     * Đối tượng order để tương tác với API order
     *
     * @en
     * Order instance to interact with order API
     */
    public order: Order;

    /**
     *
     * @experimental Used for sending a request to GHN that is currently not implemented yet
     * @param path Path of the API
     * @param data Object data to send
     * @returns Response
     */
    public async sendRequest(path: string, data: unknown): Promise<unknown> {
        const response = await this.fetch(resolveUrl(this.globalConfig.host, path), data);
        const result = (await response.json()) as { data: unknown; message: string };

        if (!response.ok) {
            throw new Error(`Failed to request '${path}': ${result.message}`);
        }
        return result.data;
    }
}
