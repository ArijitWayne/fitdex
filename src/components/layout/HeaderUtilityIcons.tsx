interface HeaderUtilityIconProps {
  className?: string
}

export function RetroSunIcon({ className }: HeaderUtilityIconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path className="retro-sun-rays retro-sun-shadow" d="M10 1h4v3h-4zM10 20h4v3h-4zM1 10h3v4H1zM20 10h3v4h-3zM3 3h3v3H3zM18 3h3v3h-3zM3 18h3v3H3zM18 18h3v3h-3z" /><path className="retro-sun-core" d="M9 5h6v2h2v2h2v6h-2v2h-2v2H9v-2H7v-2H5V9h2V7h2z" /><path className="retro-sun-highlight" d="M9 7h4v2H9zM7 9h3v3H7zM11 6h3v2h-3z" /><path className="retro-sun-shade" d="M15 10h3v5h-2v2h-5v-2h4z" /></svg>
}

export function RetroMoonIcon({ className }: HeaderUtilityIconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path className="retro-moon-body" d="M8 2h8v2h3v3h2v10h-2v3h-3v2H8v-2H5v-3H3V7h2V4h3z" /><path className="retro-moon-shade" d="M16 5h3v3h2v9h-2v3h-3v2h-3v-3h2v-2h2v-3h2V9h-2V7h-3z" /><path className="retro-moon-highlight" d="M8 5h6v2H8zM6 7h3v3H6z" /><path className="retro-moon-crater-mid" d="M11 8h4v2h2v3h-2v2h-4v-2H9v-3h2zM6 14h3v2h2v3H8v-1H6z" /><path className="retro-moon-crater-deep" d="M12 10h3v3h-3zM8 15h2v2H8zM15 17h2v2h-2zM6 10h2v2H6z" /></svg>
}

export function RetroGearIcon({ className }: HeaderUtilityIconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><g className="retro-gear-rotor"><path className="retro-gear-shadow" d="M9 1h6v3h3l2-2 3 3-2 2v3h3v5h-3v3l2 2-3 3-2-2h-3v3H9v-3H6l-2 2-3-3 2-2v-3H0v-5h3V7L1 5l3-3 2 2h3z" /><path className="retro-gear-body" d="M9 2h6v3h3l2-2 2 2-2 2v3h3v4h-3v3l2 2-2 2-2-2h-3v3H9v-3H6l-2 2-2-2 2-2v-3H1v-4h3V7L2 5l2-2 2 2h3z" /><path className="retro-gear-highlight" d="M9 3h6v2h-2V4h-3v2H7V5h2zM4 9h2v3H4zM18 8h2v3h-2z" /><path className="retro-gear-hub" d="M9 8h6v2h2v4h-2v2H9v-2H7v-4h2z" /><path className="retro-gear-hole" d="M10 10h4v4h-4z" /></g></svg>
}
