import { GhnAbstract } from '../ghn.abstract';
import { resolveUrl } from '../utils';
import {
    CalculateExpectedDeliveryTime,
    CalculateExpectedDeliveryTimeResponse,
    PickShiftResponse,
    PreviewOrder,
    PreviewOrderResponse,
    CreateOrder,
    CreateOrderResponse,
    OrderInfo,
    OrderInfoResponse,
} from './types';

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

        const response = await this.fetch(resolveUrl(this.globalConfig.host, apiPath), payload);
        const result = (await response.json()) as {
            data: unknown;
            message: string;
        };
        if (!response.ok) {
            throw new Error(`Failed to calculate expected delivery time: ${result.message}`);
        }
        return result.data as CalculateExpectedDeliveryTimeResponse;
    }

    /**
     * Lấy danh sách ca lấy hàng
     *
     * @en Get Pick shift in order
     *
     * @returns {Promise<PickShiftResponse[]>}
     * @see https://api.ghn.vn/home/docs/detail?id=114
     */
    public async pickShift(): Promise<PickShiftResponse[]> {
        const pickShiftPath = `shiip/public-api/v2/shift/date`;

        const response = await this.fetch(resolveUrl(this.globalConfig.host, pickShiftPath));
        const result = (await response.json()) as { data: unknown; message: string };

        if (!response.ok) {
            throw new Error(`Failed to get pick shift list: ${result.message}`);
        }
        return result.data as PickShiftResponse[];
    }

    /**
     * Xem trước thông tin đơn hàng
     *
     * @en Helps preview order information without creating an order
     *
     * @param {PreviewOrder} payload
     * @returns {Promise<PreviewOrderResponse>}
     * @see https://api.ghn.vn/home/docs/detail?id=81
     */
    public async previewOrder(payload: PreviewOrder): Promise<PreviewOrderResponse> {
        if (!payload?.service_id && !payload?.service_type_id) {
            throw new Error(`At least one of 'service_id' or 'service_type_id' must be provided.`);
        }

        const apiPath = `shiip/public-api/v2/shipping-order/preview`;
        const response = await this.fetch(resolveUrl(this.globalConfig.host, apiPath), payload);
        const result = (await response.json()) as { data: unknown; message: string };
        if (!response.ok) {
            throw new Error(`Failed to get preview order info: ${result.message}`);
        }

        return result.data as PreviewOrderResponse;
    }

    /**
     * Tự động gửi thông tin đơn hàng như trọng lượng, địa chỉ, số điện thoại và nhiều hơn nữa đến hệ thống GHN.
     * GHN sẽ xử lý thông tin này và bắt đầu việc vận chuyển
     *
     * @en Automatic send order information such as weight, address, phone number and many more to GHN system.
     * GHN will process these information and start the shipment
     *
     * @param {CreateOrder} payload
     * @returns {Promise<CreateOrderResponse>}
     * @see https://api.ghn.vn/home/docs/detail?id=81
     */
    public async createOrder(payload: CreateOrder): Promise<CreateOrderResponse> {
        if (!payload?.service_id && !payload?.service_type_id) {
            throw new Error(`At least one of 'service_id' or 'service_type_id' must be provided.`);
        }

        const apiPath = `shiip/public-api/v2/shipping-order/create`;
        const response = await this.fetch(resolveUrl(this.globalConfig.host, apiPath), payload);
        const result = (await response.json()) as { data: unknown; message: string };
        if (!response.ok) {
            throw new Error(`Failed to create order: ${result.message}`);
        }

        return result.data as CreateOrderResponse;
    }

    /**
     * Lấy thông tin chi tiết đơn hàng
     *
     * @en Help you get all information of a order. You can know current status or the reason which make the shipment failed
     *
     * @param param0
     * @returns
     * @see https://api.ghn.vn/home/docs/detail?id=66
     */
    public async orderInfo({ order_code }: OrderInfo): Promise<OrderInfoResponse> {
        const apiPath = `shiip/public-api/v2/shipping-order/detail`;
        const response = await this.fetch(resolveUrl(this.globalConfig.host, apiPath), {
            order_code,
        });
        const result = (await response.json()) as { data: unknown; message: string };
        if (!response.ok) {
            throw new Error(`Failed to get order info: ${result.message}`);
        }
        return result.data as OrderInfoResponse;
    }
}
