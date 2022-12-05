export interface IServiceProviderModel {
    service: IServiceModel;
    provider: IProviderModel;
    beginTime: string;
    endTime: string;
}


export interface IServiceModel {
    name: string;
}

export interface IProviderModel {
    providerId: string;
    name: string;
}