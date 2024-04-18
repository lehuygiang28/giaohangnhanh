import { GhnAbstract } from '../ghn.abstract';
import { resolveUrl } from '../utils';
import {
    CalculateExpectedDeliveryTime,
    CalculateExpectedDeliveryTimeResponse,
} from './types/calculate-expected-delivery-time.type';

/**
 * Đối tượng Order chứa các phương thức để tương tác với API Order
 *
 * Có thể sử dụng thông qua đối tượng `Ghn` hoặc khởi tạo trực tiếp từ đối tượng `Order`
 *
 * @en
 * Order instance contains methods to interact with Order API
 *
 * Can be used through `Ghn` instance or directly initialize from `Order` instance
 *
 * @example
 * ```ts
 * import { Order } from 'giaohangnhanh/order';
 *
 * const ghnOrder = new Order({
 *   token: 'YOUR_GHN_TOKEN', // Change to your token
 *   shopId: 123456, // Change to your shopId
 *   host: 'https://dev-online-gateway.ghn.vn',
 *   testMode: true, // Enable test mode to override host
 * });
 * ```
 *
 *
 */
export class Order extends GhnAbstract {
    /**
     * Tính thời gian dự kiến giao hàng
     *
     * @en Calculate the expected delivery time
     *
     * @param {CalculateExpectedDeliveryTime} payload
     * @returns {Promise<CalculateExpectedDeliveryTimeResponse>}
     * @see https://api.ghn.vn/home/docs/detail?id=52
     */
    public async calculateExpectedDeliveryTime(
        payload: CalculateExpectedDeliveryTime,
    ): Promise<CalculateExpectedDeliveryTimeResponse> {
        if (
            (payload.from_district_id && !payload.from_ward_code) ||
            (!payload.from_district_id && payload.from_ward_code)
        ) {
            throw new Error(
                `Both 'from_district_id' and 'from_ward_code' must be provided together.`,
            );
        }

        const apiPath = `shiip/public-api/v2/shipping-order/leadtime`;

        const response = await this.fetch(resolveUrl(this.globalConfig.host, apiPath), {
            ...payload,
            from_district_id: payload?.from_district_id,
        });
        const result = (await response.json()) as {
            data: unknown;
            message: string;
        };
        if (!response.ok) {
            throw new Error(`Failed to get service list: ${result.message}`);
        }
        return result.data as CalculateExpectedDeliveryTimeResponse;
    }
}
