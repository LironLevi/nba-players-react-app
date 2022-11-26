// A separate page, all rendered on the server not on the client
// As that is how Next.js works
export default function AboutPage() {
  return (
    <div className="row">
      <div className="item">
        <div className="content">
          This app is about NBA Players from all seasons.
        </div>
      </div>
    </div>
  );
}
