import ResourceTable from './ResourceTable.jsx'

function Workouts() {
  return (
    <ResourceTable
      apiEndpoint="/api/workouts/"
      component="workouts"
      title="Workouts"
      description="Explore personalized workout suggestions by difficulty, duration, and focus."
      columns={[
        { key: 'title', label: 'Title' },
        { key: 'difficulty', label: 'Difficulty' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'activities', label: 'Activities' },
      ]}
    />
  )
}

export default Workouts