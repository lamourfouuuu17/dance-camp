import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const createMasterclass = async (type) => {
  const { data } = await $authHost.post("api/masterclass", masterclass);
  return data;
};

export const fetchMasterclass = async () => {
  const { data } = await $host.get("api/masterclass");
  return data;
};
