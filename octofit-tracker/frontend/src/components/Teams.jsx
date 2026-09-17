import ResourceTable from './ResourceTable.jsx'

const teamsApiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

function Teams() {
  return (
    <ResourceTable
      apiEndpoint={teamsApiEndpoint}
      component="teams"
      title="Teams"
      description="Browse team rosters, mascots, and group activity structures."
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'mascot', label: 'Mascot' },
        { key: 'members', label: 'Members' },
      ]}
    />
  )
}

export default Teams