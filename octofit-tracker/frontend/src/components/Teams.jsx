import ResourceTable from './ResourceTable.jsx'

function Teams() {
  return (
    <ResourceTable
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