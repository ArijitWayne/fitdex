import { ExerciseDex } from '../features/exerciseDex/ExerciseDex'
import { PageHeader } from './PageHeader'

export function WorkoutPage() {
  return <div className="page-stack workout-page"><PageHeader eyebrow="Training hub" title="Workout" description="Browse the universal Exercise Dex. Routine building and workout logging arrive in a future phase." /><ExerciseDex /></div>
}
