import type {
  ContractorsServicesRecord,
  ContractorsServicesResponse,
  DictCitiesRecord,
  DictSpecialtyServicesRecord,
  FlatsResponse,
  PostFlatsRecord,
  PostFlatsResponse,
  PostsRecord,
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

export interface PostsResponseWithAuthor extends PostsResponse<
  string,
  {
    author: UsersRecord;
  }
> {}

export interface FlatsResponseWithPosts extends FlatsResponse<{
  post_flats_via_flat: PostFlatsResponse<{ post: PostsRecord }>[];
}> {}

