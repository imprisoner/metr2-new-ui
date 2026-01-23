import type {
  ContractorsServicesRecord,
  ContractorsServicesResponse,
  DictCitiesRecord,
  DictSpecialtyServicesRecord,
  FlatsResponse,
  PostFlatsResponse,
  PostsResponse,
  UsersProfileViewResponse,
  UsersRecord,
  PostsCommonViewRecord,
  CommentsPostsResponse,
  PostsCommonViewResponse,
  EstatesCommonViewResponse,
} from "./pocketbase-types";

export interface IUserProfileResponse extends UsersProfileViewResponse<
  DictCitiesRecord[],
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
  post_flats_via_flat: PostFlatsResponse<{ post: PostsResponse<any[], {}> }>[];
}> {}

export interface ITypedCommonPostsRecord extends PostsCommonViewRecord<
  any[],
  string[]
> {}

export interface ITypedCommonPostsResponse extends PostsCommonViewResponse<
  any[],
  string[],
  { lastComments: CommentsPostsResponse<{ author: UsersRecord }>[] }
> {}

export interface IEstateWithUserResponse extends EstatesCommonViewResponse<{
  user: UsersRecord;
}> {}

