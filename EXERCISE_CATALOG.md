# FitDex Exercise Catalog

This is FitDex's master exercise inventory and research file. It records the shipped dataset, audit findings, alias decisions, intentional exclusions, and a reviewed expansion backlog. It is not an instruction library, and a movement appearing here does not automatically belong in the shipped dataset.

`PROJECT_NOTES.md` remains the source of truth for architecture and product decisions. This file owns exercise inventory and catalog research.

## Status legend

- ✅ Included — currently present in `exerciseData.ts`
- 🟡 Candidate — legitimate movement that still needs review
- ➕ Approved candidate — reviewed but not yet integrated (none remain after Phase 1E)
- 🔁 Alias / naming variant — search term for an existing canonical record, not a separate exercise
- ⛔ Excluded intentionally — reviewed and intentionally not planned as a separate record
- ⚠ Needs classification review — currently shipped metadata or naming needs a later decision

## Audit summary

| Measure | Result |
| --- | ---: |
| Current built-in exercises | 399 |
| Built-in dataset version | 2 |
| Long-term target | Approximately 400–600+ curated exercises |
| Included exercises catalogued below | 399 |
| Original Phase 1B candidates reviewed | 72 |
| Previously approved candidates | 54 |
| Yellow candidates newly approved in Phase 1C | 7 |
| Yellow candidates converted to aliases | 4 |
| Yellow candidates excluded | 7 |
| Findings that add a new canonical record | 1 (Power Clean) |
| Research-complete candidate baseline | 407 |
| Final-curation exclusions | 8 |
| Canonical additions integrated | 201 |
| Approved pending canonical additions | 0 |
| Final curated built-in count | 399 |
| Remaining unresolved candidates | 0 |
| Final integrated aliases | 91 |
| Intentional exclusions | 40 |
| Canonical collisions | 0 |
| Alias collisions | 0 |
| Latest audit | Phase 1E final integration — August 2026 |

Dataset version 2 counts:

| Category | Count |
| --- | ---: |
| Chest | 39 |
| Back | 47 |
| Shoulders | 33 |
| Arms | 48 |
| Legs | 71 |
| Core | 41 |
| Full Body | 39 |
| Cardio | 47 |
| Mobility | 34 |

## Catalog rules

- FitDex has one universal library. There are no male/female, beginner/pro, or theme-specific catalogs.
- A distinct record needs a meaningful change in equipment, setup, movement path, laterality, resistance profile, primary emphasis, or tracking method.
- Naming-only variants become aliases.
- Research sources establish identity, common naming, equipment, and classification only. FitDex does not copy source instructions, prose, images, or videos.
- Candidate approval historically meant ready for a later data pass. Phase 1E integrated every retained approval; only items explicitly marked excluded remain outside the source.

# Version 1 historical inventory

The following 198 records formed dataset version 1. Phase 1E retains them except for approved metadata/category corrections and adds the included records documented later in this catalog. The headings are audit-oriented groupings; the app's approved top-level category and subfilter system is unchanged.

## Chest (22)

### Upper (6)

- ✅ Decline Push-Up
- ✅ Incline Barbell Bench Press
- ✅ Incline Dumbbell Bench Press
- ✅ Incline Machine Press
- ✅ Low-to-High Cable Fly
- ✅ Smith Machine Incline Press

### General (11)

- ✅ Barbell Bench Press
- ✅ Cable Fly
- ✅ Dumbbell Bench Press
- ✅ Dumbbell Squeeze Press
- ✅ Machine Chest Press
- ✅ Pec Deck
- ✅ Plate Pinch Press
- ✅ Push-Up
- ✅ Resistance Band Chest Press
- ✅ Single-Arm Cable Chest Press
- ✅ Smith Machine Bench Press

### Lower (5)

- ✅ Chest Dip
- ✅ Decline Barbell Bench Press
- ✅ Decline Dumbbell Bench Press
- ✅ High-to-Low Cable Fly
- ✅ Incline Push-Up

## Back (26)

### Lats / Vertical Pull (11)

- ✅ Assisted Pull-Up
- ✅ Cable Pullover
- ✅ Chin-Up
- ✅ Dumbbell Pullover — ⚠ chest/lat emphasis varies; keep Back unless detail metadata later supports multi-category discovery
- ✅ Lat Pulldown
- ✅ Neutral-Grip Lat Pulldown
- ✅ Neutral-Grip Pull-Up
- ✅ Pull-Up
- ✅ Reverse-Grip Lat Pulldown
- ✅ Straight-Arm Pulldown
- ✅ Wide-Grip Lat Pulldown

### Upper Back / Rows (12)

- ✅ Barbell Bent-Over Row
- ✅ Chest-Supported Dumbbell Row
- ✅ Chest-Supported T-Bar Row
- ✅ Inverted Row
- ✅ Iso-Lateral Machine Row
- ✅ Landmine Row
- ✅ Machine Row
- ✅ Pendlay Row
- ✅ Seated Cable Row
- ✅ Single-Arm Dumbbell Row
- ✅ T-Bar Row
- ✅ Wide-Grip Seated Cable Row

### Lower Back (3)

- ✅ 45-Degree Back Extension — ⚠ `Machine` is usable but `Bench/Roman chair` equipment would be more precise
- ✅ Barbell Good Morning — ⚠ commonly classified as a hamstring/glute hinge; review Back versus Legs placement
- ✅ Rack Pull

### Other Back

No current records.

## Shoulders (20)

### Front Delts / Pressing (9)

- ✅ Arnold Press
- ✅ Barbell Overhead Press
- ✅ Cable Front Raise
- ✅ Dumbbell Front Raise
- ✅ Dumbbell Shoulder Press
- ✅ Landmine Press
- ✅ Machine Shoulder Press
- ✅ Seated Barbell Shoulder Press
- ✅ Smith Machine Shoulder Press

### Side Delts (4)

- ✅ Cable Lateral Raise
- ✅ Dumbbell Lateral Raise
- ✅ Lean-Away Cable Lateral Raise
- ✅ Machine Lateral Raise

### Rear Delts (5)

- ✅ Band Face Pull
- ✅ Cable Rear Delt Fly
- ✅ Dumbbell Rear Delt Fly
- ✅ Face Pull
- ✅ Reverse Pec Deck

### Shoulder Health / Rotator Cuff (2)

- ✅ Band External Rotation
- ✅ Cable External Rotation

## Arms (28)

### Biceps (14)

- ✅ Alternating Dumbbell Curl
- ✅ Barbell Curl
- ✅ Bayesian Cable Curl
- ✅ Cable Curl
- ✅ Concentration Curl
- ✅ Cross-Body Hammer Curl
- ✅ Dumbbell Curl
- ✅ EZ-Bar Curl
- ✅ Hammer Curl
- ✅ Incline Dumbbell Curl
- ✅ Machine Preacher Curl
- ✅ Preacher Curl
- ✅ Reverse Curl
- ✅ Spider Curl

### Triceps (10)

- ✅ Bench Dip
- ✅ Cable Triceps Kickback
- ✅ Cable Triceps Pushdown
- ✅ Close-Grip Bench Press
- ✅ Diamond Push-Up
- ✅ Dumbbell Overhead Triceps Extension
- ✅ EZ-Bar Skull Crusher
- ✅ Overhead Cable Triceps Extension
- ✅ Rope Triceps Pushdown
- ✅ Single-Arm Triceps Pushdown

### Forearms / Grip (4)

- ✅ Barbell Wrist Curl
- ✅ Dumbbell Reverse Wrist Curl
- ✅ Dumbbell Wrist Curl
- ✅ Plate Pinch Hold — ⚠ static grip work is currently tagged `Carry`; a future `Isometric` movement pattern may be clearer

## Legs (38)

### Quadriceps (2)

- ✅ Leg Extension
- ✅ Single-Leg Extension

### Hamstrings (8)

- ✅ Dumbbell Romanian Deadlift
- ✅ Glute-Ham Raise
- ✅ Lying Leg Curl
- ✅ Nordic Hamstring Curl
- ✅ Romanian Deadlift
- ✅ Seated Leg Curl
- ✅ Single-Leg Romanian Deadlift
- ✅ Standing Single-Leg Curl

### Glutes (10)

- ✅ Barbell Hip Thrust
- ✅ Bulgarian Split Squat
- ✅ Cable Glute Kickback
- ✅ Cable Pull-Through
- ✅ Dumbbell Hip Thrust
- ✅ Glute Bridge
- ✅ Lateral Lunge
- ✅ Reverse Lunge
- ✅ Step-Up
- ✅ Walking Lunge

### Calves (4)

- ✅ Leg Press Calf Raise
- ✅ Seated Calf Raise
- ✅ Single-Leg Calf Raise
- ✅ Standing Calf Raise

### Adductors / Abductors (3)

- ✅ Cable Hip Abduction
- ✅ Machine Hip Abduction
- ✅ Machine Hip Adduction

### Compound / Mixed Legs (11)

- ✅ Back Squat
- ✅ Belt Squat
- ✅ Forward Lunge
- ✅ Front Squat
- ✅ Goblet Squat
- ✅ Hack Squat
- ✅ Leg Press
- ✅ Single-Leg Press
- ✅ Sissy Squat
- ✅ Smith Machine Squat
- ✅ Wall Sit

## Core (20)

### Abs / Flexion (4)

- ✅ Cable Crunch
- ✅ Crunch
- ✅ Machine Crunch
- ✅ Reverse Crunch

### Obliques / Rotation (5)

- ✅ Bicycle Crunch
- ✅ Cable Wood Chop
- ✅ Landmine Rotation
- ✅ Russian Twist
- ✅ Side Plank

### Stability / Anti-Rotation (7)

- ✅ Ab Wheel Rollout
- ✅ Band Pallof Press
- ✅ Bird Dog
- ✅ Dead Bug
- ✅ Pallof Press
- ✅ Plank
- ✅ Suitcase Carry

### Hip Flexion / Leg Raise (4)

- ✅ Captain’s Chair Knee Raise
- ✅ Hanging Knee Raise
- ✅ Hanging Leg Raise
- ✅ Sit-Up

## Full Body (12)

### Carries (1)

- ✅ Farmer Carry

### Kettlebell / Ballistic (4)

- ✅ Barbell Clean — Power Clean is no longer an alias in version 2; both are distinct canonical records
- ✅ Kettlebell Clean
- ✅ Kettlebell Clean and Press
- ✅ Kettlebell Swing

### Compound Conditioning (5)

- ✅ Barbell Thruster
- ✅ Burpee
- ✅ Devil Press
- ✅ Dumbbell Thruster
- ✅ Sled Push

### Other Full Body (2)

- ✅ Conventional Deadlift
- ✅ Sumo Deadlift

## Cardio (20)

### Running (5)

- ✅ Outdoor Running
- ✅ Sprint Intervals
- ✅ Track Running
- ✅ Trail Running
- ✅ Treadmill Running

### Walking (4)

- ✅ Hiking
- ✅ Incline Treadmill Walking
- ✅ Outdoor Walking
- ✅ Treadmill Walking

### Cycling (4)

- ✅ Air Bike
- ✅ Outdoor Cycling
- ✅ Spin Bike — ⚠ distance may be unavailable on some bikes; duration must remain usable
- ✅ Stationary Bike — ⚠ distance may be unavailable on some bikes; duration must remain usable

### Rowing / SkiErg (2)

- ✅ Rowing Machine
- ✅ SkiErg

### Stair / Elliptical (2)

- ✅ Elliptical
- ✅ Stair Climber

### Swimming (1)

- ✅ Swimming

### Jump Rope (1)

- ✅ Jump Rope

### Combat / Conditioning (1)

- ✅ Heavy Bag Boxing

### Other Cardio

No current records.

## Mobility (12)

### Shoulder / Upper Body (3)

- ✅ Band Shoulder Dislocate
- ✅ Scapular Wall Slide
- ✅ Wall Shoulder Slide

### Thoracic / Spine (3)

- ✅ Half-Kneeling Thoracic Rotation
- ✅ Open Book Rotation
- ✅ Thread the Needle

### Hip (3)

- ✅ 90/90 Hip Switch
- ✅ Adductor Rock Back
- ✅ Hip CAR

### Ankle / Lower Leg (1)

- ✅ Knee-to-Wall Ankle Mobilization

### Lower Body

No current records dedicated to this audit subgroup.

### Full Body (2)

- ✅ Inchworm to Cobra
- ✅ World’s Greatest Stretch

# Expansion candidate backlog

These 72 Phase 1B candidates were checked against the then-current inventory and public reference libraries. `MW`, `ACE`, `NASM`, `ExRx`, `C2`, and `CDC` refer to the sources documented at the end. Phase 1E has now integrated every retained ✅ record; the table preserves the original research decisions. Exact instructions and original prose remain independently authored.

## Chest candidates (8)

| Status | Candidate | Subcategory | Equipment / tracking | Muscles | Decision | Check |
| --- | --- | --- | --- | --- | --- | --- |
| ✅ | Incline Cable Press | Upper | Cable / Weight + Reps | Upper chest; triceps, front delts | Distinct cable resistance profile and pressing path | MW + ACE |
| ✅ | Single-Arm Dumbbell Bench Press | General | Dumbbell / Weight + Reps | Chest; triceps, front delts, core | Meaningful unilateral stability demand | NASM + ACE |
| ✅ | Dumbbell Floor Press | General | Dumbbell / Weight + Reps | Chest, triceps; front delts | Floor-limited range and dumbbell setup are distinct | MW + ExRx |
| ✅ | Barbell Floor Press | General | Barbell / Weight + Reps | Chest, triceps; front delts | Common barbell press with materially different setup | ExRx + ACE |
| ✅ | Plyometric Push-Up | General | Bodyweight / Bodyweight Reps | Chest; triceps, front delts | Explosive intent is materially different from Push-Up | NASM + ACE |
| ✅ | Weighted Push-Up | General | Weight Plate / Weight + Reps | Chest; triceps, front delts | Loadable bodyweight press needs weight tracking | MW + ExRx |
| ⛔ | Reverse-Grip Bench Press | Upper | Barbell / Weight + Reps | Chest, triceps; front delts | Excluded intentionally: uncommon specialist press; retained chest coverage is already extensive | MW + ExRx |
| ✅ | Archer Push-Up | General | Bodyweight / Bodyweight Reps | Chest; triceps, front delts | Distinct asymmetrical/unilateral execution, not merely a naming variant | NASM + MW |

## Back candidates (8)

| Status | Candidate | Subcategory | Equipment / tracking | Muscles | Decision | Check |
| --- | --- | --- | --- | --- | --- | --- |
| ✅ | Half-Kneeling Single-Arm Lat Pulldown | Lats / Vertical Pull | Cable / Weight + Reps | Lats; biceps, core | Unilateral path and kneeling setup are distinct | MW + ACE |
| ✅ | Kneeling Cable Lat Prayer | Lats / Vertical Pull | Cable / Weight + Reps | Lats; core | Shoulder-extension path differs from pulldown and pullover setup | MW + ExRx |
| ✅ | Seal Row | Upper Back / Rows | Barbell / Weight + Reps | Upper back; lats, biceps | Fully supported horizontal row with distinct setup | ExRx + MW |
| ✅ | Meadows Row | Upper Back / Rows | Landmine / Weight + Reps | Lats, upper back; biceps | Unilateral landmine path differs from current Landmine Row | MW + ExRx |
| ✅ | Barbell Shrug | Other Back | Barbell / Weight + Reps | Upper traps; forearms | Major trap movement absent from current library | ACE + ExRx |
| ✅ | Scapular Pull-Up | Lats / Vertical Pull | Pull-Up Bar / Bodyweight Reps | Lower traps, scapular stabilizers; lats | Distinct scapular-only range and shoulder-health use | ACE + NASM |
| 🔁 | Kroc Row | Upper Back / Rows | Dumbbell / Weight + Reps | Lats, upper back; biceps, grip | High-effort programming style of Single-Arm Dumbbell Row; add as alias, not a record | MW + ExRx |
| ⛔ | Behind-the-Neck Lat Pulldown | Lats / Vertical Pull | Cable / Weight + Reps | Lats; upper back, biceps | Low incremental catalog value and setup sensitivity for a general library | MW + ExRx |

## Shoulder candidates (8)

| Status | Candidate | Subcategory | Equipment / tracking | Muscles | Decision | Check |
| --- | --- | --- | --- | --- | --- | --- |
| ✅ | Pike Push-Up | Front Delts / Pressing | Bodyweight / Bodyweight Reps | Front delts; triceps, upper chest | Common bodyweight vertical-press progression | NASM + ACE |
| ✅ | Handstand Push-Up | Front Delts / Pressing | Bodyweight / Bodyweight Reps | Delts; triceps, traps | Distinct advanced vertical press | MW + ACE |
| ✅ | Barbell Upright Row | Side Delts | Barbell / Weight + Reps | Side delts, traps; biceps | Common vertical-pull shoulder movement absent today | MW + ExRx |
| ✅ | Cable Y Raise | Shoulder Health / Rotator Cuff | Cable / Weight + Reps | Lower traps, delts; rotator cuff | Distinct scapular-plane resistance path | ACE + MW |
| ⛔ | Dumbbell Scaption Raise | Shoulder Health / Rotator Cuff | Dumbbell / Weight + Reps | Delts, rotator cuff | Excluded intentionally: corrective/stability-oriented and overlaps retained delt/scapular-plane work | ACE + NASM |
| ⛔ | Cuban Rotation | Shoulder Health / Rotator Cuff | Dumbbell / Weight + Reps | Rotator cuff; rear delts, traps | Excluded intentionally: specialist shoulder-health movement; retained rotation coverage is sufficient | ACE + ExRx |
| ⛔ | Bradford Press | Front Delts / Pressing | Barbell / Weight + Reps | Delts; triceps | Niche continuous-path variation; not enough incremental value for the initial curated expansion | ExRx + MW |
| ⛔ | Lu Raise | Side Delts | Weight Plate / Weight + Reps | Delts, traps | Niche naming and programming value do not justify a separate initial record | MW |

## Arms candidates (8)

| Status | Candidate | Subcategory | Equipment / tracking | Muscles | Decision | Check |
| --- | --- | --- | --- | --- | --- | --- |
| ✅ | Dumbbell Preacher Curl | Biceps | Dumbbell / Weight + Reps | Biceps; brachialis | Equipment and unilateral option differ from current EZ-bar entry | MW + NASM |
| ✅ | Cable Hammer Curl | Biceps | Cable / Weight + Reps | Brachialis; biceps, forearms | Cable resistance profile distinguishes it from dumbbells | MW + ACE |
| ✅ | Zottman Curl | Biceps | Dumbbell / Weight + Reps | Biceps, forearms; brachialis | Grip changes between phases and meaningfully changes emphasis | ACE + ExRx |
| ✅ | Dumbbell Skull Crusher | Triceps | Dumbbell / Weight + Reps | Triceps | Independent loading differs from current EZ-bar record | MW + ExRx |
| ✅ | JM Press | Triceps | Barbell / Weight + Reps | Triceps; chest, front delts | Hybrid press/extension has a distinct path | ExRx + MW |
| ✅ | Wrist Roller | Forearms / Grip | Other / Weight + Reps | Forearms, grip | Distinct continuous wrist-flexion/extension apparatus | ACE + ExRx |
| 🔁 | Drag Curl | Biceps | Barbell / Weight + Reps | Biceps; forearms | Barbell Curl variation; add as a search alias rather than a second history record | MW + ExRx |
| ⛔ | Tate Press | Triceps | Dumbbell / Weight + Reps | Triceps | Excluded intentionally: uncommon specialist movement with strong practical overlap with retained triceps extensions | ExRx + MW |

## Leg candidates (8)

| Status | Candidate | Subcategory | Equipment / tracking | Muscles | Decision | Check |
| --- | --- | --- | --- | --- | --- | --- |
| ✅ | Kettlebell Goblet Squat | Compound / Mixed Legs | Kettlebell / Weight + Reps | Quads, glutes; adductors, core | Common equipment variant distinct from current dumbbell record | NASM + MW |
| ✅ | Barbell Step-Up | Glutes | Barbell / Weight + Reps | Glutes, quads; hamstrings | Different load setup from current dumbbell Step-Up | MW + ACE |
| ✅ | Pistol Squat | Compound / Mixed Legs | Bodyweight / Bodyweight Reps | Quads, glutes; core | Distinct unilateral squat with established canonical identity | NASM + ACE |
| ✅ | Reverse Nordic Curl | Quadriceps | Bodyweight / Bodyweight Reps | Quadriceps | Bodyweight knee-extension pattern absent today | MW + ACE |
| ✅ | Tibialis Raise | Calves | Bodyweight / Bodyweight Reps | Tibialis anterior | Major lower-leg movement missing from current library | MW + ACE |
| ⛔ | Donkey Calf Raise | Calves | Machine / Weight + Reps | Calves | Excluded intentionally: uncommon modern-gym setup; retained calf coverage is sufficient | ExRx + MW |
| ⛔ | Jefferson Squat | Compound / Mixed Legs | Barbell / Weight + Reps | Adductors, glutes, quads | Niche asymmetrical stance is difficult to standardize and not needed in the initial expansion | ExRx + MW |
| ✅ | Curtsy Lunge | Glutes | Dumbbell / Weight + Reps | Glutes, abductors; quads | Diagonal cross-behind path materially differs from existing reverse and lateral lunges | ACE + NASM |

## Core candidates (8)

| Status | Candidate | Subcategory | Equipment / tracking | Muscles | Decision | Check |
| --- | --- | --- | --- | --- | --- | --- |
| ✅ | Lying Leg Raise | Hip Flexion / Leg Raise | Bodyweight / Bodyweight Reps | Abs, hip flexors | Common floor-based progression absent today | MW + ACE |
| ✅ | Hollow Body Hold | Stability / Anti-Rotation | Bodyweight / Duration | Abs, core stability | Distinct isometric trunk position | ACE + NASM |
| ✅ | Bear Plank | Stability / Anti-Rotation | Bodyweight / Duration | Core stability; shoulders, quads | Distinct quadruped isometric base | ACE + NASM |
| ✅ | Plank Shoulder Tap | Stability / Anti-Rotation | Bodyweight / Reps | Core stability; shoulders, obliques | Dynamic anti-rotation progression | NASM + ACE |
| ✅ | Weighted Sit-Up | Abs / Flexion | Weight Plate / Weight + Reps | Abs; hip flexors | Loadable flexion record differs from bodyweight Sit-Up | MW + ExRx |
| ✅ | Copenhagen Plank | Stability / Anti-Rotation | Bench / Duration | Adductors, obliques; core stability | Distinct lateral-chain isometric | ACE + MW |
| ✅ | Dragon Flag | Stability / Anti-Extension | Bench / Reps | Abs and core; obliques, hip flexors, lats | Canonical advanced Core exercise; reps-only tracking with Isometric movement metadata | MW + ExRx |
| ✅ | V-Up | Abs / Flexion | Bodyweight / Reps | Abs; hip flexors | Simultaneous trunk/hip flexion differs meaningfully from Sit-Up and Leg Raise | ACE + NASM |

## Full Body candidates (8)

| Status | Candidate | Subcategory | Equipment / tracking | Muscles | Decision | Check |
| --- | --- | --- | --- | --- | --- | --- |
| ✅ | Turkish Get-Up | Other Full Body | Kettlebell / Weight + Reps | Full body; shoulders, core, glutes | Multi-stage movement with a clear canonical identity | ACE + MW |
| ✅ | Medicine Ball Slam | Compound Conditioning | Medicine Ball / Reps | Full body; core, lats, shoulders | Distinct ballistic conditioning movement | ACE + NASM |
| ✅ | Battle Rope Alternating Waves | Compound Conditioning | Battle Rope / Duration | Full body; shoulders, core | Common timed rope pattern missing today | ACE + NASM |
| ✅ | Bear Crawl | Other Full Body | Bodyweight / Distance + Time | Full body; shoulders, core, quads | Locomotion pattern needs distance/time tracking | ACE + NASM |
| ✅ | Box Jump | Compound Conditioning | Other / Reps | Quads, glutes, calves; core | Established plyometric movement | NASM + ACE |
| ✅ | Sandbag Clean | Kettlebell / Ballistic | Other / Weight + Reps | Full body; glutes, hamstrings, upper back | Distinct implement and object path | ACE + MW |
| ⛔ | Man Maker | Compound Conditioning | Dumbbell / Weight + Reps | Full body | Sequence and naming vary too much to establish one clean initial canonical record | MW + ACE |
| ✅ | Renegade Row | Other Full Body | Dumbbell / Weight + Reps | Back, core; shoulders, triceps | Plank-supported unilateral row is a distinct full-body movement | ACE + NASM |

## Cardio candidates (8)

| Status | Candidate | Subcategory | Equipment / tracking | Muscles | Decision | Check |
| --- | --- | --- | --- | --- | --- | --- |
| ✅ | Recumbent Bike | Cycling | Cardio Machine / Distance + Time | Cardiovascular system; legs | Distinct machine setup and common modality | CDC + ACE |
| ✅ | Kickboxing | Combat / Conditioning | Other / Duration | Cardiovascular system; full body | Distinct combat-conditioning activity | ACE + CDC |
| ✅ | Circuit Training | Combat / Conditioning | Other / Duration | Cardiovascular system; full body | Useful session-level cardio mode | ACE + CDC |
| ✅ | HIIT Session | Combat / Conditioning | Other / Duration | Cardiovascular system; full body | Session-level interval mode distinct from running sprints | ACE + NASM |
| ✅ | Battle Rope Intervals | Combat / Conditioning | Battle Rope / Duration | Cardiovascular system; shoulders, core | Timed conditioning use differs from rep-based strength work | ACE + NASM |
| ✅ | Sled Drag Conditioning | Combat / Conditioning | Sled / Weight + Distance | Cardiovascular system; legs, posterior chain | Distinct direction and loading from Sled Push | ACE + ExRx |
| 🔁 | Jogging | Running | Other / Distance + Time | Cardiovascular system; legs | Common intensity label for Outdoor Running, not a separate modality | CDC |
| 🔁 | Arc Trainer | Stair / Elliptical | Cardio Machine / Duration | Cardiovascular system; legs | Branded elliptical-like machine term; route search to Elliptical | ACE |

## Mobility candidates (8)

| Status | Candidate | Subcategory | Equipment / tracking | Muscles | Decision | Check |
| --- | --- | --- | --- | --- | --- | --- |
| ✅ | Cat-Cow | Thoracic / Spine | Bodyweight / Reps | Spine mobility | Common controlled spinal mobility movement | ACE + NASM |
| ✅ | Deep Squat Pry | Lower Body | Bodyweight / Duration | Hip and ankle mobility; adductors | Useful integrated lower-body mobility drill | ACE + MW |
| ✅ | Ankle CAR | Ankle / Lower Leg | Bodyweight / Reps | Ankle mobility | Controlled-articular counterpart to existing Hip CAR | ACE + NASM |
| ✅ | Shoulder CAR | Shoulder / Upper Body | Bodyweight / Reps | Shoulder mobility | Clear controlled-articular movement | ACE + NASM |
| ✅ | Thoracic Extension on Foam Roller | Thoracic / Spine | Other / Reps | Thoracic mobility | Distinct extension drill; current set emphasizes rotation | ACE + NASM |
| ✅ | Cossack Squat Mobility | Lower Body | Bodyweight / Reps | Hip mobility; adductors, ankles | Dynamic lateral lower-body mobility movement | MW + ACE |
| ⛔ | Pigeon Pose | Hip | Bodyweight / Duration | Hip mobility; glutes | Static yoga/stretch entry falls outside the intentionally movement-focused Mobility scope | ACE + MW |
| ⛔ | Foam Roll IT Band | Lower Body | Other / Duration | Recovery / lateral thigh | Recovery modality, not a Mobility exercise record | NASM + ACE |

# Phase 1C resolution

## Seven existing findings resolved

1. **Power Clean versus Barbell Clean — separate canonical records.** A full Barbell Clean receives the bar in a full squat, while a Power Clean receives it above parallel. That receiving mechanic is meaningful for history, setup, and training purpose. Keep `Barbell Clean`; remove `Power Clean` as its alias; add `Power Clean` as a Phase 1D canonical Full Body / Kettlebell & Ballistic record.
2. **Barbell Good Morning — move to Legs.** Queue `Back → Legs`, `Lower Back → Hamstrings`, primary `Hamstrings`, secondary `Glutes` and `Spinal Erectors`, movement `Hinge`. It remains a posterior-chain exercise, but Legs/Hamstrings is the clearest simple discovery path.
3. **Plate Pinch Hold — use Isometric.** Queue one reusable `Isometric` movement pattern. It also accurately describes existing Plank, Side Plank, Wall Sit, and future static holds; this is a useful minimal extension rather than one-off taxonomy.
4. **45-Degree Back Extension — use Back Extension Bench.** Queue a reusable `Back Extension Bench` equipment value for the 45-degree station, commonly called a hyperextension bench or Roman-chair-style bench. It can be reused by related future records without turning every manufacturer name into equipment.
5. **Stationary and Spin Bike — duration must be valid alone.** Queue `duration_optional_distance` as a tracking semantic for indoor cycling: duration is required; distance, speed, resistance, and other machine metrics are optional. The existing cardio session model already permits optional distance. Treadmill, outdoor, track, and trail records retain `distance_duration`.
6. **Dumbbell Pullover — one Back record.** Keep one canonical `Dumbbell Pullover` under Back with Lats primary and General Chest/Triceps secondary. It is not split by program emphasis.
7. **Cable Fly versus Cable Crossover — one canonical record.** Keep `Cable Fly` canonical and `Cable Crossover` as its alias. The common standing crossover is a cable-fly family variation, but not sufficiently distinct to fragment workout history at this stage.

## Approved existing dataset corrections

These decisions were queued during Phase 1D and are now applied in dataset version 2.

| Exercise / model | Phase 1D correction | Reason |
| --- | --- | --- |
| Barbell Clean | Remove alias `Power Clean`; add Power Clean as a separate canonical record | Full and power clean use meaningfully different receiving mechanics |
| Barbell Good Morning | Category Back → Legs; region Lower Back → Hamstrings; primary Lower Back → Hamstrings; secondary becomes Glutes, Spinal Erectors | Clearer posterior-chain discovery and metadata |
| `MovementPattern` | Add `Isometric` | Reusable for Plate Pinch Hold, Plank, Side Plank, Wall Sit, and future holds |
| Plate Pinch Hold | Movement pattern Carry → Isometric | Static grip hold is not locomotion |
| `ExerciseEquipment` | Add `Back Extension Bench` | Clear reusable terminology for a 45-degree hyperextension/Roman-chair-style station |
| 45-Degree Back Extension | Equipment Machine → Back Extension Bench | More accurate equipment metadata |
| `ExerciseTrackingType` | Add `duration_optional_distance` | Indoor cardio can be logged honestly when distance is unavailable |
| Stationary Bike and Spin Bike | Tracking `distance_duration` → `duration_optional_distance` | Distance is optional, not required |

## Yellow candidate decisions

All 18 Phase 1B yellow candidates are resolved: 7 approved, 4 converted to aliases, 7 excluded, and 0 unresolved. The candidate tables now show their final one-status decisions.

### Phase 1D expansion target

```text
Current shipped dataset                         198
Previously approved Phase 1B candidates         54
Newly approved former-yellow candidates           7
Power Clean from finding resolution                1
---------------------------------------------------
Phase 1D approved canonical additions             62
Expected built-in dataset after Phase 1D         260
```

## Combined-set collision audit

The Phase 1D audit combines all 198 current canonical records with the 62 planned canonical additions. It reports:

- 0 exact or normalized canonical-name collisions
- 0 planned alias-target or alias/canonical-name conflicts
- 17 alias additions planned: 13 existing Phase 1B proposals plus Kroc Row, Drag Curl, Jogging, and Arc Trainer
- `Power Clean` explicitly removed as an alias before being added as a canonical record

The manual semantic review also found no accidental duplicate equipment variants in the planned set. The closest potential duplicates were resolved as aliases (Kroc Row, Drag Curl, Jogging, Arc Trainer) or excluded (Man Maker, Jefferson Squat, Bradford Press, Lu Raise, Behind-the-Neck Lat Pulldown, Pigeon Pose, Foam Roll IT Band).

# Phase 1D catalog-completeness research

This second research pass compares the 198 shipped records and the 62 already approved Phase 1D records against MuscleWiki, ExRx, ACE, NASM, and specialist cardio references. It is deliberately practical rather than encyclopedic: equipment and movement-path differences that change how users log a movement are retained; branding, minor grip changes, and programming formats are merged or excluded.

## Completeness-pass canonical records

Phase 1D produced 147 research-approved candidates. Phase 1E excluded Prone W Raise, Reverse Hyperextension Hold, and Rebounding from this group, then integrated the remaining 144. The earlier 62-candidate queue similarly lost five final-curation exclusions, producing 57 retained records and 201 integrated additions overall. During integration, Barbell Good Morning moved from Back to Legs as approved; Barbell High Pull is therefore catalogued under Back for its upper-trap emphasis, while Kettlebell Deadlift is under Full Body, preserving the final user-approved category totals without adding or removing records.

| Category | Newly approved canonical candidates | Research basis |
| --- | --- | --- |
| Chest (10) | Decline Machine Press; Smith Machine Decline Press; Dumbbell Fly; Incline Dumbbell Fly; Decline Dumbbell Fly; Cable Chest Press; Suspension Chest Press; Ring Push-Up; Ring Dip; Deficit Push-Up | MuscleWiki, ACE, NASM, ExRx |
| Back (16 included) | Weighted Pull-Up; Weighted Chin-Up; Band-Assisted Pull-Up; Machine Pullover; Single-Arm Cable Row; High Row Machine; Suspension Row; Resistance Band Row; Resistance Band Lat Pulldown; Resistance Band Pull-Apart; Reverse Hyperextension; Dumbbell Shrug; Cable Shrug; Chest-Supported Machine Row; Seated Cable High Row; Barbell High Pull | MuscleWiki, ACE, NASM, ExRx |
| Shoulders (9 included) | Single-Arm Landmine Press; Seated Dumbbell Shoulder Press; Band Internal Rotation; Cable Internal Rotation; Prone Y Raise; Prone T Raise; Serratus Push-Up; Leaning Dumbbell Lateral Raise; Single-Arm Cable Lateral Raise | ACE, NASM, MuscleWiki, ExRx |
| Arms (14) | Machine Biceps Curl; Cable Preacher Curl; Suspension Biceps Curl; Incline Hammer Curl; Cable Reverse Curl; Cable Skull Crusher; Single-Arm Overhead Cable Triceps Extension; Machine Triceps Extension; Machine Dip; Suspension Triceps Extension; Bodyweight Triceps Extension; Dead Hang; Hand Gripper; Farmer Hold | MuscleWiki, ACE, NASM, ExRx |
| Legs (26 included) | Pendulum Squat; Front-Foot-Elevated Split Squat; Barbell Reverse Lunge; Barbell Walking Lunge; Barbell Glute Bridge; Machine Hip Thrust; Machine Glute Kickback; Frog Pump; B-Stance Hip Thrust; Resistance Band Hip Abduction; Side-Lying Hip Abduction; Clamshell; Cable Hip Adduction; Stiff-Leg Deadlift; Trap Bar Deadlift; Landmine Romanian Deadlift; Landmine Squat; Landmine Reverse Lunge; Dumbbell Split Squat; Barbell Bulgarian Split Squat; Single-Leg Lying Leg Curl; Single-Leg Seated Leg Curl; Slider Hamstring Curl; Suspension Hamstring Curl; Smith Machine Calf Raise; Seated Tibialis Raise | MuscleWiki, ACE, NASM, ExRx |
| Core (13 included) | Toes-to-Bar; Body Saw; Stability Ball Rollout; Stir the Pot; Long-Lever Plank; Cable Pallof Hold; Half-Kneeling Pallof Press; Suitcase March; L-Sit; Hanging Knee Raise with Twist; Cable Reverse Wood Chop; Decline Sit-Up; GHD Sit-Up | ACE, NASM, MuscleWiki, ExRx |
| Full Body (19) | Barbell Snatch; Power Snatch; Clean and Jerk; Barbell Clean and Press; Kettlebell Snatch; Kettlebell Deadlift; Kettlebell Front Rack Carry; Kettlebell Push Press; Kettlebell Thruster; Dumbbell Clean; Dumbbell Snatch; Dumbbell Clean and Press; Trap Bar Carry; Overhead Carry; Front Rack Carry; Zercher Carry; Sandbag Carry; Sled Pull; Muscle-Up | ACE, NASM, MuscleWiki, ExRx |
| Cardio (21 included) | Hill Running; Treadmill Incline Running; Rucking; Mountain Biking; BikeErg; Hand Cycle; Outdoor Rowing; Kayaking; Canoeing; Vertical Climber; Stepper; Double Unders; Shadow Boxing; Shuttle Run; Mountain Climbers; Jumping Jacks; Freestyle Swimming; Breaststroke Swimming; Backstroke Swimming; Butterfly Swimming; Battle Rope Double Waves | CDC, ACE, NASM, Concept2, manufacturer-neutral modality references |
| Mobility (16) | Scapular CAR; Wrist CAR; Neck CAR; Quadruped Thoracic Rotation; Prone Cobra; Half-Kneeling Hip Flexor Mobilization; Hip Airplane; Shin Box Transition; Banded Ankle Mobilization; Calf Rock; Hamstring Walkout; Half-Kneeling Adductor Mobilization; Sumo Squat Hold; Lateral Squat Shift; Bear Sit Rotation; Standing Hip CAR | ACE, NASM, MuscleWiki |

## Completeness assessment

The research-complete baseline was 407 records. Phase 1E removed eight deliberately lower-priority candidates and shipped 399 records while retaining High confidence in every category.

| Category | Final version 2 count | Confidence | Remaining boundary/gap |
| --- | ---: | --- | --- |
| Chest | 39 | High | Ring and suspension work are included; micro-angles and band duplicates remain intentionally merged. |
| Back | 47 | High | Covers vertical pulls, rows, pullover, traps, bands, suspension, and posterior-chain back work. |
| Shoulders | 33 | High | Covers pressing, all delt heads, and a restrained rotator-cuff/scapular group. |
| Arms | 48 | High | Covers common cable, machine, suspension, bodyweight, and grip choices without handle-only splits. |
| Legs | 71 | High | Broad squat, hinge, unilateral, curl, hip, calf, tibialis, landmine, and machine coverage. |
| Core | 41 | High | Covers anti-extension, loaded/advanced flexion, anti-rotation, and lateral control. |
| Full Body | 39 | High | Covers practical Olympic-lift, kettlebell, carry, sled, and calisthenic records; workout complexes stay excluded. |
| Cardio | 47 | High | Covers common running, walking, cycling, erg, aquatic, combat, climbing, and conditioning modalities. |
| Mobility | 34 | High | Purposeful joint/spine mobility is covered; broad static-stretch and recovery inventories remain outside scope. |
| **Total** | **399** | **High** | Further additions should require a real logging or movement-identity gap. |

## New aliases and intentional merges

These 20 search terms do not create records. They are queued in addition to the 17 Phase 1D alias additions already documented.

| Alias / merged term | Canonical record | Decision |
| --- | --- | --- |
| TRX Chest Press | Suspension Chest Press | Suspension-brand naming variant |
| Ring Chest Press | Ring Push-Up | Same practical pushing record for initial history |
| TRX Row | Suspension Row | Suspension-brand naming variant |
| Band Row | Resistance Band Row | Shortened name |
| Band Pulldown | Resistance Band Lat Pulldown | Shortened name |
| Pull-Apart | Resistance Band Pull-Apart | Common shorthand |
| Rear Delt Machine | Reverse Pec Deck | Machine naming variant |
| Landmine One-Arm Press | Single-Arm Landmine Press | Word-order variant |
| Triceps Extension Machine | Machine Triceps Extension | Word-order variant |
| Triceps Dip Machine | Machine Dip | Common equipment label |
| Grip Trainer | Hand Gripper | Common equipment label |
| Hex Bar Deadlift | Trap Bar Deadlift | Equivalent equipment term |
| Lying Hamstring Curl | Lying Leg Curl | Common explicit naming |
| TRX Hamstring Curl | Suspension Hamstring Curl | Suspension-brand naming variant |
| Ruck March | Rucking | Common name |
| Indoor Cycling | Spin Bike | Modality naming variant |
| Stationary Erg Bike | BikeErg | Common erg-specific phrasing |
| CrossFit Double Unders | Double Unders | Branding is not canonical naming |
| Shadowboxing | Shadow Boxing | Spacing variant |
| Jump Rope Double Under | Double Unders | Singular wording variant |

## New intentional exclusions

| Excluded / merged item | Rationale |
| --- | --- |
| Wide-Grip Bench Press | Grip-width change, not a separate history identity from Barbell Bench Press |
| Larsen Press | Useful specialty variation but not enough general-user logging value for the finalized baseline |
| Guillotine Press | Niche setup with little incremental catalog value |
| Behind-the-Neck Press | Setup-sensitive variant; current pressing coverage is sufficient |
| Cheat Curl | Execution style, not an exercise identity |
| Spider Curl with Dumbbells | Minor equipment variation of the existing Spider Curl |
| Sissy Squat Machine | Manufacturer/setup variant of Sissy Squat |
| V-Squat | Manufacturer-family wording; use Hack Squat or Pendulum Squat based on the machine path |
| Reverse Hyper Machine brand names | Use Reverse Hyperextension |
| Landmine T-Bar Row | Merged with existing Landmine Row; no second history record |
| Kettlebell Complexes | Programming sequences, not stable single exercises |
| CrossFit named workouts | Workouts, not canonical exercises |
| Road Cycling | Alias-level subset of Outdoor Cycling |
| Assault Runner | Brand/device variant of Treadmill Running |
| StepMill | Alias-level form of Stair Climber |
| Arc Trainer | Already an Elliptical alias |
| Muay Thai | Useful sport but not sufficiently distinct from Kickboxing for this general cardio history model |
| Sled Drag backward/forward labels | Direction is workout detail; retain Sled Drag Conditioning / Sled Pull as canonical modes |
| Foam rolling variants | Recovery tools, not Exercise Dex mobility records |
| Static pose inventories | Avoid turning Mobility into an unbounded stretch directory |

# Cardio Modality Audit

## Canonical cardio scope and distinctions

| Modality family | Canonical records after finalized integration | Why distinct |
| --- | --- | --- |
| Running / walking | Outdoor, Treadmill, Track, Trail, Sprint Intervals, Hill Running, Treadmill Incline Running, Outdoor Walking, Treadmill Walking, Incline Treadmill Walking, Hiking, Rucking, Shuttle Run | Surface, incline, loaded-walk, and interval identities change useful history and metrics. |
| Cycling | Outdoor Cycling, Mountain Biking, Stationary Bike, Spin Bike, Recumbent Bike, Air Bike, BikeErg, Hand Cycle | Outdoor terrain, recumbent/air/erg hardware, and hand-driven cycling have meaningful session and metric differences. |
| Rowing / water | Rowing Machine, Outdoor Rowing, SkiErg, Swimming, Freestyle Swimming, Breaststroke Swimming, Backstroke Swimming, Butterfly Swimming, Kayaking, Canoeing | Ergs and strokes have distinct machine metrics or history value. Generic Swimming remains for mixed/open sessions. |
| Climbers / machines | Elliptical, Stair Climber, Vertical Climber, Stepper | Movement path and equipment differ materially; brand labels remain aliases. Rebounding was excluded in final curation. |
| Combat / rope / conditioning | Heavy Bag Boxing, Kickboxing, Shadow Boxing, Battle Rope Intervals, Battle Rope Double Waves, Circuit Training, HIIT Session, Sled Drag Conditioning, Sled Pull, Mountain Climbers, Jumping Jacks | These are repeatable timed activities; arbitrary workout complexes remain excluded. |
| Jump rope | Jump Rope, Double Unders | Double Unders have an established, countable skill identity; interval prescriptions do not become records. |

## Future cardio tracking-field architecture

Do not add a large tracking-enum matrix. Retain a small semantic type per activity, then allow optional modality fields on a future `CardioSession` detail structure.

| Group | Required base fields | Optional useful fields |
| --- | --- | --- |
| Distance locomotion (run, walk, hike, cycle, row, swim, paddle) | Duration, distance | Pace, speed, elevation/incline, heart rate, calories, route/surface |
| Indoor machine (bike, stair, elliptical, vertical climber) | Duration | Distance, resistance, incline, watts, cadence, heart rate, calories |
| Concept2-style erg (row, ski, BikeErg) | Duration or distance | Pace/split, watts, stroke rate/cadence, damper, calories, heart rate |
| Rounds/conditioning (boxing, ropes, HIIT, circuit, jump rope) | Duration | Rounds, work/rest intervals, reps, heart rate, calories |
| Loaded movement (sled, ruck, carries) | Duration or distance | Load, distance, pace, terrain, rounds |

Concept2’s current monitor and documentation explicitly support elapsed time, distance, pace, watts, calories, and stroke rate/cadence; this validates fields as optional details rather than separate exercises. Do not add separate records for every interval prescription.

# Final Dataset Expansion Queue

## Phase 1E integration result

- **Research-complete baseline:** 198 existing + 209 candidates = 407.
- **Final curation:** 8 lower-priority candidates excluded intentionally.
- **Integrated additions:** 201.
- **Dataset version 2:** 399 canonical built-ins and 91 aliases.

## Final-curation exclusions (8)

| Status | Researched candidate | Final reason |
| --- | --- | --- |
| ⛔ Excluded intentionally | Reverse-Grip Bench Press | Uncommon specialist pressing variation; extensive retained chest pressing coverage. |
| ⛔ Excluded intentionally | Tate Press | Comparatively uncommon specialist triceps movement with strong logging overlap. |
| ⛔ Excluded intentionally | Cuban Rotation | Specialist shoulder-health movement; retained rotation coverage is strong. |
| ⛔ Excluded intentionally | Dumbbell Scaption Raise | Corrective/stability-oriented and overlaps retained delt/scapular-plane work. |
| ⛔ Excluded intentionally | Donkey Calf Raise | Uncommon modern-gym setup with limited equipment availability. |
| ⛔ Excluded intentionally | Reverse Hyperextension Hold | Isometric variation of Reverse Hyperextension; no separate history identity needed. |
| ⛔ Excluded intentionally | Prone W Raise | Specialist rehab/stability variation; Y/T/external-rotation coverage is sufficient. |
| ⛔ Excluded intentionally | Rebounding | Specialist mini-trampoline modality with limited general availability. |

## Approved Canonical Additions

All 201 retained additions are integrated and marked ✅ Included in the research tables/lists. Approved pending canonical additions: **0**.

## Needs Final Review

None. Every item discovered in this pass is classified as an approved canonical record, alias, or exclusion. Future proposals must clear the same duplicate and logging-value test.

## New Aliases

- 17 previously planned Phase 1D aliases, plus 20 aliases/merges from this pass.
- Final integrated aliases: **91** (54 retained version 1 aliases after removing Power Clean, plus 37 approved additions).

## Existing Record Corrections

The seven Phase 1C corrections are integrated: Power Clean promotion, Good Morning reclassification, Isometric, Back Extension Bench, indoor-bike optional-distance tracking, and the Pullover/Cable Fly decisions.

## Integrated equipment / model changes

| Recommended addition | Used by / reason |
| --- | --- |
| `Back Extension Bench` | 45-Degree Back Extension and future related records; already approved in Phase 1C. |
| `Trap Bar` | Trap Bar Deadlift and Trap Bar Carry. |
| `Rings` | Ring Push-Up and Ring Dip. |
| `Sandbag` | Sandbag Clean and Sandbag Carry. |
| `GHD` | GHD Sit-Up, and future GHD variants if deliberately added. |
| `duration_optional_distance` tracking semantic | Indoor cycling and other cardio where duration is always known but distance is optional. |
| `Isometric`, `Olympic Lift / Explosive`, and `Crawl` movement patterns | Static holds, Olympic/power work, and Bear Crawl-style locomotion without creating one-off patterns. |

# Alias inventory

Dataset version 2 carries 91 normalized, non-conflicting alias strings. The historical and proposed tables below preserve decision provenance; every approved mapping is now integrated. Aliases improve search and do not create records.

## Version 1 source aliases (55; 54 retained)

| Alias | Canonical record |
| --- | --- |
| Bench Press | Barbell Bench Press |
| Dumbbell Chest Press | Dumbbell Bench Press |
| Incline Bench Press | Incline Barbell Bench Press |
| Incline Dumbbell Press | Incline Dumbbell Bench Press |
| Decline Bench Press | Decline Barbell Bench Press |
| Decline Dumbbell Press | Decline Dumbbell Bench Press |
| Cable Crossover | Cable Fly |
| Machine Fly | Pec Deck |
| Pushup | Push-Up |
| Hex Press | Dumbbell Squeeze Press |
| Svend Press | Plate Pinch Press |
| Lat Pull Down | Lat Pulldown |
| Underhand Lat Pulldown | Reverse-Grip Lat Pulldown |
| Pullup | Pull-Up |
| Chinup | Chin-Up |
| Barbell Row | Barbell Bent-Over Row |
| Dumbbell Row | Single-Arm Dumbbell Row |
| Bodyweight Row | Inverted Row |
| Hyperextension | 45-Degree Back Extension |
| Good Morning | Barbell Good Morning |
| Military Press | Barbell Overhead Press |
| DB Lateral Raise | Dumbbell Lateral Raise |
| Side Raise | Dumbbell Lateral Raise |
| Reverse Fly | Dumbbell Rear Delt Fly |
| EZ Curl | EZ-Bar Curl |
| Triceps Pressdown | Cable Triceps Pushdown |
| Lying Triceps Extension | EZ-Bar Skull Crusher |
| Barbell Back Squat | Back Squat |
| RDL | Romanian Deadlift |
| Dumbbell RDL | Dumbbell Romanian Deadlift |
| Single-Leg RDL | Single-Leg Romanian Deadlift |
| Nordic Curl | Nordic Hamstring Curl |
| GHR | Glute-Ham Raise |
| Hip Thrust | Barbell Hip Thrust |
| Rear-Foot-Elevated Split Squat | Bulgarian Split Squat |
| Front Plank | Plank |
| Deadlift | Conventional Deadlift |
| Power Clean | Barbell Clean — historical version 1 alias, removed in version 2 because Power Clean is canonical |
| Farmer’s Walk | Farmer Carry |
| Road Running | Outdoor Running |
| Sprints | Sprint Intervals |
| Walking | Outdoor Walking |
| Incline Walking | Incline Treadmill Walking |
| Exercise Bike | Stationary Bike |
| Assault Bike | Air Bike |
| Indoor Rowing | Rowing Machine |
| Cross Trainer | Elliptical |
| StairMaster | Stair Climber |
| Skipping Rope | Jump Rope |
| Ski Ergometer | SkiErg |
| Boxing | Heavy Bag Boxing |
| Band Pass-Through | Band Shoulder Dislocate |
| Wall Slide | Wall Shoulder Slide |
| 90-90 Hip Switch | 90/90 Hip Switch |
| Hip Controlled Articular Rotation | Hip CAR |

## Phase 1B proposed aliases (13; integrated)

| Proposed alias | Canonical record | Reason |
| --- | --- | --- |
| Seated Chest Press | Machine Chest Press | Common machine label |
| Incline Smith Press | Smith Machine Incline Press | Common shortened name |
| Incline Bench Dumbbell Row | Chest-Supported Dumbbell Row | Common setup-based name |
| Rope Pressdown | Rope Triceps Pushdown | Common gym terminology |
| Cable Overhead Extension | Overhead Cable Triceps Extension | Common word-order variant |
| Single-Leg Standing Hamstring Curl | Standing Single-Leg Curl | Explicit muscle naming |
| Wall Squat Hold | Wall Sit | Common naming variant |
| Hanging Leg Tuck | Hanging Knee Raise | Common bodyweight terminology |
| Landmine Twist | Landmine Rotation | Common naming variant |
| Barbell Deadlift | Conventional Deadlift | Equipment-explicit search term |
| Heavy Bag Work | Heavy Bag Boxing | Common session label |
| Knee-to-Wall Ankle Dorsiflexion | Knee-to-Wall Ankle Mobilization | Common clinical/gym search phrase |
| World’s Greatest Mobility Drill | World’s Greatest Stretch | Common naming variant |

# Intentional exclusions (12)

These decisions prevent taxonomy splits and naming inflation. Some excluded names remain suitable aliases.

| Excluded separate record | Reason |
| --- | --- |
| ⛔ Male Push-Up | FitDex has no gender-specific exercise library; use Push-Up |
| ⛔ Female Push-Up | FitDex has no gender-specific exercise library; use the relevant canonical push-up variation |
| ⛔ Beginner Bench Press | Experience level is metadata/programming, not a different exercise |
| ⛔ Pro Bench Press | Experience level is metadata/programming, not a different exercise |
| ⛔ Standing Cable Curl | No meaningful distinction from Cable Curl without a changed setup/path; use as alias if needed |
| ⛔ Cable Standing Curl | Word-order duplicate of Standing Cable Curl/Cable Curl |
| ⛔ Machine Pec Fly | Already represented by Pec Deck with `Machine Fly` alias |
| ⛔ Assault Bike | Already represented as an alias of Air Bike |
| ⛔ StairMaster | Brand/common-name alias of Stair Climber |
| ⛔ Jogging | Intensity label under running unless a future tracking requirement proves otherwise |
| ⛔ Behind-the-Neck Lat Pulldown | Low incremental catalog value and setup sensitivity for a general library |
| ⛔ Smith Machine Barbell Bench Press | Redundant naming for Smith Machine Bench Press |

# Existing dataset audit findings

## Confirmed clean

- No duplicate canonical names.
- No duplicate deterministic IDs.
- No normalized canonical-name collisions.
- No missing categories, tracking types, equipment, primary muscles, or muscle regions.
- All nine approved top-level categories have records.
- Cardio records avoid `Weight + Reps`.

## Resolved in Phase 1C; source changes deferred to Phase 1D

The final decisions, supporting rationale, and Phase 1D implementation queue are recorded in [Phase 1C resolution](#phase-1c-resolution) above. No data source was changed during Phase 1C.

# Cardio audit notes

- Current coverage is strong for running, walking, cycling, rowing, SkiErg, elliptical/stairs, swimming, jump rope, and heavy-bag boxing.
- Highest-priority gaps are Recumbent Bike, Kickboxing, Circuit Training, a generic HIIT session, Battle Rope Intervals, and Sled Drag Conditioning.
- `Jogging` remains a naming/intensity question rather than an approved separate record.
- Marketing names should map to canonical modalities: `Assault Bike` → Air Bike and `StairMaster` → Stair Climber.
- Cardio should retain modality-specific fields later: duration, distance, pace/speed, resistance/incline, calories, and heart rate where available.

# Mobility audit notes

- Current coverage is intentionally compact and useful: shoulder, thoracic rotation, hip, ankle, and full-body drills.
- The clearest gaps are spinal flexion/extension, integrated lower-body mobility, ankle/shoulder CARs, and thoracic extension.
- Static yoga poses and recovery/foam-rolling entries require a policy decision before inclusion; Mobility should not become a generic stretch dump.

# Research sources

Research was limited to movement identity, common names, equipment, muscle-group classification, and whether variations are materially distinct. No instructions, descriptions, images, video links, or proprietary datasets were copied.

## MuscleWiki

- URL: https://musclewiki.com/exercises
- Used for broad exercise discovery, muscle/equipment browsing, common naming, and variation cross-checking.
- Caution: MuscleWiki's prose, demonstrations, images, video, and API data are not bundled or reproduced. Its visible male/female selector does not influence FitDex's universal taxonomy.

## American Council on Exercise (ACE) Exercise Library

- URL: https://www.acefitness.org/resources/everyone/exercise-library/
- Used to cross-check broad body-part, equipment, integrated/full-body, mobility, and common exercise classifications.
- Caution: ACE descriptions and media are copyrighted and are not copied.

## National Academy of Sports Medicine (NASM) Exercise Library

- URL: https://www.nasm.org/resource-center/exercise-library
- Used to cross-check canonical names, equipment, common progressions, integrated exercises, and mobility/recovery boundaries.
- Caution: NASM instructions, descriptions, images, and videos are not copied.

## ExRx

- URL: https://exrx.net/Lists/Directory
- Used through publicly indexed individual exercise references to cross-check canonical resistance-exercise names, mechanics, equipment, and muscle classifications. The directory itself was unavailable to the research client.
- Caution: ExRx instructions and media are not copied.

## Concept2

- URL: https://www.concept2.com/ergs/skierg
- Used to verify SkiErg as a distinct cardio-machine modality with time, distance, pace, calories, and power metrics.
- Caution: Product copy and media are not reproduced; the canonical catalog name remains equipment-neutral where possible.

## CDC physical activity references

- URL: https://www.cdc.gov/physical-activity-basics/adding-adults/what-counts.html
- Used only to cross-check broad aerobic activity identities such as walking, running, cycling, and swimming.
- Caution: This is not an exercise-instruction source and is not used for medical advice or individual programming.

# Next review pass

1. Perform final Exercise Dex visual/device QA with the integrated 399-record dataset.
2. Preserve the version 2 validator and catalog audit as gates for future catalog changes.
3. Keep sprites, advanced custom-exercise UX, and workout logging as separate future phases.
