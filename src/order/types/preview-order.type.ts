import { RequiredNote } from '../enums/preview-order.enum';
import { ServiceTypeId } from '../../enums/service-type-id.enum';
import { PaymentTypeId } from '../enums/payment-type.enum';
import { ApiPath } from './api-path.type';

export type CategoryType = {
    /**
     * Product category classification
     */
    level1?: string;

    /**
     * Product category classification
     */
    level2?: string;

    /**
     * Product category classification
     */
    level3?: string;
};

export type ItemType = {
    name: string;
    code?: string;
    quantity: number;
    price?: number;
    length?: number;
    weight: number;
    width?: number;
    height?: number;
    category?: CategoryType;
};

export type PreviewOrder = {
    /**
     * Client name. (Customer / Buyer)
     */
    to_name: string;
    /**
     * Client phone number.(Customer / Buyer)
     */
    to_phone: string;
    /**
     * Client address.(Customer / Buyer)
     */
    to_address: string;
    /**
     * Ward Code drop off parcels
     */
    to_ward_code: string;
    /**
     * District ID drop off parcels.
     */
    to_district_id: number;

    /**
     * Contact phone number to return parcels.
     */
    return_phone?: string;
    /**
     * Address return parcels.
     */
    return_address?: string;
    /**
     * District ID return parcels.
     */
    return_district_id?: number | null;
    /**
     * Ward Code return parcels.
     */
    return_ward_code?: string;

    /**
     * External order code managed by logged client [Unique field].
     * @unique
     * @default null
     */
    client_order_code: string | null;
    /**
     * Amount cash to collect.
     * @max 10000000
     * @default 0
     */
    cod_amount?: number;
    /**
     * Content for order
     * @maxLength 2000
     */
    content?: string;

    /**
     * Weight (gram)
     * @max 30000
     */
    weight: number;
    /**
     * Length (cm)
     * @max 150
     */
    length: number;
    /**
     * Width (cm)
     * @max 150
     */
    width: number;
    /**
     * Height (cm)
     * @max 150
     */
    height: number;

    /**
     * The shipper not pickup parcels at shop’s address
     */
    pick_station_id?: number;
    /**
     * Use to declare parcel value. GHN will base on this value for compensation if any unexpected things happen (lost, broken...).
     * @max 5000000
     * @default 0
     */
    insurance_value?: number;
    /**
     * Coupon Code for discount.
     */
    coupon?: string | null;

    /**
     * If not input `service_id`
     */
    service_type_id?: ServiceTypeId | number;
    /**
     * If not input `service_type_id`
     */
    service_id?: number;

    /**
     * Choose who pay shipping fee.
     */
    payment_type_id: PaymentTypeId | number;
    /**
     * Client note for shipper.
     * @example Please call before delivery
     */
    note?: string;
    /**
     * Note shipping order.
     */
    required_note?: RequiredNote | string;

    /**
     * Picking shift
     */
    pick_shift?: number[];

    /**
     * Content for order
     */
    items: ItemType[];
} & ApiPath;

type FeeResponse = {
    /**
     * Main of service fee
     */
    main_service: number;

    /**
     * Insurance value
     */
    insurance: number;

    /**
     * Pickup fee at Station
     */
    station_do: number;

    /**
     * Delivery fee at Station
     */
    station_pu: number;

    /**
     * Fee of Return to ship
     */
    return: number;

    /**
     * Fee of delivery parcel again
     */
    r2s: number;

    /**
     * Coupon Code for discount.
     */
    coupon: number;

    document_return?: number;
    double_check?: number;
    double_check_deliver?: number;
    pick_remote_areas_fee?: number;
    deliver_remote_areas_fee?: number;
    pick_remote_areas_fee_return?: number;
    deliver_remote_areas_fee_return?: number;
    cod_failed_fee?: number;
};

export type PreviewOrderResponse = {
    /**
     * Code orders
     */
    order_code: string;

    /**
     * Sort code
     */
    sort_code: string;

    /**
     * Transportation type
     */
    trans_type: string;

    /**
     * Total fee
     */
    total_fee: number;
    /**
     * Expected delivery time
     */
    expected_delivery_time: Date | string;

    /**
     * Fee
     */
    fee: FeeResponse;

    ward_encode?: string;
    district_encode?: string;
    operation_partner?: string;
};
