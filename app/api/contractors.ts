import { ContractorServicesDto } from "~/dto/contractors.dto";
import { pb } from "./client";
import type { FullContractorsServicesListResponse } from "~/types/api.types";
import { TURNKEY_CATEGORY_MENU_ITEM_ID } from "~/const";

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

export const getSpecialtiesByCategory = async (categoryId: string) => {
  if (categoryId === TURNKEY_CATEGORY_MENU_ITEM_ID) return [];

  const response = await pb.collection("dict_specialties").getFullList({
    filter: `serviceCategory = "${categoryId}"`
  })

  return response;
}

export const getServicesBySpecialty = async (specialtyId: string) => {
  const response = await pb.collection("dict_specialty_services").getFullList({
    filter: `specialty = "${specialtyId}"`
  })

  return response;
}