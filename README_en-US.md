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

## Installation

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
pnpm install giaohangnhanh
```

## Usage

### Initialize

```ts
import { Ghn } from 'giaohangnhanh';

const ghn = new Ghn({
    token: 'YOUR_GHN_TOKEN', // Replace with your token
    shopId: 123456, // Replace with your shopId
    host: 'https://dev-online-gateway.ghn.vn',
    trackingHost: 'https://tracking.ghn.dev/',
    testMode: true, // Enable test mode to override host to sandbox environment
});
```

### Methods

<table>
    <thead>
        <tr>
            <th>Instances</th>
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
        <tr>
            <td rowspan="7"><code>order</code></td>
            <td><code>calculateExpectedDeliveryTime()</code></td>
            <td>Calculate the expected delivery time</td>
            <td style="text-align:center">✅</td>
        </tr>
        <tr>
            <td><code>pickShift()</code></td>
            <td>Get Pick shift in order</td>
            <td style="text-align:center">✅</td>
        </tr>
        <tr>
            <td><code>previewOrder()</code></td>
            <td>Helps preview order information without creating an order</td>
            <td style="text-align:center">✅</td>
        </tr>
        <tr>
            <td><code>createOrder()</code></td>
            <td>Create order</td>
            <td style="text-align:center">✅</td>
        </tr>
        <tr>
            <td><code>orderInfo()</code></td>
            <td>Get all information of a order</td>
            <td style="text-align:center">✅</td>
        </tr>
        <tr>
            <td><code>cancelOrder()</code></td>
            <td>Cancel order</td>
            <td style="text-align:center">✅</td>
        </tr>
        <tr>
            <td><code>getTrackingUrl()</code></td>
            <td>Get tracking url of an order</td>
            <td style="text-align:center">✅</td>
        </tr>
    </tbody>
</table>

_Note:_

- The ✅ icon indicates that the task has been completed.
- The 📝 icon indicates that the task is todo.
- The ❗ icon indicates that the task needs help.

#### Sample working code: <a href="https://github.com/lehuygiang28/giaohangnhanh/blob/HEAD/example/index.ts" target="_blank">Click here!</a>

## Contribution

<a href="https://github.com/lehuygiang28/giaohangnhanh/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=lehuygiang28/giaohangnhanh" />
</a>
