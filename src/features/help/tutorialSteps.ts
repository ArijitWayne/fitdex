import type { GuideStep } from './GuideDialog.tsx'

export const workoutTutorialSteps: readonly GuideStep[] = [
  { title: 'Welcome to Workouts', sections: [{ text: 'Start workouts, create reusable routines, plan your training week, browse Exercise Dex, and view completed workouts.' }] },
  { title: 'Routines Are Optional', sections: [{ text: 'A routine is a reusable workout template, such as Push Day, Pull Day, or Leg Day.' }, { text: 'You do not need a routine to train. Start an empty workout anytime and add exercises as you go.' }] },
  { title: 'Plan Your Week', sections: [{ label: 'Workout Day', text: 'Train without a fixed routine.' }, { label: 'Routine', text: 'Follow one of your saved routines.' }, { label: 'Rest Day', text: 'A planned recovery day.' }, { label: 'No Plan', text: 'Nothing scheduled.' }] },
  { title: 'Starting a Workout', sections: [{ text: "Start from today's scheduled routine, any saved routine, or an empty workout." }, { text: 'During training you can add, remove, or reorder exercises and add or delete sets.' }] },
  { title: 'Logging Sets', sections: [{ text: 'Enter the required values, such as Weight + Reps or Duration. When every required value is valid, the set logs automatically—there is no Complete button.' }, { text: 'For example, entering Set 1 changes 0/3 logged sets to 1/3.' }] },
  { title: 'Previous Performance', sections: [{ text: 'When available, FitDex shows your previous completed performance for the exercise to help you decide what to attempt next.' }] },
  { title: 'Rest Timer', sections: [{ text: 'A logged set has an optional Rest action. Logging never starts Rest automatically; you can Skip or Reset the countdown.' }] },
  { title: 'Workout Timer', sections: [{ text: 'The timer tracks active training time. Pause stops counting temporarily; Resume continues. You can Finish while paused, and paused time is excluded from final duration.' }] },
  { title: 'Finishing a Workout', sections: [{ text: 'Every remaining exercise needs a set, and every remaining set must be valid. Fill or delete empty sets and remove unused exercises. FitDex identifies anything that still needs attention.' }] },
  { title: 'Workout History', sections: [{ text: 'Completed workouts appear under Recent Workouts. Review exercises, sets, and duration, or delete a session.' }, { text: 'Deleting a completed workout automatically updates Journal, Progress, and Personal Records.' }] },
  { title: 'Exercise Dex', sections: [{ text: 'Browse 804 exercises using search, categories, demonstrations, instructions, and Favorites. Tap ★ to keep an exercise in your shortlist.' }] },
  { title: 'Workouts on Home', sections: [{ label: 'No Plan', text: 'Start empty or create a routine.' }, { label: 'Workout Day', text: 'Train and choose exercises as you go.' }, { label: 'Routine Day', text: "Start today's assigned routine." }, { label: 'Rest Day', text: 'Home shows planned recovery.' }, { label: 'Completed', text: "Home shows today's completed activity." }, { text: 'Your workout data automatically feeds Home, Journal and Progress.' }] },
]

export const foodTutorialSteps: readonly GuideStep[] = [
  { title: 'Welcome to Food', sections: [{ text: 'Log Breakfast, Lunch, Supper, and Dinner.' }, { label: 'Core values', text: 'Calories, Protein, Carbs, and Fat.' }, { label: 'Optional nutrients', text: 'Fiber, Sugar, Saturated Fat, and Sodium.' }] },
  { title: 'Logging Food', sections: [{ text: 'Choose a meal, add a food, and enter values for what you actually consumed. FitDex needs no online food database—you control the logged values.' }] },
  { title: 'Food Memory', sections: [{ text: 'Logged foods are remembered locally so you can choose a suggestion next time. Remembered values are defaults; changing today’s entry does not automatically change that template.' }] },
  { title: 'Food Categories', sections: [{ text: 'Use predefined categories such as Chicken, Eggs, Fish & Seafood, Fruits, Vegetables, and Supplements, or create your own custom category.' }] },
  { title: 'Past Days', sections: [{ text: 'Use the date controls to review or log another day. Food history is stored as snapshots, so changing remembered defaults later never rewrites old meals.' }] },
  { title: 'Nutrition Breakdown', sections: [{ label: 'Macros', text: 'Protein × 4 kcal/g, Carbs × 4 kcal/g, and Fat × 9 kcal/g.' }, { label: 'Meals', text: 'Actual logged calories split across Breakfast, Lunch, Supper, and Dinner.' }, { text: 'Your entered calorie total may not match the macro-derived total. FitDex keeps both instead of changing your entries.' }] },
  { title: 'Where Your Food Data Goes', sections: [{ label: 'Home', text: "Shows today's nutrition and meal progress." }, { label: 'Journal', text: 'Shows logged meals for the selected day.' }, { label: 'Progress', text: 'Uses Food history for nutrition averages and trends.' }, { text: 'You do not need to enter the same data again elsewhere.' }] },
]
