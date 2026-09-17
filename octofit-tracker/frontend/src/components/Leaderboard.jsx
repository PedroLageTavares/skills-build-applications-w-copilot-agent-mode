import ResourceTable from './ResourceTable.jsx'

const leaderboardApiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

function Leaderboard() {
  return (
    <ResourceTable
      apiEndpoint={leaderboardApiEndpoint}
      component="leaderboard"
      title="Leaderboard"
      description="Track ranks, points, and competitive progress across OctoFit teams."
      columns={[
        { key: 'rank', label: 'Rank' },
        { key: 'user', label: 'User' },
        { key: 'team', label: 'Team' },
        { key: 'points', label: 'Points' },
      ]}
    />
  )
}

export default Leaderboard