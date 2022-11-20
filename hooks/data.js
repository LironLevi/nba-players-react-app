import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

import {
  API_PLAYERS_ENDPOINT,
  API_TEAMS_ENDPOINT,
  MAX_SIZE_PAGE,
} from "../config";

// UseSWR needs a fetcher function.
// This is a generic one based on vanilla fetch().
const fetcher = (...args) => fetch(...args).then((res) => res.json());

// This is just a dummy function demonstrating preferred use of useSWR
// You create your own use* function per API endpoint
// And return a consistent response object that you can use to
// showing loading and/or error screens
export function useTeamData() {
  const { data, error } = useSWR(API_TEAMS_ENDPOINT, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

const getKey = (pageIndex, previousPageData) => {
  // reached the end
  if (previousPageData && !previousPageData.data) return null;

  // add the cursor to the API endpoint
  return `${API_PLAYERS_ENDPOINT}?page=${pageIndex + 1}&${MAX_SIZE_PAGE}`;
};

export function usePlayersData() {
  let { data, error } = useSWRInfinite(getKey, fetcher, { initialSize: 15 });

  if (data) data = data.flatMap((obj) => obj.data);
  else data = [];

  //console.log(data);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
