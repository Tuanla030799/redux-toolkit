import { Profile } from "../features/Home/types";
import { baseApi } from "./baseApi";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builds) => ({
    getAllProfiles: builds.query<Profile[], undefined>({
      query: () => ({ url: "/customers" }),
    }),
  }),
});

export const { useGetAllProfilesQuery } = profileApi;
