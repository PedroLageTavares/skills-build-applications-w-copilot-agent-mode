import ResourceTable from './ResourceTable.jsx'

function Activities() {
  return (
    <ResourceTable
      apiEndpoint="/api/activities/"
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