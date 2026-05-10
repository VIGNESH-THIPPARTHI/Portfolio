import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { skills, marqueeTech } from "../../data/constants";

const marqueeScroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const MarqueeOuter = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 40px;
  mask-image: linear-gradient(
    90deg,
    transparent,
    #000 10%,
    #000 90%,
    transparent
  );
`;

const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  gap: 3.5rem;
  animation: ${marqueeScroll} 42s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  &:hover {
    animation-play-state: paused;
  }
`;

const MarqueeItem = styled.span`
  font-family: var(--font-display, system-ui);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text_tertiary};
  white-space: nowrap;
  flex-shrink: 0;

  &::after {
    content: "·";
    margin-left: 3.5rem;
    color: ${({ theme }) => theme.primary};
    opacity: 0.45;
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 72px 20px 88px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 16px;
`;

export const Title = styled.h2`
  font-family: var(--font-display, system-ui);
  font-size: clamp(2rem, 4vw, 2.75rem);
  text-align: center;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-top: 8px;
  color: ${({ theme }) => theme.text_primary};
`;

export const Desc = styled.p`
  font-size: 1.05rem;
  text-align: center;
  max-width: 560px;
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 28px;
  justify-content: center;
`;

const Skill = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 20px;
  padding: 28px 32px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(168, 85, 247, 0.35),
      transparent 40%,
      rgba(34, 211, 238, 0.2)
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.7;
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    right: -30%;
    width: 60%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(168, 85, 247, 0.12),
      transparent 70%
    );
    pointer-events: none;
  }
`;

const SkillTitle = styled.h3`
  font-family: var(--font-display, system-ui);
  font-size: 1.35rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 22px;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 8px;
  position: relative;
  z-index: 1;
`;

const SkillImage = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
`;

const SkillItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 12px;
  padding: 11px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: transform 0.25s ease, border-color 0.25s ease,
    box-shadow 0.25s ease;
  background: ${({ theme }) => theme.bgElevated};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    border-color: ${({ theme }) => theme.primary + "55"};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35),
      0 0 24px rgba(168, 85, 247, 0.12);
  }

  &:hover ${SkillImage} {
    transform: rotate(12deg) scale(1.08);
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 9px 12px;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Skills = () => {
  const loop = [...marqueeTech, ...marqueeTech];

  return (
    <Container id="skills">
      <Wrapper>
        <MarqueeOuter aria-hidden>
          <MarqueeTrack>
            {loop.map((tech, i) => (
              <MarqueeItem key={`${tech}-${i}`}>{tech}</MarqueeItem>
            ))}
          </MarqueeTrack>
        </MarqueeOuter>
        <Title>Skills & tooling</Title>
        <Desc>
          From pixel-level UI to production APIs and telemetry—the toolbox I use
          to ship at startup speed and enterprise bar.
        </Desc>
        <SkillsContainer
          as={motion.div}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skills.map((skill) => (
            <Skill key={skill.title} variants={card}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem key={`${skill.title}-${item.name}`}>
                    <SkillImage src={item.image} alt="" />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
