import ResourceTable from './ResourceTable.jsx'

const workoutsApiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

function Workouts() {
  return (
    <ResourceTable
      apiEndpoint={workoutsApiEndpoint}
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