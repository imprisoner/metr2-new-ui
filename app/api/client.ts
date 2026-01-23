import PocketBase from "pocketbase";
import type { TypedPocketBase } from "~/types/pocketbase-types";

// const apiURL = import.meta.server
//   ? process.env.API_URL_SERVER
//   : import.meta.env.VITE_API_URL_CLIENT;

const apiURL = import.meta.server ? 'http://backend:8080' : `${window.location.origin}/backend`;

export const pb = new PocketBase(apiURL) as TypedPocketBase;
