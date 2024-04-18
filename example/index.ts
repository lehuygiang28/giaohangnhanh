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
        service_type_id: service.service_type_id,

        // Thông tin sản phẩm cần vận chuyển
        // Sau đây chỉ là thông tin mẫu, bạn cần thay đổi thông tin sản phẩm cần vận chuyển
        height: 10,
        weight: 1000,
        length: 10,
        width: 10,
    });

    console.log(fee);

    // Tính thời gian dự kiến giao hang
    const expected = await ghn.order.calculateExpectedDeliveryTime({
        service_id: 53320,
        to_district_id: 1538,
        to_ward_code: '440113',
        from_district_id: 1805,
        from_ward_code: '1B2320',
    });
    console.log(expected);

    // Lấy danh sách ca lấy hãng
    const shift = await ghn.order.pickShift();
    console.log(shift);

    // Xem trước đơn hàng
    const previewOrder = await ghn.order.previewOrder({
        payment_type_id: 2,
        note: 'Tintest 123',
        required_note: 'KHONGCHOXEMHANG',
        return_phone: '0332190458',
        return_address: '39 NTT',
        return_district_id: null,
        return_ward_code: '',
        client_order_code: '',
        to_name: 'TinTest124',
        to_phone: '0987654321',
        to_address: '72 Thành Thái, Phường 14, Quận 10, Hồ Chí Minh, Vietnam',
        to_ward_code: '20107',
        to_district_id: 1442,
        cod_amount: 200000,
        content: 'ABCDEF',
        weight: 200,
        length: 15,
        width: 15,
        height: 15,
        pick_station_id: 0,
        insurance_value: 2000000,
        service_id: 0,
        service_type_id: 2,
        coupon: null,
        pick_shift: [2],
        items: [
            {
                name: 'Áo Polo',
                code: 'Polo123',
                quantity: 1,
                price: 200000,
                length: 12,
                width: 12,
                height: 12,
                weight: 200,
                category: {
                    level1: 'Áo',
                },
            },
        ],
    });
    console.log(previewOrder);
}

main();
