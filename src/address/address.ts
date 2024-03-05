import { GhnAbstract } from '../ghn.abstract';
import { GhnConfig } from '../types';
import { GhnProvince, GhnDistrict, GhnWard } from './type';
import { resolveUrl } from '../utils';

export class GhnAddress extends GhnAbstract {
    public async getProvinces(): Promise<GhnProvince[]> {
        const getProvincesPath = 'shiip/public-api/master-data/province';
        const response = await this.fetch(resolveUrl(this.globalConfig.host, getProvincesPath));
        const result = (await response.json()) as { data: GhnProvince[]; message: string };
        if (!response.ok) {
            throw new Error(`Failed to calculate shipping fee: ${result.message}`);
        }
        return result.data as GhnProvince[];
    }

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
