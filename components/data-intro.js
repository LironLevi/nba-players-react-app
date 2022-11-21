export default function DataIntro({
  changeHandler,
  teamsOptions,
  selectedTeam,
}) {
  return (
    <div className="row">
      <div className="item control-container">
        <div className="content">
          <div className="row">
            <div className="item control text">
              <div>Filter by Team:</div>
            </div>
            <div className="item control">
              <select id="data-filter-teams" onChange={changeHandler}>
                {Object.keys(teamsOptions).map((optionName) => (
                  <option key={teamsOptions[optionName].id} value={optionName}>
                    {optionName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="item control-container">
        <div className="content">
          <div className="row">
            <div className="item control">
              <select id="data-sort" onChange={changeHandler}>
                <option value="sortFN">Sort by players first name</option>
                <option value="sortLN">Sort by players last name</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="item control-container">
        <div className="content">
          <div className="row">
            <div className="item control">
              <select id="data-filter-pos" onChange={changeHandler}>
                <option value="-">All Positions</option>
                <option value="C">Center</option>
                <option value="F">Forward</option>
                <option value="G">Guard</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <h2>
          {teamsOptions[selectedTeam]
            ? `Players from ${teamsOptions[selectedTeam].city} ${selectedTeam} (${teamsOptions[selectedTeam].abbreviation}) Team:`
            : ""}
        </h2>
      </div>
    </div>
  );
}
