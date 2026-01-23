import type { PostEntityDto } from "~/dto/posts.dto";
import type { ListResult } from "pocketbase";
import { getPopularPostsList } from "~/api/posts";

export const usePopularPostsList = (startPage?: number, perPage?: number) => {
  const postsList = ref<ListResult<PostEntityDto>>({
    items: [],
    page: startPage ?? 1,
    perPage: perPage ?? 3,
    totalItems: -1,
    totalPages: -1,
  });

  const currentPage = computed(() => postsList.value.page)
  const totalPages = computed(() => postsList.value.totalPages)
  const pageSize = computed(() => postsList.value.perPage)

  const posts = ref<PostEntityDto[]>([...postsList.value.items])

  const fetchPostsList = async () => {
    postsList.value = await getPopularPostsList({ page: currentPage.value + 1});
    posts.value = [...posts.value, ...postsList.value.items];
  };
  
  const next = async () => {
    await fetchPostsList();
  }

  const isLastPage = computed(
    () => postsList.value.page >= postsList.value.totalPages,
  );

  return {
    posts,
    currentPage,
    isLastPage,
    totalPages,
    pageSize,
    next,
  };
};
