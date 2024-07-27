import { ApiPath } from './api-path.type';

export type OrderInfo = {
    /**
     * GHN Order Code. This is tracking code.
     */
    order_code: string;
} & ApiPath;

export type OrderInfoResponse = {
    _id: string;
    return_name: string;
    return_phone: string;
    return_address: string;
    return_ward_code: string;
    return_district_id: number;
    from_name: string;
    from_phone: string;
    from_address: string;
    from_ward_code: string;
    from_district_id: number;
    deliver_station_id: number;
    to_name: string;
    to_phone: string;
    to_address: string;
    to_ward_code: string;
    to_district_id: number;
    weight: number;
    length: number;
    width: number;
    height: number;
    converted_weight: number;
    service_type_id: number;
    service_id: number;
    payment_type_id: number;
    custom_service_fee: number;
    cod_amount: number;
    cod_collect_date: string | null;
    cod_transfer_date: string | null;
    is_cod_transferred: boolean;
    is_cod_collected: boolean;
    insurance_value: number;
    order_value: number;
    pick_station_id: number;
    client_order_code: string;
    cod_failed_amount: number;
    cod_failed_collect_date: string | null;
    required_note: string;
    content: string;
    note: string;
    employee_note: string;
    coupon: string;
    order_code: string;
    version_no: string;
    updated_ip: string;
    updated_employee: number;
    updated_client: number;
    updated_source: string;
    updated_date: string | Date;
    updated_warehouse: number;
    created_ip: string;
    created_employee: number;
    created_client: number;
    created_source: string;
    created_date: string | Date;
    status: string;
    pick_warehouse_id: number;
    deliver_warehouse_id: number;
    current_warehouse_id: number;
    return_warehouse_id: number;
    next_warehouse_id: number;
    leadtime: string | Date;
    order_date: string | Date;
    soc_id: string;
    finish_date: string;
    tag: string[];
    log: unknown[];
};
