// oxlint-disable react/only-export-components -- standalone Vite entry owns local page components.
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const github = 'https://github.com/ArijitWayne/fitdex'
const pwa = 'https://fitdex.fitdexapp.workers.dev/'

type ReleaseMetadata = {
  version: string
  versionCode: number
  tag: string
  apk: string | null
  apkDownloadUrl: string | null
  checksum: string | null
  sha256: string | null
  releaseNotes: string
  publishedAt: string | null
}

// Matches Phase 4 release-artifacts/release.json. Phase 6 will replace this pre-launch state with published metadata.
const release: ReleaseMetadata = {
  version: '1.0.0', versionCode: 2, tag: 'v1.0.0', apk: null, apkDownloadUrl: null,
  checksum: null, sha256: null, releaseNotes: 'release-notes.md', publishedAt: null,
}

type ShotProps = { src: string; alt: string; label: string; className?: string }

function Shot({ src, alt, label, className = '' }: ShotProps) {
  return <figure className={`screen ${className}`} tabIndex={0}><img src={src} alt={alt} loading="lazy" /><figcaption>{label}</figcaption></figure>
}

type HeroCardId = 'workout' | 'home' | 'progress'
type HeroHoverState = 'neutral' | 'left' | 'right'

type HeroCard = {
  id: HeroCardId
  src: string
  alt: string
  label: string
  hoverState: HeroHoverState
}

const HERO_CARDS: readonly HeroCard[] = [
  { id: 'workout', src: '/screenshots/active-workout.png', alt: 'FitDex active workout logger', label: 'ACTIVE WORKOUT', hoverState: 'left' },
  { id: 'home', src: '/screenshots/home.png', alt: 'FitDex home dashboard', label: 'HOME // COMMAND', hoverState: 'neutral' },
  { id: 'progress', src: '/screenshots/progress-records.png', alt: 'FitDex personal records screen', label: 'PERSONAL RECORDS', hoverState: 'right' },
] as const

function HeroScreens() {
  const [hoverState, setHoverState] = useState<HeroHoverState>('neutral')

  return (
    <div
      className="hero-screens"
      data-hover={hoverState}
      aria-label="FitDex interactive app screenshots"
      onPointerLeave={() => setHoverState('neutral')}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHoverState('neutral')
      }}
    >
      <div className="hero-hover-zones" aria-hidden="true">
        <div className="hero-hover-zone hero-hover-zone--left" onPointerEnter={() => setHoverState('left')} />
        <div className="hero-hover-zone hero-hover-zone--center" onPointerEnter={() => setHoverState('neutral')} />
        <div className="hero-hover-zone hero-hover-zone--right" onPointerEnter={() => setHoverState('right')} />
      </div>

      {HERO_CARDS.map((card) => {
        return (
          <figure
            key={card.id}
            className={`screen hero-shot hero-${card.id}`}
            tabIndex={0}
            role="button"
            aria-label={`${card.label}: ${card.hoverState === 'neutral' ? 'reset stack' : `show ${card.hoverState} stack`}`}
            onFocus={() => setHoverState(card.hoverState)}
          >
            <img src={card.src} alt={card.alt} loading="eager" />
            <figcaption>{card.label}</figcaption>
          </figure>
        )
      })}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const nav = [
    ['FEATURES', '#features'], ['EXERCISE DEX', '#dex'], ['LOCAL-FIRST', '#local-first'],
    ['WHY FITDEX', '#why'], ['SCREENSHOTS', '#screenshots'], ['RELEASE NOTES', '#release-notes'],
  ]

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="shell nav-shell">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="FitDex home"><img src="/branding/fitdex-logo-spartan.png" alt="" /><span>FITDEX</span><b>v1.0.0 // PRE-LAUNCH</b></a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'CLOSE ×' : 'MENU ≡'}</button>
        <nav id="primary-nav" className={menuOpen ? 'open' : ''} aria-label="Primary navigation">
          {nav.map(([label, href]) => <a href={href} key={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-github" href={github} target="_blank" rel="noreferrer">GITHUB ↗</a>
          <a className="nav-download" href="#download" onClick={closeMenu}>GET FITDEX</a>
        </nav>
        <div className="desktop-actions"><a className="text-link" href={github} target="_blank" rel="noreferrer">GITHUB ↗</a><a className="button small" href="#download">GET FITDEX</a></div>
      </div>
    </header>
    <main id="main">
      <section className="hero section" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">SYSTEM STATUS // PRE-RELEASE STAGING</p>
            <p className="wordmark">FITDEX</p>
            <h1>TRAIN. TRACK.<br /><em>LEVEL UP.</em></h1>
            <p className="lede">A free, local-first Android fitness tracker built like a retro RPG.</p>
            <p className="muted">Workouts, nutrition, consistency, and progression in one focused system. No subscription required. Personal fitness data persists locally; exercise demonstrations can stream on demand.</p>
            <div className="actions"><a className="button" href="#download">PUBLIC RELEASE COMING SOON</a><a className="button secondary" href={github} target="_blank" rel="noreferrer">VIEW ON GITHUB</a><a className="button secondary" href={pwa} target="_blank" rel="noreferrer">TRY WEB APP</a></div>
            <dl className="stats"><div><dt>804</dt><dd>Built-in exercises</dd></div><div><dt>52</dt><dd>Achievements</dd></div><div><dt>9</dt><dd>Named ranks</dd></div></dl>
          </div>
          <HeroScreens />
        </div>
      </section>
      <section className="value-strip" aria-label="FitDex principles"><div className="shell value-grid">
        {[['01','NO SUBSCRIPTION','Designed to stay free to use.'],['02','LOCAL-FIRST','Personal fitness history persists locally.'],['03','ANDROID-FIRST','Built for Android, with a live web app.'],['04','SOURCE-AVAILABLE','Core code uses PolyForm Noncommercial.']].map(([n,t,d]) => <article className="value" key={n}><span>{n}</span><div><h2>{t}</h2><p>{d}</p></div></article>)}
      </div></section>
      <Feature id="features" signal="TACTICAL WORKOUT LOGGING" title="TRAIN WITHOUT DISTRACTIONS" text="Build reusable routines, log sets, reps, and weight, then stay in motion with active and rest timers." points={['Workout Hub and reusable routines','Active workout logging with set history','Timers and rest workflow','Exercise Dex at point of training']} shots={[['/screenshots/workout-hub.png','FitDex workout hub','WORKOUT HUB // ROUTINES'],['/screenshots/active-workout.png','FitDex active workout logging','ACTIVE LOGGING // REST TIMER']]} />
      <Feature reverse signal="NUTRITION & PROGRESS" title="TRACK WHAT COUNTS" text="Log food, review journal entries, watch progress, and keep personal records and consistency metrics in view." points={['Food and nutrition tracking','Journal for workouts and meals','Progress overview and personal records','Consistency metrics for long-term work']} shots={[['/screenshots/food.png','FitDex food tracking','FOOD // NUTRITION'],['/screenshots/progress-records.png','FitDex personal records','PROGRESS // RECORDS']]} />
      <Feature signal="RPG PROGRESSION SYSTEM" title="LEVEL UP YOUR CONSISTENCY" text="Earn XP, pursue achievements, and keep training through plans, freezes, themes, and battle music." points={['52 permanent achievements and 9 named ranks','Weekly Plan and plan streak','Freezes for travel or sickness protection','Battle Music and theme selection']} shots={[['/screenshots/achievements.png','FitDex achievements','ACHIEVEMENTS // XP'],['/screenshots/progress-overview.png','FitDex progress overview','PROGRESS // LEVELS']]} />
      <section className="section" id="dex"><div className="shell dex-layout"><div><p className="eyebrow">EXERCISE DEX // V4</p><h2>804 BUILT-IN<br /><em>EXERCISE RECORDS.</em></h2><p className="lede">Nine muscle categories. On-demand demonstrations. Clear training reference when you need it.</p><div className="tag-list">{['Chest','Back','Shoulders','Legs','Gluteal','Biceps','Triceps','Forearms','Abs'].map(tag => <span key={tag}>{tag}</span>)}</div><p className="muted">Exercise demonstrations may stream remotely on demand. Media rights and terms vary by asset.</p></div><Shot src="/screenshots/exercise-dex.png" alt="FitDex Exercise Dex screen" label="EXERCISE DEX // SEARCH & DETAIL" /></div></section>
      <section className="section alternate" id="local-first"><div className="shell privacy-grid"><div><p className="eyebrow">LOCAL-FIRST // USER CONTROL</p><h2>YOUR TRAINING<br /><em>STAYS YOURS.</em></h2></div><div><p className="lede">No mandatory account. Personal workout, nutrition, and progress data use local persistence.</p><p className="muted">Export and restore a user-controlled <code>.fitdex</code> backup. The app can still use network access for on-demand exercise media.</p><a className="text-link" href="https://github.com/ArijitWayne/fitdex/blob/dev/SECURITY.md" target="_blank" rel="noreferrer">READ SECURITY POLICY ↗</a></div></div></section>
      <section className="section" id="why"><div className="shell why"><p className="eyebrow">WHY FITDEX // FOUNDER NOTE</p><blockquote>Fitness and staying healthy should not require a recurring subscription.</blockquote><p>FitDex combines training, nutrition, consistency, progress, and RPG motivation without requiring a subscription.</p><p className="mission">“The goal isn't to replace discipline with gamification.<br />The goal is to make discipline easier to maintain.”</p><p className="creator">ARIJIT BHADURI<br /><span>CREATOR &amp; LEAD DEVELOPER // FITDEX</span></p></div></section>
      <Gallery />
      <section className="section release-section" id="release-notes"><div className="shell release-grid"><div><p className="eyebrow">RELEASE NOTES // PHASE 6 READY</p><h2>FITDEX v{release.version}</h2><p className="release-status">PUBLIC RELEASE COMING SOON</p><p className="muted">Release UI reserves version, Android versionCode, date, reviewed notes, APK download, and SHA-256 for Phase 6 metadata integration.</p></div><dl className="release-data"><div><dt>VERSION</dt><dd>{release.version}</dd></div><div><dt>VERSION CODE</dt><dd>{release.versionCode}</dd></div><div><dt>PUBLISHED AT</dt><dd>{release.publishedAt ?? 'Available with public release'}</dd></div><div><dt>WHAT'S NEW</dt><dd>Reviewed with public release</dd></div><div><dt>IMPROVEMENTS / FIXES</dt><dd>Reviewed with public release</dd></div><div><dt>APK DOWNLOAD</dt><dd>{release.apkDownloadUrl ?? 'Available with public release'}</dd></div><div><dt>SHA-256</dt><dd>{release.sha256 ?? 'Available with public release'}</dd></div></dl></div></section>
      <section className="section" id="download"><div className="shell platform-grid"><article><p className="eyebrow">PRIMARY PLATFORM</p><h2>ANDROID</h2><p className="lede">Signed APK</p><p className="release-status">COMING WITH v1.0.0</p></article><article><p className="eyebrow">LIVE PLATFORM</p><h2>WEB APP</h2><p className="muted">Use FitDex PWA now.</p><a className="button" href={pwa} target="_blank" rel="noreferrer">OPEN WEB APP</a></article><article><p className="eyebrow">PLATFORM STATUS</p><h2>iOS</h2><p className="muted">Future consideration.</p></article></div></section>
      <section className="section alternate" id="licensing">
        <div className="shell license-grid">
          <div className="license-intro">
            <p className="eyebrow">SOURCE / LICENSING</p>
            <h2>BUILT WITH<br /><em>CLEAR TERMS.</em></h2>
            <p className="muted">FitDex separates software licensing from brand and media usage so terms for each project part stay clear.</p>
          </div>
          <div className="license-summary">
            <article><strong>Core application</strong><span>PolyForm Noncommercial 1.0.0</span></article>
            <article><strong>Documentation &amp; tooling</strong><span>MIT where identified</span></article>
            <article><strong>Brand &amp; media assets</strong><span>See asset terms</span></article>
            <div className="doc-links">
              <a href={`${github}/blob/dev/LICENSING.md`} target="_blank" rel="noreferrer">LICENSING ↗</a>
              <a href={`${github}/blob/dev/ASSETS.md`} target="_blank" rel="noreferrer">ASSET TERMS ↗</a>
              <a href={`${github}/blob/dev/CONTRIBUTING.md`} target="_blank" rel="noreferrer">CONTRIBUTING ↗</a>
              <a href={`${github}/blob/dev/SECURITY.md`} target="_blank" rel="noreferrer">SECURITY ↗</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer><div className="shell footer-grid"><div><a className="brand footer-brand" href="#top"><img src="/branding/fitdex-logo-spartan.png" alt="" /><span>FITDEX</span></a><p>TRAIN. TRACK. LEVEL UP.</p><small>Copyright © 2026 Arijit Bhaduri</small></div><nav aria-label="Footer"><a href={github} target="_blank" rel="noreferrer">GitHub</a><a href={pwa} target="_blank" rel="noreferrer">Web App</a><a href="#release-notes">Release Notes</a><a href="#licensing">Licensing</a><a href={`${github}/blob/dev/CONTRIBUTING.md`} target="_blank" rel="noreferrer">Contributing</a><a href={`${github}/blob/dev/SECURITY.md`} target="_blank" rel="noreferrer">Security</a></nav></div></footer>
  </>
}

type FeatureProps = { id?: string; signal: string; title: string; text: string; points: string[]; shots: [string, string, string][]; reverse?: boolean }
function Feature({ id, signal, title, text, points, shots, reverse }: FeatureProps) {
  return <section className={`section ${reverse ? 'alternate' : ''}`} id={id}><div className={`shell feature ${reverse ? 'reverse' : ''}`}><div className="feature-copy"><p className="eyebrow">{signal}</p><h2>{title}</h2><p className="lede">{text}</p><ul>{points.map((point, i) => <li key={point}><b>SYS-{String(i + 1).padStart(2, '0')}</b>{point}</li>)}</ul></div><div className="feature-shots">{shots.map(([src, alt, label]) => <Shot key={src} src={src} alt={alt} label={label} />)}</div></div></section>
}

function Gallery() {
  const shots: [string, string, string][] = [
    ['/screenshots/home.png', 'FitDex home dashboard', 'HOME'], ['/screenshots/workout-hub.png', 'FitDex workout hub', 'WORKOUT HUB'], ['/screenshots/active-workout.png', 'FitDex active workout logger', 'ACTIVE WORKOUT'], ['/screenshots/exercise-dex.png', 'FitDex exercise dex', 'EXERCISE DEX'], ['/screenshots/food.png', 'FitDex food tracker', 'FOOD'], ['/screenshots/journal.png', 'FitDex journal', 'JOURNAL'], ['/screenshots/progress-overview.png', 'FitDex progress overview', 'PROGRESS'], ['/screenshots/progress-records.png', 'FitDex personal records', 'RECORDS'], ['/screenshots/achievements.png', 'FitDex achievements', 'ACHIEVEMENTS'],
  ]
  return <section className="section" id="screenshots"><div className="shell"><p className="eyebrow">FIELD VIEW // REAL FITDEX SCREENS</p><h2>SEE SYSTEM IN ACTION.</h2><div className="gallery">{shots.map(([src, alt, label]) => <Shot key={src} src={src} alt={alt} label={label} />)}</div></div></section>
}

createRoot(document.getElementById('root')!).render(<App />)
