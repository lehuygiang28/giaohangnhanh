type AddressBase = {
    IsEnable: number;
    UpdatedBy: number;
    CreatedAt: string;
    UpdatedAt: string;

    /**
     * Trạng thái của địa chỉ
     * - 1: Mở khoá
     * - 2: Khoá
     *
     * @en
     * Status of the address
     * - 1: Unlock
     * - 2: Lock
     */
    Status: number;

    UpdatedIP: string;
    UpdatedEmployee: number;
    UpdatedSource: string;
    UpdatedDate: string;
};

export type GhnProvince = AddressBase & {
    ProvinceID: number;
    ProvinceName: string;
    CountryID: number;
    Code: string;
    NameExtension: string[];
    RegionID: number;
    RegionCPN: number;
};

export type GhnDistrict = AddressBase & {
    DistrictID: number;
    ProvinceID: number;
    DistrictName: string;
    Code: string;
    Type: number;
    SupportType: number;
    NameExtension: string[];

    /**
     * @en
     * Can update COD
     * - true: Yes
     * - false: No
     */
    CanUpdateCOD: boolean;

    PickType: number;
    DeliverType: number;
    ReasonCode: string;
    ReasonMessage: string;
    OnDates: unknown;
    WhiteListClient: {
        From: unknown;
        To: unknown;
        Return: unknown;
    };
    WhiteListWard: {
        From: unknown;
        To: unknown;
    };
};

export type GhnWard = AddressBase & {
    WardCode: string;
    DistrictID: number;
    WardName: string;
    NameExtension: string[];

    /**
     * @en
     * Can update COD
     * - true: Yes
     * - false: No
     */
    CanUpdateCOD: boolean;

    SupportType: number;
    PickType: number;
    DeliverType: number;
    ReasonCode: string;
    ReasonMessage: string;
    OnDates: unknown;
    WhiteListClient: {
        From: unknown;
        To: unknown;
        Return: unknown;
    };
    WhiteListWard: {
        From: unknown;
        To: unknown;
    };
};
