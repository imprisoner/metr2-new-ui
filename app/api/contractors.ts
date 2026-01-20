import { ContractorServicesDto } from "~/dto/contractors.dto";
import { pb } from "./client";
import type { FullContractorsServicesListResponse } from "~/types/api.types";

export const getFullContractorsServicesListByUserId = async (userId?: string) => {
  if (!userId) return [];

  const list = await pb
    .collection("contractors_services")
    .getFullList<FullContractorsServicesListResponse>({
      filter: `user = "${userId}"`,
      expand: "specialtyService",
    });

  return list.map((item) => new ContractorServicesDto(item));
};

