export const PaymentTypeId = {
    Shop_Seller: 1,
    Buyer_Consignee: 2,
} as const;
export type PaymentTypeId = typeof PaymentTypeId;
