import ResourceTable from './ResourceTable.jsx'

const usersApiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

function Users() {
  return (
    <ResourceTable
      apiEndpoint={usersApiEndpoint}
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