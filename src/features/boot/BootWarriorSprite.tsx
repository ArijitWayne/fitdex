import React from 'react';
import type { BootFrame, BootWarriorIdentity } from './bootTypes';

interface BootWarriorSpriteProps {
  identity: BootWarriorIdentity;
  frame: BootFrame;
  className?: string;
}

export const BootWarriorSprite: React.FC<BootWarriorSpriteProps> = ({
  identity,
  frame,
  className = '',
}) => {
  if (identity === 'amazonian') {
    return (
      <svg
        className={`warrior-svg amazonian-warrior-svg ${className}`}
        viewBox="0 0 32 32"
        shapeRendering="crispEdges"
        data-frame={frame}
        aria-label="Amazonian Warrior"
      >
        {/* FRAME 1: Ready Stance */}
        <g className="warrior-frame frame-1">
          <rect x="16" y="2" width="3" height="3" fill="#3a1e12" />
          <rect x="18" y="3" width="3" height="5" fill="#3a1e12" />
          <rect x="20" y="6" width="2" height="5" fill="#3a1e12" />
          <rect x="12" y="4" width="7" height="3" fill="#3a1e12" />
          <rect x="12" y="5" width="8" height="2" fill="#d49b38" />
          <rect x="15" y="4" width="2" height="2" fill="#d49b38" />
          <rect x="15" y="5" width="2" height="1" fill="#c62828" />
          <rect x="13" y="7" width="6" height="4" fill="#f2bc8d" />
          <rect x="14" y="8" width="1" height="1" fill="#140d12" />
          <rect x="17" y="8" width="1" height="1" fill="#140d12" />
          <rect x="15" y="9" width="2" height="1" fill="#d49265" />
          <rect x="14" y="11" width="4" height="1" fill="#f2bc8d" />
          <rect x="10" y="11" width="3" height="2" fill="#d49b38" />
          <rect x="19" y="11" width="3" height="2" fill="#d49b38" />
          <rect x="13" y="11" width="6" height="1" fill="#d49b38" />
          <rect x="12" y="12" width="8" height="5" fill="var(--color-primary, #6b2444)" />
          <rect x="13" y="12" width="6" height="1" fill="#d49b38" />
          <rect x="14" y="13" width="1" height="3" fill="#d49b38" />
          <rect x="17" y="13" width="1" height="3" fill="#d49b38" />
          <rect x="12" y="17" width="8" height="1" fill="#d49b38" />
          <rect x="15" y="17" width="2" height="2" fill="#c62828" />
          <rect x="11" y="18" width="10" height="3" fill="var(--color-secondary, #431228)" />
          <rect x="11" y="20" width="10" height="1" fill="#d49b38" />
          <rect x="9" y="13" width="2" height="3" fill="#f2bc8d" />
          <rect x="21" y="13" width="2" height="3" fill="#f2bc8d" />
          <rect x="8" y="16" width="3" height="2" fill="#d49b38" />
          <rect x="21" y="16" width="3" height="2" fill="#d49b38" />
          <rect x="4" y="17" width="24" height="1" fill="#dce3e0" />
          <rect x="5" y="16" width="22" height="1" fill="#8e9b96" />
          <rect x="5" y="15" width="1" height="3" fill="#4b5552" />
          <rect x="26" y="15" width="1" height="3" fill="#4b5552" />
          <rect x="2" y="14" width="3" height="5" fill="#3c4542" />
          <rect x="1" y="15" width="1" height="3" fill="#687571" />
          <rect x="27" y="14" width="3" height="5" fill="#3c4542" />
          <rect x="30" y="15" width="1" height="3" fill="#687571" />
          <rect x="12" y="21" width="3" height="2" fill="#f2bc8d" />
          <rect x="17" y="21" width="3" height="2" fill="#f2bc8d" />
          <rect x="11" y="23" width="4" height="5" fill="#3a1e12" />
          <rect x="17" y="23" width="4" height="5" fill="#3a1e12" />
          <rect x="12" y="23" width="2" height="1" fill="#d49b38" />
          <rect x="18" y="23" width="2" height="1" fill="#d49b38" />
          <rect x="11" y="28" width="4" height="2" fill="#24130b" />
          <rect x="17" y="28" width="4" height="2" fill="#24130b" />
        </g>

        {/* FRAME 2: Power Coil / Squat */}
        <g className="warrior-frame frame-2">
          <rect x="16" y="5" width="3" height="3" fill="#3a1e12" />
          <rect x="18" y="6" width="4" height="5" fill="#3a1e12" />
          <rect x="21" y="9" width="2" height="5" fill="#3a1e12" />
          <rect x="12" y="7" width="7" height="3" fill="#3a1e12" />
          <rect x="12" y="8" width="8" height="2" fill="#d49b38" />
          <rect x="15" y="7" width="2" height="2" fill="#d49b38" />
          <rect x="15" y="8" width="2" height="1" fill="#c62828" />
          <rect x="13" y="10" width="6" height="4" fill="#f2bc8d" />
          <rect x="14" y="11" width="1" height="1" fill="#140d12" />
          <rect x="17" y="11" width="1" height="1" fill="#140d12" />
          <rect x="9" y="13" width="3" height="2" fill="#d49b38" />
          <rect x="20" y="13" width="3" height="2" fill="#d49b38" />
          <rect x="11" y="14" width="10" height="5" fill="var(--color-primary, #6b2444)" />
          <rect x="12" y="14" width="8" height="1" fill="#d49b38" />
          <rect x="3" y="13" width="26" height="1" fill="#dce3e0" />
          <rect x="4" y="14" width="24" height="1" fill="#8e9b96" />
          <rect x="5" y="12" width="1" height="4" fill="#4b5552" />
          <rect x="26" y="12" width="1" height="4" fill="#4b5552" />
          <rect x="1" y="11" width="4" height="6" fill="#3c4542" />
          <rect x="0" y="12" width="1" height="4" fill="#687571" />
          <rect x="27" y="11" width="4" height="6" fill="#3c4542" />
          <rect x="31" y="12" width="1" height="4" fill="#687571" />
          <rect x="7" y="14" width="3" height="3" fill="#d49b38" />
          <rect x="22" y="14" width="3" height="3" fill="#d49b38" />
          <rect x="10" y="19" width="12" height="2" fill="var(--color-secondary, #431228)" />
          <rect x="10" y="20" width="12" height="1" fill="#d49b38" />
          <rect x="6" y="20" width="5" height="3" fill="#f2bc8d" />
          <rect x="21" y="20" width="5" height="3" fill="#f2bc8d" />
          <rect x="6" y="22" width="5" height="4" fill="#3a1e12" />
          <rect x="21" y="22" width="5" height="4" fill="#3a1e12" />
          <rect x="5" y="25" width="6" height="2" fill="#24130b" />
          <rect x="21" y="25" width="6" height="2" fill="#24130b" />
        </g>

        {/* FRAME 3: Upward Drive */}
        <g className="warrior-frame frame-3">
          <rect x="16" y="3" width="3" height="3" fill="#3a1e12" />
          <rect x="18" y="4" width="3" height="6" fill="#3a1e12" />
          <rect x="20" y="8" width="2" height="5" fill="#3a1e12" />
          <rect x="12" y="5" width="7" height="3" fill="#3a1e12" />
          <rect x="12" y="6" width="8" height="2" fill="#d49b38" />
          <rect x="15" y="5" width="2" height="2" fill="#d49b38" />
          <rect x="15" y="6" width="2" height="1" fill="#c62828" />
          <rect x="13" y="8" width="6" height="4" fill="#f2bc8d" />
          <rect x="14" y="9" width="1" height="1" fill="#140d12" />
          <rect x="17" y="9" width="1" height="1" fill="#140d12" />
          <rect x="8" y="6" width="3" height="6" fill="#f2bc8d" />
          <rect x="21" y="6" width="3" height="6" fill="#f2bc8d" />
          <rect x="8" y="4" width="3" height="3" fill="#d49b38" />
          <rect x="21" y="4" width="3" height="3" fill="#d49b38" />
          <rect x="3" y="4" width="26" height="1" fill="#dce3e0" />
          <rect x="4" y="5" width="24" height="1" fill="#8e9b96" />
          <rect x="5" y="3" width="1" height="4" fill="#4b5552" />
          <rect x="26" y="3" width="1" height="4" fill="#4b5552" />
          <rect x="1" y="2" width="4" height="6" fill="#3c4542" />
          <rect x="0" y="3" width="1" height="4" fill="#687571" />
          <rect x="27" y="2" width="4" height="6" fill="#3c4542" />
          <rect x="31" y="3" width="1" height="4" fill="#687571" />
          <rect x="12" y="11" width="8" height="6" fill="var(--color-primary, #6b2444)" />
          <rect x="13" y="12" width="6" height="1" fill="#d49b38" />
          <rect x="12" y="17" width="8" height="1" fill="#d49b38" />
          <rect x="11" y="18" width="10" height="3" fill="var(--color-secondary, #431228)" />
          <rect x="11" y="20" width="10" height="1" fill="#d49b38" />
          <rect x="12" y="21" width="3" height="3" fill="#f2bc8d" />
          <rect x="17" y="21" width="3" height="3" fill="#f2bc8d" />
          <rect x="11" y="23" width="4" height="5" fill="#3a1e12" />
          <rect x="17" y="23" width="4" height="5" fill="#3a1e12" />
          <rect x="11" y="28" width="4" height="2" fill="#24130b" />
          <rect x="17" y="28" width="4" height="2" fill="#24130b" />
        </g>

        {/* FRAME 4: Lockout & Triumphant Flex */}
        <g className="warrior-frame frame-4">
          <rect x="2" y="0" width="28" height="2" fill="#ffffff" />
          <rect x="4" y="2" width="24" height="1" fill="#8e9b96" />
          <rect x="5" y="0" width="1" height="4" fill="#4b5552" />
          <rect x="26" y="0" width="1" height="4" fill="#4b5552" />
          <rect x="1" y="0" width="4" height="5" fill="#d49b38" />
          <rect x="0" y="1" width="1" height="3" fill="#f5c568" />
          <rect x="27" y="0" width="4" height="5" fill="#d49b38" />
          <rect x="31" y="1" width="1" height="3" fill="#f5c568" />
          <rect x="8" y="2" width="3" height="7" fill="#f2bc8d" />
          <rect x="21" y="2" width="3" height="7" fill="#f2bc8d" />
          <rect x="8" y="1" width="3" height="3" fill="#d49b38" />
          <rect x="21" y="1" width="3" height="3" fill="#d49b38" />
          <rect x="16" y="4" width="3" height="3" fill="#3a1e12" />
          <rect x="18" y="5" width="3" height="6" fill="#3a1e12" />
          <rect x="20" y="9" width="2" height="5" fill="#3a1e12" />
          <rect x="12" y="6" width="7" height="3" fill="#3a1e12" />
          <rect x="12" y="7" width="8" height="2" fill="#d49b38" />
          <rect x="15" y="6" width="2" height="2" fill="#d49b38" />
          <rect x="15" y="7" width="2" height="1" fill="#c62828" />
          <rect x="13" y="9" width="6" height="4" fill="#f2bc8d" />
          <rect x="14" y="10" width="1" height="1" fill="#140d12" />
          <rect x="17" y="10" width="1" height="1" fill="#140d12" />
          <rect x="11" y="12" width="10" height="6" fill="var(--color-primary, #6b2444)" />
          <rect x="12" y="13" width="8" height="1" fill="#d49b38" />
          <rect x="12" y="18" width="8" height="1" fill="#d49b38" />
          <rect x="11" y="19" width="10" height="3" fill="var(--color-secondary, #431228)" />
          <rect x="11" y="21" width="10" height="1" fill="#d49b38" />
          <rect x="11" y="22" width="4" height="2" fill="#f2bc8d" />
          <rect x="17" y="22" width="4" height="2" fill="#f2bc8d" />
          <rect x="10" y="24" width="5" height="4" fill="#3a1e12" />
          <rect x="17" y="24" width="5" height="4" fill="#3a1e12" />
          <rect x="11" y="24" width="2" height="1" fill="#d49b38" />
          <rect x="18" y="24" width="2" height="1" fill="#d49b38" />
          <rect x="9" y="28" width="6" height="2" fill="#24130b" />
          <rect x="17" y="28" width="6" height="2" fill="#24130b" />
          <rect x="0" y="3" width="2" height="2" fill="#ffdd00" />
          <rect x="30" y="3" width="2" height="2" fill="#ffdd00" />
          <rect x="4" y="9" width="2" height="2" fill="#ffdd00" />
          <rect x="26" y="9" width="2" height="2" fill="#ffdd00" />
        </g>
      </svg>
    );
  }

  // Spartan Warrior (Default)
  return (
    <svg
      className={`warrior-svg spartan-warrior-svg ${className}`}
      viewBox="0 0 32 32"
      shapeRendering="crispEdges"
      data-frame={frame}
      aria-label="Spartan Warrior"
    >
      {/* FRAME 1: Ready Stance */}
      <g className="warrior-frame frame-1">
        {/* Spartan Crest (Crimson arched crest with bronze crest-holder) */}
        <rect x="13" y="1" width="6" height="1" fill="#e52b2b" />
        <rect x="12" y="2" width="8" height="1" fill="#c62828" />
        <rect x="12" y="3" width="8" height="1" fill="#8e1515" />
        <rect x="13" y="4" width="6" height="1" fill="#d49b38" />

        {/* Helmet (Teal Corinthian Dome & Cheek Guards) */}
        <rect x="11" y="5" width="10" height="1" fill="#135e5b" />
        <rect x="10" y="6" width="12" height="1" fill="#135e5b" />
        <rect x="12" y="6" width="8" height="1" fill="#d49b38" />
        {/* Eye Slits & Bronze Nose Guard */}
        <rect x="10" y="7" width="12" height="1" fill="#135e5b" />
        <rect x="13" y="7" width="2" height="1" fill="#080c0b" />
        <rect x="17" y="7" width="2" height="1" fill="#080c0b" />
        <rect x="15" y="7" width="2" height="2" fill="#d49b38" />
        {/* Cheek Guards (Deep Teal with thin Bronze outer edge) */}
        <rect x="10" y="8" width="3" height="2" fill="#135e5b" />
        <rect x="19" y="8" width="3" height="2" fill="#135e5b" />
        <rect x="10" y="8" width="1" height="2" fill="#d49b38" />
        <rect x="21" y="8" width="1" height="2" fill="#d49b38" />
        {/* Chin */}
        <rect x="14" y="9" width="4" height="1" fill="#be7a48" />

        {/* Clear Neck / Throat / Collar Gap */}
        <rect x="14" y="10" width="4" height="1" fill="#be7a48" />
        <rect x="13" y="11" width="6" height="1" fill="#d49b38" />

        {/* Shoulders / Pauldrons (Starting at y=12, clear of chin) */}
        <rect x="8" y="12" width="3" height="2" fill="#135e5b" />
        <rect x="21" y="12" width="3" height="2" fill="#135e5b" />
        <rect x="8" y="12" width="3" height="1" fill="#d49b38" />
        <rect x="21" y="12" width="3" height="1" fill="#d49b38" />

        {/* Arms (Ready stance) */}
        <rect x="8" y="14" width="2" height="3" fill="#e29d68" />
        <rect x="22" y="14" width="2" height="3" fill="#e29d68" />
        <rect x="8" y="16" width="3" height="2" fill="#d49b38" />
        <rect x="21" y="16" width="3" height="2" fill="#d49b38" />

        {/* Torso (75-80% Teal Cuirass, Bronze harness trim) */}
        <rect x="11" y="12" width="10" height="6" fill="#1f8582" />
        <rect x="13" y="13" width="2" height="2" fill="#135e5b" />
        <rect x="17" y="13" width="2" height="2" fill="#135e5b" />
        <rect x="13" y="14" width="6" height="1" fill="#d49b38" />
        <rect x="15" y="15" width="2" height="2" fill="#d49b38" />

        {/* Barbell (Held at mid-thigh, neutral iron/steel) */}
        <rect x="4" y="17" width="24" height="1" fill="#94a3a0" />
        <rect x="6" y="17" width="20" height="1" fill="#dce3e0" />
        <rect x="5" y="16" width="1" height="3" fill="#4b5552" />
        <rect x="26" y="16" width="1" height="3" fill="#4b5552" />
        {/* Neutral Left & Right Plates */}
        <rect x="2" y="14" width="3" height="7" fill="#3c4542" />
        <rect x="1" y="15" width="1" height="5" fill="#687571" />
        <rect x="27" y="14" width="3" height="7" fill="#3c4542" />
        <rect x="30" y="15" width="1" height="5" fill="#687571" />

        {/* Battle Skirt / Pteruges (Dark leather with bronze buckle & tips) */}
        <rect x="11" y="18" width="10" height="1" fill="#3a2012" />
        <rect x="15" y="18" width="2" height="1" fill="#d49b38" />
        <rect x="11" y="19" width="10" height="2" fill="#3a2012" />
        <rect x="12" y="20" width="1" height="1" fill="#d49b38" />
        <rect x="14" y="20" width="1" height="1" fill="#d49b38" />
        <rect x="17" y="20" width="1" height="1" fill="#d49b38" />
        <rect x="19" y="20" width="1" height="1" fill="#d49b38" />

        {/* Legs / Greaves (Thighs bare, deep teal greaves with bronze spinal ridge) */}
        <rect x="12" y="21" width="3" height="2" fill="#e29d68" />
        <rect x="17" y="21" width="3" height="2" fill="#e29d68" />
        <rect x="11" y="23" width="4" height="5" fill="#135e5b" />
        <rect x="17" y="23" width="4" height="5" fill="#135e5b" />
        <rect x="12" y="23" width="2" height="4" fill="#d49b38" />
        <rect x="18" y="23" width="2" height="4" fill="#d49b38" />

        {/* Boots (Dark leather) */}
        <rect x="11" y="28" width="4" height="2" fill="#24130b" />
        <rect x="17" y="28" width="4" height="2" fill="#24130b" />
      </g>

      {/* FRAME 2: Power Coil / Squat */}
      <g className="warrior-frame frame-2">
        {/* Crest (Lowered in squat) */}
        <rect x="13" y="3" width="6" height="1" fill="#e52b2b" />
        <rect x="12" y="4" width="8" height="1" fill="#c62828" />
        <rect x="12" y="5" width="8" height="1" fill="#8e1515" />
        <rect x="13" y="6" width="6" height="1" fill="#d49b38" />

        {/* Helmet (Teal dome & cheek guards, bronze trim) */}
        <rect x="11" y="7" width="10" height="1" fill="#135e5b" />
        <rect x="10" y="8" width="12" height="1" fill="#135e5b" />
        <rect x="12" y="8" width="8" height="1" fill="#d49b38" />
        {/* Eye Slits & Nose Guard */}
        <rect x="10" y="9" width="12" height="1" fill="#135e5b" />
        <rect x="13" y="9" width="2" height="1" fill="#080c0b" />
        <rect x="17" y="9" width="2" height="1" fill="#080c0b" />
        <rect x="15" y="9" width="2" height="2" fill="#d49b38" />
        {/* Cheek Guards */}
        <rect x="10" y="10" width="3" height="2" fill="#135e5b" />
        <rect x="19" y="10" width="3" height="2" fill="#135e5b" />
        <rect x="10" y="10" width="1" height="2" fill="#d49b38" />
        <rect x="21" y="10" width="1" height="2" fill="#d49b38" />
        {/* Chin */}
        <rect x="14" y="11" width="4" height="1" fill="#be7a48" />

        {/* Neck / Collar Separation Gap */}
        <rect x="14" y="12" width="4" height="1" fill="#be7a48" />
        <rect x="13" y="12" width="6" height="1" fill="#d49b38" />

        {/* Arms / Hands Gripping Bar */}
        <rect x="7" y="13" width="3" height="3" fill="#d49b38" />
        <rect x="22" y="13" width="3" height="3" fill="#d49b38" />

        {/* Barbell (Dipped low at knees, neutral steel/iron) */}
        <rect x="3" y="13" width="26" height="1" fill="#94a3a0" />
        <rect x="5" y="13" width="22" height="1" fill="#dce3e0" />
        <rect x="5" y="12" width="1" height="3" fill="#4b5552" />
        <rect x="26" y="12" width="1" height="3" fill="#4b5552" />
        {/* Neutral Left & Right Plates */}
        <rect x="1" y="10" width="3" height="7" fill="#3c4542" />
        <rect x="0" y="11" width="1" height="5" fill="#687571" />
        <rect x="28" y="10" width="3" height="7" fill="#3c4542" />
        <rect x="31" y="11" width="1" height="5" fill="#687571" />

        {/* Torso (Squat Cuirass - Teal dominant) */}
        <rect x="11" y="13" width="10" height="5" fill="#1f8582" />
        <rect x="14" y="14" width="4" height="2" fill="#135e5b" />
        <rect x="13" y="15" width="6" height="1" fill="#d49b38" />

        {/* Skirt in Squat (Dark leather with bronze buckle) */}
        <rect x="10" y="18" width="12" height="2" fill="#3a2012" />
        <rect x="15" y="18" width="2" height="1" fill="#d49b38" />

        {/* Squat Legs (Thighs flexed wide) */}
        <rect x="6" y="19" width="5" height="3" fill="#e29d68" />
        <rect x="21" y="19" width="5" height="3" fill="#e29d68" />
        {/* Greaves */}
        <rect x="6" y="22" width="5" height="4" fill="#135e5b" />
        <rect x="21" y="22" width="5" height="4" fill="#135e5b" />
        <rect x="7" y="22" width="2" height="3" fill="#d49b38" />
        <rect x="22" y="22" width="2" height="3" fill="#d49b38" />
        {/* Boots */}
        <rect x="5" y="26" width="6" height="2" fill="#24130b" />
        <rect x="21" y="26" width="6" height="2" fill="#24130b" />
      </g>

      {/* FRAME 3: Upward Drive */}
      <g className="warrior-frame frame-3">
        {/* Crest */}
        <rect x="13" y="1" width="6" height="1" fill="#e52b2b" />
        <rect x="12" y="2" width="8" height="2" fill="#c62828" />
        <rect x="12" y="4" width="8" height="1" fill="#8e1515" />
        <rect x="13" y="5" width="6" height="1" fill="#d49b38" />

        {/* Arms Driving Upwards */}
        <rect x="7" y="6" width="3" height="6" fill="#e29d68" />
        <rect x="22" y="6" width="3" height="6" fill="#e29d68" />
        <rect x="7" y="4" width="3" height="3" fill="#d49b38" />
        <rect x="22" y="4" width="3" height="3" fill="#d49b38" />

        {/* Barbell (Driving upward past forehead, neutral steel/iron) */}
        <rect x="3" y="4" width="26" height="1" fill="#94a3a0" />
        <rect x="5" y="4" width="22" height="1" fill="#dce3e0" />
        <rect x="5" y="3" width="1" height="3" fill="#4b5552" />
        <rect x="26" y="3" width="1" height="3" fill="#4b5552" />
        {/* Neutral Left & Right Plates */}
        <rect x="1" y="1" width="3" height="7" fill="#3c4542" />
        <rect x="0" y="2" width="1" height="5" fill="#687571" />
        <rect x="28" y="1" width="3" height="7" fill="#3c4542" />
        <rect x="31" y="2" width="1" height="5" fill="#687571" />

        {/* Helmet (Teal dome & cheek guards, bronze trim) */}
        <rect x="11" y="6" width="10" height="1" fill="#135e5b" />
        <rect x="10" y="7" width="12" height="1" fill="#135e5b" />
        <rect x="12" y="7" width="8" height="1" fill="#d49b38" />
        {/* Eye Slits & Nose Guard */}
        <rect x="10" y="8" width="12" height="1" fill="#135e5b" />
        <rect x="13" y="8" width="2" height="1" fill="#080c0b" />
        <rect x="17" y="8" width="2" height="1" fill="#080c0b" />
        <rect x="15" y="8" width="2" height="2" fill="#d49b38" />
        {/* Cheek Guards */}
        <rect x="10" y="9" width="3" height="2" fill="#135e5b" />
        <rect x="19" y="9" width="3" height="2" fill="#135e5b" />
        <rect x="10" y="9" width="1" height="2" fill="#d49b38" />
        <rect x="21" y="9" width="1" height="2" fill="#d49b38" />
        {/* Chin */}
        <rect x="14" y="10" width="4" height="1" fill="#be7a48" />

        {/* Neck / Collar Separation Gap */}
        <rect x="14" y="11" width="4" height="1" fill="#be7a48" />
        <rect x="13" y="11" width="6" height="1" fill="#d49b38" />

        {/* Torso (Driving Cuirass - Teal dominant, starting at y=12) */}
        <rect x="11" y="12" width="10" height="5" fill="#1f8582" />
        <rect x="13" y="13" width="6" height="1" fill="#d49b38" />
        <rect x="15" y="14" width="2" height="2" fill="#d49b38" />

        {/* Skirt */}
        <rect x="11" y="17" width="10" height="1" fill="#3a2012" />
        <rect x="15" y="17" width="2" height="1" fill="#d49b38" />
        <rect x="11" y="18" width="10" height="3" fill="#3a2012" />
        <rect x="13" y="20" width="1" height="1" fill="#d49b38" />
        <rect x="17" y="20" width="1" height="1" fill="#d49b38" />

        {/* Legs Driving Straight */}
        <rect x="12" y="21" width="3" height="2" fill="#e29d68" />
        <rect x="17" y="21" width="3" height="2" fill="#e29d68" />
        {/* Greaves */}
        <rect x="11" y="23" width="4" height="5" fill="#135e5b" />
        <rect x="17" y="23" width="4" height="5" fill="#135e5b" />
        <rect x="12" y="23" width="2" height="4" fill="#d49b38" />
        <rect x="18" y="23" width="2" height="4" fill="#d49b38" />
        {/* Boots */}
        <rect x="10" y="28" width="5" height="2" fill="#24130b" />
        <rect x="17" y="28" width="5" height="2" fill="#24130b" />
      </g>

      {/* FRAME 4: Lockout & Triumphant Flex */}
      <g className="warrior-frame frame-4">
        {/* Barbell Overhead Lockout (Neutral steel/iron) */}
        <rect x="2" y="1" width="28" height="1" fill="#94a3a0" />
        <rect x="4" y="1" width="24" height="1" fill="#dce3e0" />
        <rect x="5" y="0" width="1" height="3" fill="#4b5552" />
        <rect x="26" y="0" width="1" height="3" fill="#4b5552" />
        {/* Neutral Left & Right Plates */}
        <rect x="1" y="0" width="3" height="6" fill="#3c4542" />
        <rect x="0" y="0" width="1" height="5" fill="#687571" />
        <rect x="28" y="0" width="3" height="6" fill="#3c4542" />
        <rect x="31" y="0" width="1" height="5" fill="#687571" />

        {/* Extended Arms (Locked vertical) */}
        <rect x="7" y="2" width="3" height="10" fill="#e29d68" />
        <rect x="22" y="2" width="3" height="10" fill="#e29d68" />
        <rect x="7" y="1" width="3" height="2" fill="#d49b38" />
        <rect x="22" y="1" width="3" height="2" fill="#d49b38" />

        {/* Golden Triumph Sparks */}
        <rect x="0" y="7" width="2" height="2" fill="#ffd700" />
        <rect x="30" y="7" width="2" height="2" fill="#ffd700" />
        <rect x="4" y="12" width="2" height="2" fill="#ffd700" />
        <rect x="26" y="12" width="2" height="2" fill="#ffd700" />

        {/* Crest (Towering prominently below bar) */}
        <rect x="13" y="2" width="6" height="1" fill="#e52b2b" />
        <rect x="12" y="3" width="8" height="2" fill="#c62828" />
        <rect x="12" y="5" width="8" height="1" fill="#8e1515" />
        <rect x="13" y="6" width="6" height="1" fill="#d49b38" />

        {/* Helmet (Teal dome & cheek guards, bronze trim) */}
        <rect x="11" y="7" width="10" height="1" fill="#135e5b" />
        <rect x="10" y="8" width="12" height="1" fill="#135e5b" />
        <rect x="12" y="8" width="8" height="1" fill="#d49b38" />
        {/* Eye Slits & Nose Guard */}
        <rect x="10" y="9" width="12" height="1" fill="#135e5b" />
        <rect x="13" y="9" width="2" height="1" fill="#080c0b" />
        <rect x="17" y="9" width="2" height="1" fill="#080c0b" />
        <rect x="15" y="9" width="2" height="2" fill="#d49b38" />
        {/* Cheek Guards */}
        <rect x="10" y="10" width="3" height="2" fill="#135e5b" />
        <rect x="19" y="10" width="3" height="2" fill="#135e5b" />
        <rect x="10" y="10" width="1" height="2" fill="#d49b38" />
        <rect x="21" y="10" width="1" height="2" fill="#d49b38" />
        {/* Chin */}
        <rect x="14" y="10" width="4" height="1" fill="#be7a48" />

        {/* Neck / Collar Separation Gap */}
        <rect x="14" y="11" width="4" height="1" fill="#be7a48" />
        <rect x="13" y="11" width="6" height="1" fill="#d49b38" />

        {/* Torso (Triumphant Teal Cuirass, Bronze harness detail) */}
        <rect x="11" y="12" width="10" height="6" fill="#1f8582" />
        <rect x="13" y="13" width="2" height="2" fill="#135e5b" />
        <rect x="17" y="13" width="2" height="2" fill="#135e5b" />
        <rect x="13" y="14" width="6" height="1" fill="#d49b38" />
        <rect x="15" y="16" width="2" height="2" fill="#d49b38" />

        {/* Skirt */}
        <rect x="11" y="18" width="10" height="1" fill="#3a2012" />
        <rect x="15" y="18" width="2" height="1" fill="#d49b38" />
        <rect x="10" y="19" width="12" height="3" fill="#3a2012" />
        <rect x="12" y="21" width="1" height="1" fill="#d49b38" />
        <rect x="15" y="21" width="1" height="1" fill="#d49b38" />
        <rect x="18" y="21" width="1" height="1" fill="#d49b38" />

        {/* Strong Stance Legs */}
        <rect x="11" y="22" width="4" height="2" fill="#e29d68" />
        <rect x="17" y="22" width="4" height="2" fill="#e29d68" />
        {/* Greaves */}
        <rect x="10" y="24" width="5" height="4" fill="#135e5b" />
        <rect x="17" y="24" width="5" height="4" fill="#135e5b" />
        <rect x="11" y="24" width="2" height="3" fill="#d49b38" />
        <rect x="18" y="24" width="2" height="3" fill="#d49b38" />
        {/* Boots Planted Wide */}
        <rect x="9" y="28" width="6" height="2" fill="#24130b" />
        <rect x="17" y="28" width="6" height="2" fill="#24130b" />
      </g>
    </svg>
  );
};
