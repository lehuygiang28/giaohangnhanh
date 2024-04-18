export type CalculateExpectedDeliveryTime = {
    from_district_id?: number;
    from_ward_code?: string;
    to_district_id: number;
    to_ward_code: string;

    /**
     * Choose which Sevice ID suitable with your shipping plan (Express, Standard or Saving).
     * Each Service ID has different fee and leadtime.
     *
     * Use API Get service (if not input service_type_id)
     */
    service_id: number;
};

export type CalculateExpectedDeliveryTimeResponse = {
    /**
     * Expected delivery time
     *
     * @type {number}
     */
    leadtime: number;

    /**
     * Order creation date
     *
     * @type {number}
     */
    order_date: number;
};
