import type { Exercise } from '../../data/models'
import type { SmartWorkoutExerciseDefinition } from './smartWorkoutTypes'

const executionCue: Record<string, string> = {
  'Horizontal Push': 'Drive the resistance away while keeping the shoulder blades controlled, then return until you reach a comfortable chest stretch.',
  'Vertical Push': 'Press through a steady overhead path without flaring the ribs, then lower until the shoulders and elbows reach a comfortable starting position.',
  'Horizontal Pull': 'Lead with the elbows and draw the shoulder blades back, then extend the arms slowly without losing your torso position.',
  'Vertical Pull': 'Draw the elbows down toward the ribs, pause without shrugging, and return under control to a full comfortable reach.',
  Squat: 'Bend through the hips and knees while keeping the feet planted, reach the demonstrated depth, and stand back up without letting the knees collapse inward.',
  Hinge: 'Push the hips back with a braced trunk, move through the demonstrated range, and finish by extending the hips without over-arching the lower back.',
  Lunge: 'Move into the demonstrated split stance, lower with both feet stable, and drive through the working leg to return without rushing the transition.',
  Carry: 'Stand tall with the load secure, travel with short controlled steps, and resist leaning or rotating as fatigue builds.',
  Rotation: 'Rotate through the demonstrated path while keeping the movement smooth, then reverse the motion without jerking through the trunk or shoulders.',
  'Anti-Rotation': 'Press or hold the resistance away from the body while preventing unwanted trunk rotation, then return slowly without losing your stacked posture.',
  Flexion: 'Curl through the intended joint or trunk range without using momentum, briefly control the shortened position, and lower smoothly.',
  Extension: 'Extend through the intended joint range while keeping the rest of the body quiet, then return slowly without dropping the resistance.',
  Abduction: 'Move the working limb away from the body through a controlled arc, pause briefly, and lower without swinging or shifting the torso.',
  Adduction: 'Draw the working limb toward the body with control, pause briefly, and return through a comfortable range without twisting the pelvis.',
  Locomotion: 'Set a sustainable rhythm, keep each stride or cycle smooth, and adjust pace before technique begins to break down.',
  Conditioning: 'Move through the demonstrated sequence at a repeatable pace, keep transitions controlled, and slow down before form deteriorates.',
  Mobility: 'Move gradually into the demonstrated range, keep the surrounding joints relaxed and controlled, and reverse the motion without forcing the end position.',
  Isometric: 'Build tension into the demonstrated position, keep your breathing steady, and end the hold when you can no longer maintain alignment.',
  'Olympic Lift / Explosive': 'Accelerate through the demonstrated power phase while keeping the load close, receive or finish it with control, and reset fully before the next repetition.',
  Crawl: 'Coordinate opposite limbs while keeping the trunk quiet, travel with short deliberate steps, and stop before the hips begin to sway.',
}

function setupFor(exercise: Exercise, definition: SmartWorkoutExerciseDefinition) {
  const equipment = definition.equipment.filter((item) => item !== 'Bodyweight')
  const equipmentText = equipment.length ? ` with ${equipment.join(' and ').toLowerCase()}` : ''
  const stance = exercise.laterality === 'unilateral'
    ? 'Arrange the working side exactly as demonstrated and square the rest of your body.'
    : exercise.laterality === 'alternating'
      ? 'Set both sides evenly so you can alternate without changing your base.'
      : 'Use a balanced stance or support position and brace before starting.'
  return `Set up for ${exercise.name}${equipmentText}. ${stance}`
}

export function createExerciseCopy(exercise: Exercise, definition: SmartWorkoutExerciseDefinition) {
  const pattern = exercise.movementPattern ?? 'Conditioning'
  const primary = exercise.primaryMuscles.join(', ')
  const secondary = exercise.secondaryMuscles.slice(0, 3).join(', ')
  const helpTarget = secondary ? `${primary}, with support from ${secondary}` : primary
  const controlCue = exercise.trackingType === 'duration'
    ? 'Use a pain-free range and finish the interval before your position changes.'
    : 'Keep the working joints aligned and make the return phase as deliberate as the effort phase.'

  return {
    howToPerform: `${setupFor(exercise, definition)} ${executionCue[pattern]} ${controlCue}`,
    howItHelps: `${exercise.name} develops ${helpTarget} through a controlled ${pattern.toLowerCase()} pattern. It can support repeatable strength, muscular control, or work capacity appropriate to the chosen load and pace.`,
  }
}
