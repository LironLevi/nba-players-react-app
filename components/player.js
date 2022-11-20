export default function Player({ player }) {
  return (
    <div className="item card">
      <div className="content card-content">
        <div className="row">
          <div className="item card-title">
            <h2 className="content">{`${player.first_name} ${player.last_name}`}</h2>
            <p>{`Position: ${player.position ? player.position : "-"}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
