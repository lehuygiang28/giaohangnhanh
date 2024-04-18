# giaohangnhanh

<div style="text-align: center;">
    <h5>
        <a href="./README.md">VI</a>
        |
        <a href="./README_en-US.md">EN</a>
    </h5>
</div>
<br/>

<strong>Thư viện mã nguồn mở hỗ trợ quản lý giao hàng với [giaohangnhanh (ghn)](https://ghn.vn).</strong>

Tài liệu từ Ghn: [https://api.ghn.vn/home/docs/detail](https://api.ghn.vn/home/docs/detail)

## Cài đặt

Cài đặt `giaohangnhanh` với `npm`:

```bash
npm install giaohangnhanh
```

Cài đặt `giaohangnhanh` với `yarn`:

```bash
yarn add giaohangnhanh
```

Cài đặt `giaohangnhanh` với `pnpm`:

```bash
pnpm add giaohangnhanh
```

## Sử dụng

#### Các phương thức

<table>
    <thead>
        <tr>
            <th>Đối tượng</th>
            <th>Phương thức</th>
            <th>Mô Tả</th>
            <th>Trạng thái</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="3"><code>address</code></td>
            <td><code>getProvinces()</code></td>
            <td>Truy vấn tỉnh/thành phố</td>
            <td style="text-align:center">✅</td>
        </tr>
        <tr>
            <td><code>getDistricts()</code></td>
            <td>Truy vấn quận/huyện</td>
            <td style="text-align:center">✅</td>
        </tr>
        <tr>
            <td><code>getWards()</code></td>
            <td>Truy vấn phường/xã</td>
            <td style="text-align:center">✅</td>
        </tr>
        <tr>
            <td rowspan="2"><code>calculateFee</code></td>
            <td><code>getServiceList()</code></td>
            <td>Truy vấn danh sách dịch vụ có sẵn dựa vào địa chỉ giao và nhận</td>
            <td style="text-align:center">✅</td>
        </tr>
        <tr>
            <td><code>calculateShippingFee()</code></td>
            <td>Truy vấn phí giao hàng</td>
            <td style="text-align:center">✅</td>
        </tr>
        <tr>
            <td rowspan="3"><code>order</code></td>
            <td><code>calculateExpectedDeliveryTime()</code></td>
            <td>Dự kiến thời gian giao hàng</td>
            <td style="text-align:center">✅</td>
        </tr>
        <tr>
            <td><code>pickShift()</code></td>
            <td>Danh sách ca lấy đơn hàng</td>
            <td style="text-align:center">✅</td>
        </tr>
        <tr>
            <td><code>previewOrder()</code></td>
            <td>Xem trước thông tin đơn hàng</td>
            <td style="text-align:center">✅</td>
        </tr>
    </tbody>
</table>

_Ghi chú:_

- Biểu tượng ✅ cho biết công việc đã được hoàn thành.
- Biểu tượng 📝 cho biết công việc cần được thực hiện.
- Biểu tượng ❗ cho biết công việc cần sự giúp đỡ.

#### Code tham khảo: <a href="https://github.com/lehuygiang28/giaohangnhanh/blob/HEAD/example/index.ts" target="_blank">Bấm vào đây</a>

## Contribution

<a href="https://github.com/lehuygiang28/regex-vietnamese/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=lehuygiang28/giaohangnhanh" />
</a>
