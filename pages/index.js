import { useEffect, useState } from "react";
import DataIntro from "../components/data-intro";

import Message from "../components/message";

import PlayersList from "../components/players-list";

import { useTeamData, usePlayersData } from "../hooks/data";

import {
  filterPlayersDataByTeam,
  filterPlayersDataByPos,
  sortPlayersData,
} from "../utils";

// Our main page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready
export default function IndexPage() {
  const [options, setOptions] = useState([]);
  const {
    data: teams,
    isLoading: isLoadteamsingt,
    isError: isErrort,
  } = useTeamData();

  useEffect(() => {
    if (teams && teams.data) {
      setOptions(teams.data.map((team) => ({ name: team.name, id: team.id })));
    }
  }, [teams]);

  const { data, isLoading, isError } = usePlayersData();

  const [filterTeamKey, setFilterTeamKey] = useState();
  useEffect(() => {
    if (options[0] && options[0].name) {
      setFilterTeamKey(options[0].name);
    }
  }, [options]);

  const [sortKey, setSortKey] = useState("sortFN");
  const [filterPosKey, setFilterPosKey] = useState("-");

  function getDataQueryKeys(event) {
    if (event.target.id === "data-filter-teams") {
      setFilterTeamKey(event.target.value);
      //console.log(event.target.value);
    }
    if (event.target.id === "data-sort") {
      setSortKey(event.target.value);
    }
    if (event.target.id === "data-filter-pos") {
      setFilterPosKey(event.target.value);
    }
  }

  if (isLoading || isLoadteamsingt) return <Message content="Loading..." />;
  if (isError || isError) return <Message content="An error occured..." />;
  if (!data || !teams) return <Message content="No data could be loaded..." />;

  // Just for convenience

  const players = sortPlayersData(
    filterPlayersDataByPos(
      filterPlayersDataByTeam(data, filterTeamKey),
      filterPosKey
    ),
    sortKey
  );
  console.log(players);

  return (
    <>
      <DataIntro changeHandler={getDataQueryKeys} options={options} />
      <PlayersList players={players} />
    </>
  );
}
