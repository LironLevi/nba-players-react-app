import Player from "./player";

export default function PlayersList({ players }) {
  return (
    <div className="row">
      {players.map((player) => {
        return <Player key={player.id} player={player} />;
      })}
    </div>
  );
}
