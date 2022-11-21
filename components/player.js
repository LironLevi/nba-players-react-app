export default function Player({ player }) {
  return (
    <div className="item card">
      <div className="content card-content">
        <div className="item card-title">
          <h2>{`${player.first_name} ${player.last_name}`}</h2>
        </div>
        <p>{`Position: ${player.position ? player.position : "-"}`}</p>
      </div>
    </div>
  );
}
