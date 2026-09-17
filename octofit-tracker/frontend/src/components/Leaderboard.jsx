import ResourceTable from './ResourceTable.jsx'

function Leaderboard() {
  return (
    <ResourceTable
      apiEndpoint="/api/leaderboard/"
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