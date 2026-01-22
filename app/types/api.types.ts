import type { IPostCommentPreview } from "./common.types";
import type {
  ContractorsServicesRecord,
  ContractorsServicesResponse,
  DictCitiesRecord,
  DictSpecialtyServicesRecord,
  FlatsResponse,
  PostFlatsResponse,
  PostsRecord,
  PostsResponse,
  UsersProfileViewResponse,
  UsersRecord,
  PostsPopularViewRecord,
  PostsPopularViewResponse,
  PopularPostsViewRecord,
  PopularPostsViewResponse,
  CommentsPostsResponse,
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

export interface ITypedPostsPopularRecord extends PopularPostsViewRecord<
  string,
  string,
  number,
  any[],
  string,
  string,
  number,
  string[]
> {}

export interface ITypedPostsPopularResponse extends PopularPostsViewResponse<
  string,
  string,
  number,
  any[],
  string,
  string,
  number,
  string[],
  { lastComments: CommentsPostsResponse<{ author: UsersRecord }>[] }
> {}

