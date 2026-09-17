import ResourceTable from './ResourceTable.jsx'

function Users() {
  return (
    <ResourceTable
      component="users"
      title="Users"
      description="Manage athlete profiles, team assignment, and fitness goals."
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'team', label: 'Team' },
        { key: 'goal', label: 'Goal', render: (user) => user.profile?.fitnessGoal },
      ]}
    />
  )
}

export default Users