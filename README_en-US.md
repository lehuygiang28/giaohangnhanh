# giaohangnhanh

<div style="text-align: center;">
    <h5>
        <a href="./README.md">VI</a>
        |
        <a href="./README_en-US.md">EN</a>
    </h5>
</div>
<br/>

<strong>Open source library to support delivery management with [giaohangnhanh (ghn)](https://ghn.vn).</strong>

Documentation from Ghn: [https://api.ghn.vn/home/docs/detail](https://api.ghn.vn/home/docs/detail)

## Installation:

Install `giaohangnhanh` with `npm`:

```bash
npm install giaohangnhanh
```

Install `giaohangnhanh` with `yarn`:

```bash
yarn add giaohangnhanh
```

Install `giaohangnhanh` with `pnpm`:

```bash
pnpm add giaohangnhanh
```

## Usage:

### Methods:

<table>
    <thead>
        <tr>
            <th>Objects</th>
            <th>Methods</th>
            <th>Description</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="3"><code>address</code></td>
            <td><code>getProvinces()</code></td>
            <td>Get provinces data</td>
            <td style="text-align:center">✅</td>
        </tr>
        <tr>
            <td><code>getDistricts()</code></td>
            <td>Get districts data</td>
            <td style="text-align:center">✅</td>
        </tr>
        <tr>
            <td><code>getWards()</code></td>
            <td>Get wards data</td>
            <td style="text-align:center">✅</td>
        </tr>
        <tr>
            <td rowspan="2"><code>calculateFee</code></td>
            <td><code>getServiceList()</code></td>
            <td>Get list of available services from district pick up items and to district drop off items</td>
            <td style="text-align:center">✅</td>
        </tr>
        <tr>
            <td><code>calculateShippingFee()</code></td>
            <td>Get the shipping fee and provide to buyer before create shipping order</td>
            <td style="text-align:center">✅</td>
        </tr>
    </tbody>
</table>

_Note:_

-   The ✅ icon indicates that the task has been completed.
-   The 📝 icon indicates that the task is todo.
-   The ❗ icon indicates that the task needs help.

#### Code tham khảo: <a href="https://github.com/lehuygiang28/giaohangnhanh/blob/HEAD/example/index.ts" target="_blank">Bấm vào đây</a>

## Contribution

<a href="https://github.com/lehuygiang28/regex-vietnamese/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=lehuygiang28/giaohangnhanh" />
</a>
