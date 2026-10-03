import { CopyButton, formatBytes } from './ChangelogView'
import type { ReactNode } from 'react'
import { IosEcosystemGlyph } from './PlatformIcons'

type InstallRelease = {
  version: string
  versionCode?: number
  apkDownloadUrl?: string
  apkFileName?: string
  apkSize?: number
  sha256?: string
}

type InstallViewProps = {
  release: InstallRelease
  onNavigate: (path: string) => void
  pwa: string
}

function PlatformGlyph({ type }: { type: 'android' | 'iphone' | 'share' | 'home' }) {
  if (type === 'android') return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 12h16v13H8zM10 8l-2-3M22 8l2-3M11 18h2m6 0h2M6 14v8m20-8v8M11 25v3m10-3v3" /></svg>
  if (type === 'iphone') return <IosEcosystemGlyph />
  if (type === 'share') return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 21V4m0 0-5 5m5-5 5 5M7 16v11h18V16" /></svg>
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m4 15 12-10 12 10v12H4zM12 27v-8h8v8" /></svg>
}

function Step({ number, title, icon, children }: { number: string; title: string; icon: 'android' | 'iphone' | 'share' | 'home'; children: ReactNode }) {
  return <article className="install-step">
    <div className="install-step-top"><span className="install-step-number">{number}</span><PlatformGlyph type={icon} /></div>
    <h3>{title}</h3>
    <div>{children}</div>
  </article>
}

export function InstallView({ release, onNavigate, pwa }: InstallViewProps) {
  const apkName = release.apkFileName || `fitdex.${release.version}.apk`

  return <>
    <section className="section install-hero">
      <div className="shell">
        <p className="eyebrow">FITDEX // INSTALLATION GUIDE</p>
        <h1>INSTALL<br /><em>FITDEX.</em></h1>
        <p className="lede">Choose your platform and put FitDex on your Home Screen.</p>
        <div className="install-platform-choices" aria-label="Choose installation platform">
          <a href="#android" className="install-channel"><PlatformGlyph type="android" /><span><b>ANDROID</b><small>SIGNED APK</small></span><i aria-hidden="true">01</i></a>
          <a href="#ios" className="install-channel"><PlatformGlyph type="iphone" /><span><b>iPHONE / iOS</b><small>WEB APP</small></span><i aria-hidden="true">02</i></a>
        </div>
      </div>
    </section>

    <section className="section install-section" id="android" aria-labelledby="android-install-title">
      <div className="shell">
        <header className="install-section-heading">
          <div><p className="eyebrow">ANDROID // SIGNED APK</p><h2 id="android-install-title">INSTALL THE<br /><em>SIGNED APK.</em></h2></div>
          <p>FitDex is distributed directly as an official signed APK, not through Google Play.</p>
        </header>

        <div className="install-steps">
          <Step number="01" title="DOWNLOAD FITDEX" icon="android"><p>Download latest signed release: <strong>v{release.version}</strong>{release.apkSize ? ` · ${formatBytes(release.apkSize)}` : ''}.</p>{release.apkDownloadUrl ? <a className="button" href={release.apkDownloadUrl}>DOWNLOAD APK</a> : null}</Step>
          <Step number="02" title="OPEN THE APK" icon="android"><p>Open downloaded file from your browser notification, Downloads, or Files app.</p></Step>
          <Step number="03" title="ALLOW THIS SOURCE" icon="android"><p>If Android asks, open Settings and allow installs only for browser or Files app you used.</p></Step>
          <Step number="04" title="INSTALL & LAUNCH" icon="android"><p>Return to installer, tap Install, then open FitDex.</p></Step>
          <Step number="05" title="STAY CURRENT" icon="android"><p>FitDex can notify you about newer signed releases and guide in-app updates.</p></Step>
        </div>

        <aside className="install-device-note"><strong>DEVICE NOTE</strong><span>Android wording varies. If you see “Install unknown apps” or “Allow from this source,” allow only browser or Files app used for FitDex download.</span></aside>

        <section className="install-trust-panel" aria-labelledby="trust-title">
          <div><p className="eyebrow">TRUST // ADVANCED CHECK</p><h3 id="trust-title">OFFICIAL FITDEX APK</h3></div>
          <ul><li>Signed release</li><li>Package: <code>com.fitdex.app</code></li><li>SHA-256 published with release</li><li>Local-first data</li></ul>
          {release.sha256 ? <div className="install-checksum"><span>VERIFY DOWNLOAD // {apkName}</span><div className="checksum-box"><code className="checksum-hash">{release.sha256}</code><CopyButton text={release.sha256} label="COPY SHA-256" /></div></div> : null}
        </section>
      </div>
    </section>

    <section className="section alternate install-section" id="ios" aria-labelledby="ios-install-title">
      <div className="shell">
        <header className="install-section-heading">
          <div><p className="eyebrow">iPHONE / iOS // WEB APP</p><h2 id="ios-install-title">ADD FITDEX TO<br /><em>HOME SCREEN.</em></h2></div>
          <p>No native App Store build yet. FitDex web app installs from Safari and launches like an app.</p>
        </header>

        <div className="install-steps ios-steps">
          <Step number="01" title="OPEN IN SAFARI" icon="iphone"><p>Open FitDex web app in Safari. Safari is recommended for this install flow.</p><a className="button secondary" href={pwa} target="_blank" rel="noreferrer">OPEN FITDEX WEB APP</a></Step>
          <Step number="02" title="OPEN SHARE" icon="share"><p>Tap Share, or open Page Menu then Share.</p></Step>
          <Step number="03" title="ADD TO HOME SCREEN" icon="home"><p>Scroll if needed, then tap Add to Home Screen. Edit Share actions if item is missing.</p></Step>
          <Step number="04" title="OPEN AS WEB APP" icon="iphone"><p>If shown, enable Open as Web App.</p></Step>
          <Step number="05" title="ADD" icon="home"><p>Tap Add. FitDex appears on your Home Screen.</p></Step>
          <Step number="06" title="LAUNCH FITDEX" icon="home"><p>Open new FitDex icon from Home Screen.</p></Step>
        </div>
        <div className="install-return"><button type="button" className="text-link" onClick={() => onNavigate('/')}>RETURN TO FITDEX OVERVIEW</button></div>
      </div>
    </section>
  </>
}
