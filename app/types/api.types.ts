import type {
  ContractorsServicesRecord,
  ContractorsServicesResponse,
  DictCitiesRecord,
  DictSpecialtyServicesRecord,
  PostsResponse,
  UsersProfileViewResponse,
  UsersRecord,
} from "./pocketbase-types";

export interface IUserProfileResponse extends UsersProfileViewResponse<
  number,
  DictCitiesRecord[],
  number,
  number,
  number,
  number,
  ContractorsServicesRecord[],
  { location: DictCitiesRecord }
> {}

export interface FullContractorsServicesListResponse extends ContractorsServicesResponse<{
  specialtyService: DictSpecialtyServicesRecord;
}> {}

export interface PostsResponseWithAuthor extends PostsResponse<string, {
  author: UsersRecord;
}> {}
