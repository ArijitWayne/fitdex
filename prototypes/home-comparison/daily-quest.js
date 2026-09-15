export function renderDailyQuest() {
  return `
    <article class="phone daily-quest" aria-labelledby="daily-title">
      <header class="phone-header">
        <img class="brand-icon spartan-brand" src="/branding/fitdex-icon-spartan.png" alt="FitDex" />
        <img class="brand-icon amazonian-brand" src="/branding/fitdex-icon-amazonian.png" alt="FitDex" />
        <strong>FitDex</strong>
        <button class="icon-action" data-action="Settings preview only" aria-label="Settings">⚙</button>
      </header>

      <div class="daily-content">
        <section class="identity-strip">
          <img src="/avatars/spartans/aster.png" alt="Aster, Spartan Vanguard" />
          <div class="identity-copy">
            <span class="kicker">Spartan Vanguard</span>
            <h1 id="daily-title">Ready, Aster?</h1>
            <div class="xp-line"><span><i style="width: 68%"></i></span><small>Level 18 · 6,840 / 7,500 XP</small></div>
          </div>
          <button class="streak-token" data-action="7-day streak detail preview"><b>7</b><span>day streak</span></button>
        </section>

        <section class="quest-focus">
          <div class="quest-marker"><span>Today’s quest</span><b>Ready</b></div>
          <p class="quest-day">Tuesday · Strength campaign</p>
          <h2>Push Day</h2>
          <p class="quest-summary">6 exercises · 18 planned sets · about 52 min</p>
          <div class="quest-route" aria-label="Workout sequence"><span>Bench Press</span><i></i><span>Shoulder Press</span><i></i><span>+4</span></div>
          <button class="quest-cta" data-action="Push Day would start here"><span>Begin Push Day</span><small>Start today’s planned workout</small></button>
          <button class="quiet-action" data-action="Routine choice preview">Choose another routine</button>
        </section>

        <section class="daily-vitals" aria-label="Today’s supporting status">
          <button data-action="Nutrition detail opened" data-detail="daily-nutrition" aria-expanded="false"><span>Provisions</span><strong>1,460 / 2,100</strong><small>112g protein</small></button>
          <button data-action="Weekly plan opened" data-detail="daily-week" aria-expanded="false"><span>Quest chain</span><strong>3 of 5</strong><small>Next: Pull Day</small></button>
          <button data-action="Progress detail opened" data-detail="daily-progress" aria-expanded="false"><span>Momentum</span><strong>+12%</strong><small>volume this month</small></button>
        </section>
        <div class="prototype-detail" id="daily-nutrition" hidden><strong>Nutrition today</strong><span>640 kcal remain · 38g protein to target</span></div>
        <div class="prototype-detail" id="daily-week" hidden><strong>This week</strong><span>Mon Push · Tue Rest · Wed Pull · Fri Legs</span></div>
        <div class="prototype-detail" id="daily-progress" hidden><strong>Recent progress</strong><span>Bench Press PR · 82.5 kg · 2 days ago</span></div>

        <button class="music-ribbon" data-action="Battle Music control preview"><span>♫</span><span><small>Battle Music</small><strong>Warrior</strong></span><b>Playing</b><i>Ⅱ</i></button>
      </div>

      <nav class="phone-nav" aria-label="Prototype app navigation"><button class="is-active" data-action="Home"><b>⌂</b><span>Home</span></button><button data-action="Workout"><b>⚔</b><span>Workout</span></button><button data-action="Food"><b>◇</b><span>Food</span></button><button data-action="Progress"><b>↗</b><span>Progress</span></button><button data-action="Journal"><b>▤</b><span>Journal</span></button></nav>
    </article>`
}
