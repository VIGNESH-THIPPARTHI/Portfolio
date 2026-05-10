import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  AuroraLayer,
  HeroBg,
  HeroLeftMotion,
  HeroRightMotion,
  HeroInnerContainer,
  TextLoop,
  FocusRow,
  FocusLabel,
  Title,
  GradientName,
  Lead,
  Span,
  SubTitle,
  ResumeButton,
  GhostButton,
  ButtonRow,
  Eyebrow,
  SocialStrip,
  SocialLink,
  PortraitWrap,
  PortraitInner,
  FloatingBadge,
  GridOverlay,
  StatsRow,
  StatChip,
  StoryBody,
  CollaborateAside,
} from "./HeroStyle";
import HeroImg from "../../images/HeroImage.png";
import Typewriter from "typewriter-effect";
import { Bio, heroStats } from "../../data/constants";
import { GitHub, LinkedIn } from "@mui/icons-material";
import LeetCodeIcon from "../Icons/LeetCodeIcon";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
};

const portrait = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const HeroSection = () => {
  const linkedin = Bio.linkedin.trim();
  const [auroraShift, setAuroraShift] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return undefined;

    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 22;
      const y = (e.clientY / window.innerHeight - 0.5) * 22;
      setAuroraShift({ x, y });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div id="about">
      <HeroContainer>
        <GridOverlay aria-hidden />
        <AuroraLayer
          aria-hidden
          style={{
            transform: `translate(${auroraShift.x}px, ${auroraShift.y}px)`,
          }}
        />
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>

        <HeroInnerContainer>
          <HeroLeftMotion variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <Eyebrow>{Bio.tagline}</Eyebrow>
            </motion.div>

            <motion.div variants={item}>
              <Title>
                Hi, I&apos;m <GradientName>{Bio.name}</GradientName>
              </Title>
            </motion.div>

            <motion.div variants={item}>
              <Lead>{Bio.headline}</Lead>
            </motion.div>

            <motion.div variants={item}>
              <StoryBody>{Bio.story}</StoryBody>
            </motion.div>

            <motion.div variants={item}>
              <FocusRow>
                <FocusLabel>Focus</FocusLabel>
                <TextLoop>
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </FocusRow>
            </motion.div>

            <motion.div variants={item}>
              <SubTitle>{Bio.description}</SubTitle>
            </motion.div>

            <motion.div variants={item}>
              <StatsRow>
                {heroStats.map((s) => (
                  <StatChip key={s.label}>
                    <b>{s.label}</b>
                    {s.value}
                  </StatChip>
                ))}
              </StatsRow>
            </motion.div>

            <motion.div variants={item}>
              <CollaborateAside>
                {Bio.collaborationLine}
                <a href="#contact">Get in touch</a>
              </CollaborateAside>
            </motion.div>

            <motion.div variants={item}>
              <ButtonRow>
                <ResumeButton href={Bio.resume} target="_blank" rel="noreferrer">
                  Résumé
                </ResumeButton>
                <GhostButton href="#skills">Skills</GhostButton>
                <GhostButton href="#projects">Projects</GhostButton>
              </ButtonRow>
            </motion.div>

            <motion.div variants={item}>
              <SocialStrip>
                <SocialLink href={Bio.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GitHub fontSize="inherit" />
                </SocialLink>
                <SocialLink href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedIn fontSize="inherit" />
                </SocialLink>
                <SocialLink href={Bio.Leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">
                  <LeetCodeIcon />
                </SocialLink>
              </SocialStrip>
            </motion.div>
          </HeroLeftMotion>

          <HeroRightMotion initial="hidden" animate="show" variants={portrait}>
            <PortraitWrap>
              <PortraitInner>
                <img src={HeroImg} alt={`${Bio.shortName}`} />
              </PortraitInner>
            </PortraitWrap>
            <FloatingBadge>
              Designed & engineered by hand
            </FloatingBadge>
          </HeroRightMotion>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
