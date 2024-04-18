import { GhnAbstract } from '../ghn.abstract';
import { GhnConfig } from '../types';
import { GhnProvince, GhnDistrict, GhnWard } from './type';
import { resolveUrl } from '../utils';

/**
 * Đối tượng GhnAddress chứa các phương thức để tương tác với API address
 *
 * Có thể sử dụng thông qua đối tượng `Ghn` hoặc khởi tạo trực tiếp từ đối tượng `GhnAddress`
 *
 * @en
 * GhnAddress instance contains methods to interact with address API
 *
 * Can be used through `Ghn` instance or directly initialize from `GhnAddress` instance
 *
 * @example
 * ```ts
 * import { GhnAddress } from 'giaohangnhanh/address';
 *
 * const ghn = new GhnAddress({
 *   token: 'YOUR_GHN_TOKEN', // Change to your token
 *   shopId: 123456, // Change to your shopId
 *   host: 'https://dev-online-gateway.ghn.vn',
 *   testMode: true, // Enable test mode to override host
 * });
 * ```
 */
export class GhnAddress extends GhnAbstract {
    /**
     * Retrieves the list of provinces from the server.
     *
     * @return {Promise<GhnProvince[]>} The list of provinces
     * @see https://api.ghn.vn/home/docs/detail?id=60
     */
    public async getProvinces(): Promise<GhnProvince[]> {
        const getProvincesPath = 'shiip/public-api/master-data/province';
        const response = await this.fetch(resolveUrl(this.globalConfig.host, getProvincesPath));
        const result = (await response.json()) as { data: GhnProvince[]; message: string };
        if (!response.ok) {
            throw new Error(`Failed to calculate shipping fee: ${result.message}`);
        }
        return result.data as GhnProvince[];
    }

    /**
     * Retrieves the districts for a given province ID.
     *
     * @param {number} provinceId - The ID of the province for which to retrieve districts
     * @return {Promise<GhnDistrict[]>} A Promise that resolves to an array of GhnDistrict objects representing the districts
     * @see https://api.ghn.vn/home/docs/detail?id=78
     */
    public async getDistricts(provinceId: number): Promise<GhnDistrict[]> {
        const getDistrictsPath = 'shiip/public-api/master-data/district';
        const response = await this.fetch(resolveUrl(this.globalConfig.host, getDistrictsPath), {
            province_id: provinceId,
        });
        const result = (await response.json()) as { data: GhnDistrict[]; message: string };
        if (!response.ok) {
            throw new Error(`Failed to calculate shipping fee: ${result.message}`);
        }
        return result.data as GhnDistrict[];
    }

    /**
     * Retrieves a list of wards for the given district ID.
     *
     * @param {number} districtId - The ID of the district for which to retrieve wards
     * @return {Promise<GhnWard[]>} A Promise that resolves to an array of GhnWard objects
     * @see https://api.ghn.vn/home/docs/detail?id=61
     */
    public async getWards(districtId: number): Promise<GhnWard[]> {
        const getWardsPath = 'shiip/public-api/master-data/ward';
        const response = await this.fetch(resolveUrl(this.globalConfig.host, getWardsPath), {
            district_id: districtId,
        });
        const result = (await response.json()) as { data: GhnWard[]; message: string };
        if (!response.ok) {
            throw new Error(`Failed to calculate shipping fee: ${result.message}`);
        }
        return result.data as GhnWard[];
    }
}
