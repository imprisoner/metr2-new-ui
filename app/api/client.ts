import PocketBase from "pocketbase";

const apiURL = import.meta.server
  ? process.env.API_URL_SERVER
  : import.meta.env.VITE_API_URL_CLIENT;

export const pb = new PocketBase(apiURL);
