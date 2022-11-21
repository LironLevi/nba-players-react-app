import Player from "./player";
import Message from "../components/message";

export default function PlayersList({ players }) {
  if (players.length === 0)
    return <Message content="No players match this filter" />;

  return (
    <div className="row">
      {players.map((player) => {
        return <Player key={player.id} player={player} />;
      })}
    </div>
  );
}
