import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const meshShift = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.55; }
  50% { transform: translate(-3%, 2%) rotate(3deg); opacity: 0.85; }
`;

export const HeroContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: min(92vh, 900px);
  padding: 100px 24px 80px;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 88px 20px 64px;
    min-height: auto;
  }
`;

export const AuroraLayer = styled.div`
  position: absolute;
  inset: -20% -10% auto -10%;
  height: 70%;
  pointer-events: none;
  will-change: transform;
  background: radial-gradient(
      ellipse 55% 50% at 72% 12%,
      rgba(167, 139, 250, 0.16),
      transparent 58%
    ),
    radial-gradient(
      ellipse 45% 40% at 18% 55%,
      rgba(94, 234, 212, 0.08),
      transparent 52%
    ),
    radial-gradient(
      ellipse 38% 32% at 88% 78%,
      rgba(251, 113, 133, 0.07),
      transparent 48%
    );
  filter: blur(2px);
  animation: ${meshShift} 14s ease-in-out infinite;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
`;

export const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.55;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(
    ellipse 75% 65% at 50% 35%,
    #000 0%,
    transparent 72%
  );
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1400px;
  height: 100%;
  overflow: visible;
  pointer-events: none;
  opacity: 0.35;

  @media (max-width: 960px) {
    opacity: 0.22;
    justify-content: center;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: clamp(32px, 5vw, 72px);
  width: 100%;
  max-width: 1180px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const HeroLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  max-width: 640px;

  @media (max-width: 960px) {
    align-items: center;
    order: 2;
  }
`;

export const Eyebrow = styled.span`
  font-family: var(--font-mono, monospace);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.text_secondary};
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  background: rgba(255, 255, 255, 0.02);
`;

export const Title = styled.h1`
  font-family: var(--font-display, system-ui);
  font-weight: 700;
  font-size: clamp(2.75rem, 6vw, 4.35rem);
  line-height: 1.03;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.045em;
`;

export const Lead = styled.p`
  font-size: clamp(1.08rem, 2.15vw, 1.35rem);
  line-height: 1.68;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 38rem;
  font-weight: 400;

  strong {
    color: ${({ theme }) => theme.text_primary};
    font-weight: 600;
  }

  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const StatsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 6px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const StatChip = styled.span`
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${({ theme }) => theme.text_secondary};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  background: rgba(255, 255, 255, 0.02);

  b {
    color: ${({ theme }) => theme.text_tertiary};
    font-weight: 600;
    margin-right: 8px;
  }
`;

export const GradientName = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const FocusRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const FocusLabel = styled.span`
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text_tertiary};
`;

export const TextLoop = styled.div`
  font-family: var(--font-display, system-ui);
  font-weight: 700;
  font-size: clamp(1.08rem, 2.5vw, 1.42rem);
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.38;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.secondary};
  min-height: 1.35em;
`;

export const SubTitle = styled.p`
  font-size: clamp(0.98rem, 1.5vw, 1.07rem);
  line-height: 1.75;
  color: ${({ theme }) => theme.text_tertiary};
  max-width: 40rem;

  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const StoryBody = styled.p`
  font-size: clamp(1rem, 1.9vw, 1.12rem);
  line-height: 1.72;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 40rem;
  margin: 0;

  @media (max-width: 960px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CollaborateAside = styled.p`
  font-size: 13px;
  line-height: 1.65;
  color: ${({ theme }) => theme.text_tertiary};
  max-width: 40rem;
  margin: 0;

  @media (max-width: 960px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  a {
    color: ${({ theme }) => theme.secondary};
    font-weight: 600;
    text-decoration: none;
    margin-left: 4px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 8px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const ResumeButton = styled.a`
  appearance: none;
  text-decoration: none;
  text-align: center;
  padding: 15px 26px;
  min-width: 160px;
  border-radius: 12px;
  cursor: pointer;
  font-family: var(--font-body, system-ui);
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_black};
  border: none;
  background: ${({ theme }) => theme.text_primary};
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.12) inset;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.35);
  }
`;

export const GhostButton = styled.a`
  text-decoration: none;
  text-align: center;
  padding: 15px 26px;
  min-width: 160px;
  border-radius: 12px;
  cursor: pointer;
  font-family: var(--font-body, system-ui);
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(167, 139, 250, 0.4);
    background: rgba(255, 255, 255, 0.03);
  }
`;

export const SocialStrip = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 12px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  transition: color 0.2s ease, transform 0.2s ease, border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.primary + "44"};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  }

  svg {
    font-size: 20px;
  }
`;

export const HeroRightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 800px) {
    order: 1;
    margin-bottom: 12px;
  }
`;

export const PortraitWrap = styled.div`
  position: relative;
  width: min(100%, 400px);
  aspect-ratio: 1;
  border-radius: 24px;
  padding: 1px;
  background: linear-gradient(
    145deg,
    rgba(167, 139, 250, 0.45),
    rgba(94, 234, 212, 0.22) 42%,
    rgba(251, 113, 133, 0.16)
  );
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.42);
`;

export const PortraitInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 23px;
  overflow: hidden;
  background: ${({ theme }) => theme.bgElevated};
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04) inset;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.02);
  }
`;

export const HeroLeftMotion = motion(HeroLeftContainer);
export const HeroRightMotion = motion(HeroRightContainer);

export const FloatingBadge = styled.div`
  position: absolute;
  bottom: 10%;
  left: -2%;
  padding: 12px 16px;
  border-radius: 14px;
  font-size: 12px;
  font-weight: 600;
  font-family: var(--font-mono, monospace);
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.text_secondary};
  background: rgba(9, 9, 11, 0.72);
  border: 1px solid ${({ theme }) => theme.cardBorder};
  backdrop-filter: blur(14px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
  z-index: 2;

  span {
    display: block;
    font-size: 10px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_tertiary};
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  @media (max-width: 960px) {
    left: 50%;
    transform: translateX(-50%);
    bottom: -8px;
  }
`;
