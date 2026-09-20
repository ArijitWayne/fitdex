import React, { useEffect, useState, useRef } from 'react';
import type { BootFrame, BootWarriorIdentity } from './bootTypes';
import { BootWarriorSprite } from './BootWarriorSprite';

interface AppBootSequenceProps {
  onComplete: () => void;
  themeFamily: 'spartans' | 'amazonians';
}

const checkReducedMotion = () =>
  typeof window !== 'undefined' &&
  Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);

export const AppBootSequence: React.FC<AppBootSequenceProps> = ({
  onComplete,
  themeFamily,
}) => {
  const [frame, setFrame] = useState<BootFrame>(() => (checkReducedMotion() ? 4 : 1));
  const [filledBlocks, setFilledBlocks] = useState<number>(() => (checkReducedMotion() ? 4 : 1));
  const [telemetry, setTelemetry] = useState<string>(() =>
    checkReducedMotion() ? 'WARRIOR READY · FITDEX V1.0' : 'INITIALIZING FITDEX CORE...',
  );
  const [showStrBadge, setShowStrBadge] = useState<boolean>(() => checkReducedMotion());
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const onCompleteRef = useRef(onComplete);
  const completedRef = useRef<boolean>(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const warriorIdentity: BootWarriorIdentity =
    themeFamily === 'amazonians' ? 'amazonian' : 'spartan';

  const iconSrc =
    themeFamily === 'amazonians'
      ? '/branding/fitdex-icon-amazonian.png'
      : '/branding/fitdex-icon-spartan.png';

  const finish = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    onCompleteRef.current();
  };

  useEffect(() => {
    const prefersReducedMotion = checkReducedMotion();

    if (prefersReducedMotion) {
      const t1 = setTimeout(() => {
        setIsFadingOut(true);
      }, 400);

      const t2 = setTimeout(() => {
        finish();
      }, 550);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }

    // Normal ~1.5s Boot Sequence

    // Frame 2: 350ms
    const t1 = setTimeout(() => {
      setFrame(2);
      setFilledBlocks(2);
      setTelemetry('CALIBRATING RESISTANCE...');
    }, 350);

    // Frame 3: 700ms
    const t2 = setTimeout(() => {
      setFrame(3);
      setFilledBlocks(3);
      setTelemetry('LOADING EXERCISE DEX...');
    }, 700);

    // Frame 4: 1050ms (Lockout & STR moment)
    const t3 = setTimeout(() => {
      setFrame(4);
      setFilledBlocks(4);
      setTelemetry('WARRIOR READY · FITDEX V1.0');
      setShowStrBadge(true);
    }, 1050);

    // Fade out start: 1450ms
    const t4 = setTimeout(() => {
      setIsFadingOut(true);
    }, 1450);

    // Completion: 1700ms
    const t5 = setTimeout(() => {
      finish();
    }, 1700);

    // Hard safety watchdog (2500ms max)
    const safetyTimeout = setTimeout(() => {
      finish();
    }, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(safetyTimeout);
    };
  }, []);

  return (
    <div
      className={`surface-boot is-active ${isFadingOut ? 'boot-fade-out' : ''}`}
      id="surface-boot"
      role="status"
      aria-label="FitDex initializing"
    >
      <div className="retro-scanlines" aria-hidden="true" />

      <div className="boot-container">
        {/* 1. Faction Emblem / Icon */}
        <div className="boot-icon-wrap" id="boot-icon-wrap">
          <img
            id="boot-app-icon"
            className="boot-app-icon"
            src={iconSrc}
            alt="FitDex"
            onError={(e) => {
              // Fallback to spartan icon if missing
              (e.currentTarget as HTMLImageElement).src = '/branding/fitdex-icon-spartan.png';
            }}
          />
        </div>

        {/* 2. Retro Warrior Vignette Stage */}
        <div className="boot-warrior-stage" id="boot-warrior-stage">
          <BootWarriorSprite identity={warriorIdentity} frame={frame} />

          {/* +1 STR Pop Badge */}
          <div
            className={`boot-str-badge ${showStrBadge ? 'is-visible' : ''}`}
            id="boot-str-badge"
            aria-hidden={!showStrBadge}
          >
            <span className="str-plus">+1</span> <span className="str-stat">STR</span>
          </div>
        </div>

        {/* 3. Typography Hierarchy */}
        <div className="boot-title-wrap">
          <h1 className="boot-wordmark">FITDEX</h1>
          <p className="boot-tagline">TRAIN • TRACK • LEVEL UP.</p>
        </div>

        {/* 4. Cartridge 4-Block Discrete Loading Meter */}
        <div className="boot-meter-wrap">
          <div
            className="boot-meter-blocks"
            role="progressbar"
            aria-valuenow={filledBlocks}
            aria-valuemin={1}
            aria-valuemax={4}
          >
            {[1, 2, 3, 4].map((block) => (
              <div
                key={block}
                className={`meter-block ${block <= filledBlocks ? 'is-filled' : ''}`}
              />
            ))}
          </div>
          <div className="boot-telemetry">
            <span className="boot-telemetry-text" id="boot-telemetry-text">
              {telemetry}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
