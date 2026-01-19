import type { FileOptions } from "pocketbase";
import { pb } from "~/api/client";

const useDefaultFilePath = import.meta.server ? process.env.VITE_USE_DEFAULT_FILE_PATH : import.meta.env.VITE_USE_DEFAULT_FILE_PATH
export const getPocketbaseFilePath = (
  record: { [key: string]: any },
  filename: string,
  queryParams: FileOptions = {},
) => {
  if (useDefaultFilePath) {
    return pb.files.getURL(record, filename, queryParams)
  }

  if (
    !filename ||
    !record?.id ||
    !(record?.collectionId || record?.collectionName)
  ) {
    return "";
  }

  const parts = [];
  parts.push("api");
  parts.push("files");
  parts.push(encodeURIComponent(record.collectionId || record.collectionName));
  parts.push(encodeURIComponent(record.id));
  parts.push(encodeURIComponent(filename));

  
  let result = '/' + parts.join("/");

  if (Object.keys(queryParams).length) {
    // normalize the download query param for consistency with the Dart sdk
    if (queryParams.download === false) {
      delete queryParams.download;
    }

    const params = new URLSearchParams(queryParams);

    result += (result.includes("?") ? "&" : "?") + params;
  }

  return result;
};