import { ServiceTypeId } from '../../enums';
import { PaymentTypeId, RequiredNote } from '../enums';
import { ItemType, PreviewOrderResponse } from './preview-order.type';

export type CreateOrder = {
    /**
     * Client name. (Customer / Buyer)
     */
    to_name: string;
    /**
     * Sender's name
     */
    from_name: string;
    /**
     * Sender's phone
     */
    from_phone: string;
    /**
     * Sender's address
     */
    from_address: string;
    /**
     * Sender's ward code
     */
    from_ward_name: string;
    /**
     * Sender's district name
     */
    from_district_name: string;
    /**
     * Sender's province name
     */
    from_province_name: string;

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
};

export type CreateOrderResponse = PreviewOrderResponse;
