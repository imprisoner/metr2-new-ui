import type {
  ContractorsServicesRecord,
  DictCitiesRecord,
  UsersProfileViewResponse,
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
