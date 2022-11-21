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
  const [teamsOptions, setTeamsOptions] = useState([]);
  const [filterTeamKey, setFilterTeamKey] = useState();

  const {
    data: teams,
    isLoading: isLoadteamsingt,
    isError: isErrort,
  } = useTeamData();

  useEffect(() => {
    if (teams && teams.data) {
      setFilterTeamKey(teams.data[0].name);
      setTeamsOptions(
        Object.assign(
          {},
          ...teams.data.map((team) => ({
            [team.name]: {
              id: team.id,
              city: team.city,
              abbreviation: team.abbreviation,
            },
          }))
        )
      );
    }
  }, [teams]);

  const { data, isLoading, isError } = usePlayersData();
  const [allPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    if (data) {
      setAllPlayers(data.flatMap((obj) => obj.data));
    }
  }, [data]);

  const [sortKey, setSortKey] = useState("sortFN");
  const [filterPosKey, setFilterPosKey] = useState("-");

  function getDataQueryKeys(event) {
    if (event.target.id === "data-filter-teams") {
      setFilterTeamKey(event.target.value);
    }
    if (event.target.id === "data-sort") {
      setSortKey(event.target.value);
    }
    if (event.target.id === "data-filter-pos") {
      setFilterPosKey(event.target.value);
    }
  }

  if (isLoading || isLoadteamsingt) return <Message content="Loading..." />;
  if (isError || isErrort) return <Message content="An error occured..." />;
  if (!data || !teams) return <Message content="No data could be loaded..." />;

  let players;
  if (allPlayers.length > 0) {
    players = filterPlayersDataByTeam(allPlayers, filterTeamKey);
    players = filterPlayersDataByPos(players, filterPosKey);
    players = sortPlayersData(players, sortKey);
    console.log("players after filtering:", players);
  } else {
    players = [];
  }

  return (
    <>
      <DataIntro
        changeHandler={getDataQueryKeys}
        teamsOptions={teamsOptions}
        selectedTeam={filterTeamKey}
      />
      <PlayersList players={players} />
    </>
  );
}
