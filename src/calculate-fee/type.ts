export type GetServiceResponse = {
    service_id: number;
    short_name: string;
    service_type_id: number;
    config_fee_id: string;
    extra_cost_id: string;
    standard_config_fee_id: string;
    standard_extra_cost_id: string;
};

export type ItemShipping = {
    name: string;
    code?: string;
    quantity: number;
    height: number;
    weight: number;
    width: number;
    length: number;
};

export type CalculateShippingFee = {
    /**
     * District ID drop off parcels
     */
    to_district_id: number;

    /**
     * Ward code drop off parcels
     */
    to_ward_code: string;

    /**
     * Call API SERVICE to show service.
     *
     * If not input `service_type_id`
     */
    service_id?: number;

    /**
     * Call API SERVICE to show service.
     *
     * If not input `service_id`
     */
    service_type_id?: number;

    /**
     *  District ID pick up parcels.
     *
     *  If you not input , will get information from shopid
     */
    from_district_id?: number;

    /**
     * Ward code pick up parcels.
     *
     * If you not input , will get information from shopid
     */
    from_ward_code?: string;

    /**
     * @unit (cm)
     */
    height: number;

    /**
     * @unit (gram)
     */
    weight: number;

    /**
     * @unit (cm)
     */
    width: number;

    /**
     * @unit (cm)
     */
    length: number;

    /**
     * Use to declare parcel value. GHN will base on this value for compensation if any unexpected things happen (lost, broken...).
     *
     * Maximum 5.000.000 - Default 0
     */
    insurance_value?: number;

    /**
     * Coupon Code for discount.
     */
    coupon?: string;

    /**
     * Value of collect money when delivery fail.
     */
    cod_failed_amount?: number;

    /**
     * Amount cash to collect.
     *
     * Maximum 5.000.000 - Default 0
     */
    cod_value?: number;

    items?: ItemShipping[];
};

export type CalculateShippingFeeResponse = {
    total: number;
    service_fee: number;
    insurance_fee: number;
    pick_station_fee: number;
    coupon_value: number;
    r2s_fee: number;
    document_return: number;
    double_check: number;
    cod_fee: number;
    pick_remote_areas_fee: number;
    deliver_remote_areas_fee: number;
    cod_failed_fee: number;
};
