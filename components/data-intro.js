export default function DataIntro({ changeHandler, options }) {
  return (
    <div className="row">
      <div className="item control-container">
        <div className="content">
          <div className="row">
            <div id="filter"> Filter by Team: </div>
            <div className="item control">
              <select id="data-filter-teams" onChange={changeHandler}>
                {options.map((option) => (
                  <option key={option.id} value={option.name}>
                    {option.name}
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
    </div>
  );
}
