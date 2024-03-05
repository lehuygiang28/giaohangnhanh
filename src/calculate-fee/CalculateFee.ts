import { GhnAbstract } from '../ghn.abstract';
import { resolveUrl } from '../utils';
import { CalculateShippingFee, CalculateShippingFeeResponse, GetServiceResponse } from './type';

export class CalculateFee extends GhnAbstract {
    public async getServiceList(fromDistrictId: number, toDistrictId: number) {
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

    public async calculateShippingFee(
        shipData: CalculateShippingFee,
    ): Promise<CalculateShippingFeeResponse> {
        const calculateFeePath = 'shiip/public-api/v2/shipping-order/fee';
        const response = await this.fetch(
            resolveUrl(this.globalConfig.host, calculateFeePath),
            shipData,
        );
        const result: any = await response.json();
        if (!response.ok) {
            throw new Error(`Failed to calculate shipping fee: ${result.message}`);
        }
        return result.data as CalculateShippingFeeResponse;
    }
}
