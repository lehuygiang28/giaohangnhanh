import type { ApiPath } from './api-path.type';

export type CancelOrder = {
    /**
     * Danh sách mã đơn hàng cần hủy, đây là mã tracking code.
     *
     * @type {string[]} List of order codes to be canceled, this is tracking code.
     * @see https://api.ghn.vn/home/docs/detail?id=73
     */
    orderCodes: string[];
} & ApiPath;

export type CancelOrderResponse = {
    /**
     * Mã đơn hàng
     *
     * @type {string}
     */
    order_code: string;

    /**
     * Thông báo kết quả
     *
     * @type {string}
     */
    message: string;

    /**
     * Kết quả
     *
     * @type {boolean}
     */
    result: boolean;
};
