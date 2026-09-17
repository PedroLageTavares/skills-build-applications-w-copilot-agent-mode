import ResourceTable from './ResourceTable.jsx'

const activitiesApiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

function Activities() {
  return (
    <ResourceTable
      apiEndpoint={activitiesApiEndpoint}
      component="activities"
      title="Activities"
      description="Review logged workouts, durations, calorie totals, and activity timestamps."
      columns={[
        { key: 'type', label: 'Type' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'caloriesBurned', label: 'Calories' },
        { key: 'loggedAt', label: 'Logged' },
      ]}
    />
  )
}

export default Activities