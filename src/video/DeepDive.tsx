/**
 * Video 3 — 45s Deep Dive (1280x720, 30fps = 1350 frames)
 *
 * Scenes:
 *   0–3s   (0–90f)      Title card intro
 *   3–7s   (90–210f)    OEMs + country filters
 *   7–12s  (210–360f)   Motors — 3D model + supply chain
 *   12–17s (360–510f)   Reducers — bottleneck alert
 *   17–22s (510–660f)   Actuators — linear/rotary toggle
 *   22–27s (660–810f)   Battery — CATL supply chain
 *   27–33s (810–990f)   Geopolitics — sovereignty
 *   33–40s (990–1200f)  Cut the Wire — sanctions
 *   40–45s (1200–1350f) Company drilldown + CTA
 */

import {
  AbsoluteFill,
  OffthreadVideo,
  staticFile,
} from 'remotion';
import { TransitionSeries, linearTiming } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import { slide } from '@remotion/transitions/slide';
import { wipe } from '@remotion/transitions/wipe';
import { TitleCard } from './components/TitleCard';
import { SceneOverlay } from './components/SceneOverlay';
import { ProgressBar } from './components/ProgressBar';

const FPS = 30;
const T = 10; // transition frames (~0.33s — snappier for deep dive)

function ClipScene({
  clip,
  title,
  duration: _,
  caption,
}: {
  clip: string;
  title: string;
  duration: number;
  caption?: string;
}) {
  return (
    <AbsoluteFill>
      <OffthreadVideo
        src={staticFile(`clips/${clip}.webm`)}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <SceneOverlay title={title} caption={caption} variant="dark" delay={6} />
    </AbsoluteFill>
  );
}

export function DeepDive() {
  return (
    <AbsoluteFill style={{ backgroundColor: '#f5f2ed' }}>
      <TransitionSeries>
        {/* Intro title */}
        <TransitionSeries.Sequence durationInFrames={3 * FPS}>
          <TitleCard
            title="Humanoid Atlas"
            subtitle="Full walkthrough"
            delay={5}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* OEMs + filters */}
        <TransitionSeries.Sequence durationInFrames={4 * FPS}>
          <ClipScene
            clip="oems-filters"
            title="13 OEMs across US, China & Europe"
            duration={4 * FPS}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: 'from-right' })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Motors */}
        <TransitionSeries.Sequence durationInFrames={5 * FPS}>
          <ClipScene
            clip="motors-chain"
            title="Trace every component — Motors"
            duration={5 * FPS}
            caption="Click any supplier to see its connections"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: 'from-left' })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Reducers (bottleneck) */}
        <TransitionSeries.Sequence durationInFrames={5 * FPS}>
          <ClipScene
            clip="reducers-bottleneck"
            title="Identify supply chain bottlenecks"
            duration={5 * FPS}
            caption="Harmonic Drive: 36% of actuator cost"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: 'from-right' })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Actuators toggle */}
        <TransitionSeries.Sequence durationInFrames={5 * FPS}>
          <ClipScene
            clip="actuators-toggle"
            title="Compare actuator architectures"
            duration={5 * FPS}
            caption="Linear vs Rotary — toggle between 3D models"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: 'from-right' })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Battery */}
        <TransitionSeries.Sequence durationInFrames={5 * FPS}>
          <ClipScene
            clip="battery-chain"
            title="Follow the battery supply chain"
            duration={5 * FPS}
            caption="CATL supplies 5 of 6 Chinese OEMs"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Geopolitics sovereignty */}
        <TransitionSeries.Sequence durationInFrames={6 * FPS}>
          <ClipScene
            clip="geo-sovereignty"
            title="US vs China vs Rest — Sovereignty analysis"
            duration={6 * FPS}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: 'from-left' })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Cut the Wire */}
        <TransitionSeries.Sequence durationInFrames={7 * FPS}>
          <ClipScene
            clip="cut-the-wire"
            title="Cut the Wire — Sanction simulator"
            duration={7 * FPS}
            caption="Remove a country's suppliers and see the cascade"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* AGIBot drilldown + CTA */}
        <TransitionSeries.Sequence durationInFrames={3 * FPS}>
          <ClipScene
            clip="agibot-detail"
            title="Deep dive into any OEM"
            duration={3 * FPS}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* CTA */}
        <TransitionSeries.Sequence durationInFrames={2 * FPS}>
          <TitleCard
            title="Humanoid Atlas"
            subtitle="humanoids.fyi"
            bg="#1a1a1a"
            color="#f5f2ed"
            delay={3}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>

      <ProgressBar color="#1a1a1a" height={3} />
    </AbsoluteFill>
  );
}
