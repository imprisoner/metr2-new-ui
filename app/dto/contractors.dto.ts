import type { FullContractorsServicesListResponse } from "~/types/api.types";

export class ContractorServicesDto {
  id: string;
  name: string;
  description: string;
  priceMin: number;
  priceMax: number;

  constructor(data: FullContractorsServicesListResponse) {
    this.id = data.id;
    this.name = data.expand.specialtyService.name;
    this.description = data.description;
    this.priceMin = data.priceMin;
    this.priceMax = data.priceMax;
  }
}
