export function renderHandheldCommand() {
  return `
    <article class="phone handheld" aria-labelledby="command-title">
      <header class="command-statusbar"><span>FITDEX // FIELD UNIT</span><span>TUE 17 SEP</span></header>
      <section class="command-player">
        <img src="/avatars/spartans/aster.png" alt="Aster, Spartan Vanguard" />
        <div><span>PLAYER 01</span><h1 id="command-title">ASTER</h1><p>LV 18 · VANGUARD</p></div>
        <div class="command-rank"><b>VII</b><span>Bronze</span></div>
      </section>
      <div class="command-xp"><span>XP</span><i><b style="width: 68%"></b></i><strong>6,840</strong></div>

      <section class="mission-console">
        <p class="console-label">Active command</p>
        <div class="console-screen">
          <span class="console-caret">▶</span>
          <div><small>TODAY’S MISSION · READY</small><h2>PUSH DAY</h2><p>06 exercises / 18 sets / ~52 min</p></div>
        </div>
        <button class="command-cta" data-action="Push Day would start here">EXECUTE MISSION <span>START</span></button>
      </section>

      <nav class="command-menu" aria-label="Home command menu">
        <button class="is-selected" data-action="Mission selected"><span>01</span><b>Today’s Mission</b><small>Push Day · Ready</small><i>›</i></button>
        <button data-action="Nutrition command opened" data-detail="command-nutrition" aria-expanded="false"><span>02</span><b>Nutrition</b><small>1,460 kcal · 112g protein</small><i>›</i></button>
        <button data-action="Progress command opened" data-detail="command-progress" aria-expanded="false"><span>03</span><b>Progress</b><small>Volume +12% · 1 new PR</small><i>›</i></button>
        <button data-action="Achievement command opened" data-detail="command-achievement" aria-expanded="false"><span>04</span><b>Achievements</b><small>7-day streak · 2 freezes</small><i>›</i></button>
        <button data-action="Battle Music command opened" data-detail="command-music" aria-expanded="false"><span>05</span><b>Battle Music</b><small>Warrior · Playing</small><i>Ⅱ</i></button>
      </nav>
      <div class="prototype-detail command-detail" id="command-nutrition" hidden><b>NUTRITION</b><span>640 kcal and 38g protein remain.</span></div>
      <div class="prototype-detail command-detail" id="command-progress" hidden><b>PROGRESS</b><span>Bench Press PR: 82.5 kg.</span></div>
      <div class="prototype-detail command-detail" id="command-achievement" hidden><b>ACHIEVEMENTS</b><span>Next unlock: Consistent III.</span></div>
      <div class="prototype-detail command-detail" id="command-music" hidden><b>BATTLE MUSIC</b><span>Warrior is looping locally.</span></div>

      <footer class="command-footer"><span>SELECT</span><b>●</b><span>BACK</span><b>○</b><span>STREAK 07</span></footer>
    </article>`
}
