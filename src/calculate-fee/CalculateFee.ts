import { GhnAbstract } from '../ghn.abstract';
import { resolveUrl } from '../utils';
import type {
    CalculateShippingFee,
    CalculateShippingFeeResponse,
    GetServiceResponse,
} from './type';

/**
 * Đối tượng CalculateFee chứa các phương thức để tương tác với API calculateFee
 *
 * Có thể sử dụng thông qua đối tượng `Ghn` hoặc khởi tạo trực tiếp từ đối tượng `CalculateFee`
 *
 * @en
 * CalculateFee instance contains methods to interact with calculateFee API
 *
 * Can be used through `Ghn` instance or directly initialize from `CalculateFee` instance
 *
 * @example
 * ```ts
 * import { CalculateFee } from 'giaohangnhanh/calculate-fee';
 *
 * const ghn = new CalculateFee({
 *   token: 'YOUR_GHN_TOKEN', // Change to your token
 *   shopId: 123456, // Change to your shopId
 *   host: 'https://dev-online-gateway.ghn.vn',
 *   testMode: true, // Enable test mode to override host
 * });
 * ```
 *
 *
 */
export class CalculateFee extends GhnAbstract {
    /**
     * Get the list of available services for shipping orders.
     *
     * @param {number} fromDistrictId - the ID of the district where the shipment will be sent from
     * @param {number} toDistrictId - the ID of the district where the shipment will be sent to
     * @return {GetServiceResponse[]} the list of available services for shipping orders
     * @see https://api.ghn.vn/home/docs/detail?id=77
     */
    public async getServiceList(
        fromDistrictId: number,
        toDistrictId: number,
    ): Promise<GetServiceResponse[]> {
        const getServiceListPath = 'shiip/public-api/v2/shipping-order/available-services';
        const response = await this.fetch(resolveUrl(this.globalConfig.host, getServiceListPath), {
            shop_id: this.globalConfig.shopId,
            from_district: fromDistrictId,
            to_district: toDistrictId,
        });
        const result = (await response.json()) as { data: GetServiceResponse[]; message: string };
        if (!response.ok) {
            throw new Error(`Failed to get service list: ${result.message}`);
        }
        return result.data as GetServiceResponse[];
    }

    /**
     * Calculate the shipping fee based on the provided ship data.
     *
     * @param {CalculateShippingFee} shipData - the data used for calculating the shipping fee
     * @return {Promise<CalculateShippingFeeResponse>} the calculated shipping fee response
     * @see https://api.ghn.vn/home/docs/detail?id=76
     */
    public async calculateShippingFee(
        shipData: CalculateShippingFee,
    ): Promise<CalculateShippingFeeResponse> {
        const calculateFeePath = 'shiip/public-api/v2/shipping-order/fee';
        const response = await this.fetch(
            resolveUrl(this.globalConfig.host, calculateFeePath),
            shipData,
        );
        const result = (await response.json()) as {
            data: CalculateShippingFeeResponse;
            message: string;
        };
        if (!response.ok) {
            throw new Error(`Failed to calculate shipping fee: ${result.message}`);
        }
        return result.data;
    }
}
