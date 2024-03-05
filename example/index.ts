import { Ghn } from '../src/index';

async function main() {
    // Khởi tạo đối tượng Ghn
    const ghn = new Ghn({
        token: 'YOUR_GHN_TOKEN', // Thay bằng token của bạn
        shopId: 123456, // Thay bằng shopId của bạn
        host: 'https://dev-online-gateway.ghn.vn',
        testMode: true, // Bật chế độ test để ghi đè host
    });

    // Lấy tỉnh đầu tiên trong danh sách
    const province = (await ghn.address.getProvinces())[0];

    // Lấy quận đầu tiên trong danh sách
    const district = (await ghn.address.getDistricts(province.ProvinceID))[0];

    // Lấy phường đầu tiên trong danh sách
    const ward = (await ghn.address.getWards(district.DistrictID))[0];

    // Lấy dịch vụ vận chuyển đầu tiên trong danh sách dịch vụ có sẵn
    const service = (
        await ghn.calculateFee.getServiceList(district.DistrictID, district.DistrictID)
    )[0];

    // Tính phí vận chuyển
    const fee = await ghn.calculateFee.calculateShippingFee({
        to_district_id: district.DistrictID,
        to_ward_code: ward.WardCode,
        height: 10,
        weight: 1000,
        length: 10,
        width: 10,
        service_type_id: service.service_type_id,
    });

    console.log(fee);
}

main();
