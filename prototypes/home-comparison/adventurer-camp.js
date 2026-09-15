export function renderAdventurerCamp() {
  return `
    <article class="phone camp" aria-labelledby="camp-title">
      <header class="camp-header">
        <div><span>Tuesday · Camp 12</span><h1 id="camp-title">Aster’s Camp</h1></div>
        <button class="camp-level" data-action="Level journey preview"><span>LV</span><b>18</b></button>
      </header>

      <section class="camp-player">
        <div class="camp-avatar"><span class="camp-sun"></span><img src="/avatars/spartans/aster.png" alt="Aster, Spartan Vanguard" /></div>
        <div class="camp-identity"><span>Spartan Vanguard</span><strong>Aster</strong><p>Bronze VII · 6,840 XP</p><div><i style="width:68%"></i></div></div>
        <button class="camp-streak" data-action="Streak detail preview"><b>🔥 7</b><span>quest streak</span></button>
      </section>

      <section class="camp-quest">
        <div class="quest-tab">Quest board · Today</div>
        <span class="camp-ready">Ready</span>
        <h2>Push Day</h2>
        <p>Build upper-body strength across 6 exercises and 18 planned sets.</p>
        <div class="camp-quest-meta"><span><b>52</b> min</span><span><b>18</b> sets</span><span><b>6</b> exercises</span></div>
        <button data-action="Push Day would start here">Set out for training <span>⚔</span></button>
      </section>

      <section class="camp-kit" aria-label="Camp preparation">
        <button class="provisions" data-action="Provisions opened" data-detail="camp-provisions" aria-expanded="false"><span class="kit-icon">◇</span><span><small>Provisions</small><strong>1,460 kcal</strong><em>112g protein · on track</em></span></button>
        <button class="training" data-action="Training status opened" data-detail="camp-training" aria-expanded="false"><span class="kit-icon">↗</span><span><small>Training status</small><strong>+12% volume</strong><em>Bench PR this week</em></span></button>
      </section>
      <div class="prototype-detail" id="camp-provisions" hidden><strong>Provisions</strong><span>640 kcal remain · supper and dinner unlogged</span></div>
      <div class="prototype-detail" id="camp-training" hidden><strong>Training status</strong><span>4 workouts in 7 days · newest PR 82.5 kg</span></div>

      <section class="camp-week">
        <header><span>Upcoming quests</span><button data-action="Weekly plan preview">View plan</button></header>
        <ol><li class="done"><b>MON</b><span>Push</span></li><li><b>TUE</b><span>Rest</span></li><li class="next"><b>WED</b><span>Pull</span></li><li><b>THU</b><span>Rest</span></li><li><b>FRI</b><span>Legs</span></li></ol>
      </section>

      <button class="campfire-music" data-action="Battle Music control preview"><span class="fire">♨</span><span><small>Camp ambience</small><strong>Warrior · Battle Music</strong></span><b>Ⅱ</b></button>
    </article>`
}
