# FitDex avatar assets

Add approved transparent pixel-art character assets at these paths:

- `spartans/aster.png`
- `spartans/leonidas.png`
- `spartans/brasidas.png`
- `amazonians/artemis.png`
- `amazonians/athena.png`
- `amazonians/hippolyta.png`

PNG is currently referenced by the avatar catalog. Keep a consistent canvas size and use transparency; the UI renders artwork with `object-fit: contain` and falls back safely while a file is unavailable.
