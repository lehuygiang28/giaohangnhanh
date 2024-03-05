export type GhnProvince = {
    ProvinceID: number;
    ProvinceName: string;
    CountryID: number;
    Code: string;
    NameExtension: string[];
    IsEnable: number;
    RegionID: number;
    RegionCPN: number;
    UpdatedBy: number;
    CreatedAt: string;
    UpdatedAt: string;
    CanUpdateCOD: boolean;
    Status: number;
    UpdatedIP: string;
    UpdatedEmployee: number;
    UpdatedSource: string;
    UpdatedDate: string;
};

export type GhnDistrict = {
    DistrictID: number;
    ProvinceID: number;
    DistrictName: string;
    Code: string;
    Type: number;
    SupportType: number;
    NameExtension: string[];
    IsEnable: number;
    UpdatedBy: number;
    CreatedAt: string;
    UpdatedAt: string;
    CanUpdateCOD: boolean;
    Status: number;
    PickType: number;
    DeliverType: number;
    ReasonCode: string;
    ReasonMessage: string;
    OnDates: unknown;
    UpdatedIP: string;
    UpdatedEmployee: number;
    UpdatedSource: string;
    UpdatedDate: string;
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

export type GhnWard = {
    WardCode: string;
    DistrictID: number;
    WardName: string;
    NameExtension: string[];
    IsEnable: number;
    CanUpdateCOD: boolean;
    UpdatedBy: number;
    CreatedAt: string;
    UpdatedAt: string;
    Status: number;
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
