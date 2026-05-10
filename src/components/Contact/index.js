import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { Bio } from "../../data/constants";

const Container = styled.section`
  position: relative;
  z-index: 1;
  padding: 0 22px 104px;
`;

const Inner = styled.div`
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-family: var(--font-display, system-ui);
  font-size: clamp(1.75rem, 3.5vw, 2.25rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 14px;
`;

const Lead = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 28px;
`;

const Panel = styled(motion.div)`
  padding: 32px 28px 34px;
  border-radius: 20px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  box-shadow: ${({ theme }) =>
    theme.shadowCard || "0 24px 48px rgba(0,0,0,0.4)"};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 22px;
`;

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text_black};
  background: ${({ theme }) => theme.text_primary};
  transition: transform 0.2s ease, opacity 0.2s ease;
  &:hover {
    transform: translateY(-1px);
    opacity: 0.94;
  }
`;

const OutlineBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  background: transparent;
  transition: border-color 0.2s ease, transform 0.2s ease;
  &:hover {
    transform: translateY(-1px);
    border-color: rgba(167, 139, 250, 0.4);
  }
`;

const Hint = styled.p`
  font-size: 13px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_tertiary};
`;

const HintStrong = styled.strong`
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 600;
`;

const Mail = styled.a`
  color: ${({ theme }) => theme.secondary};
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const Contact = () => {
  const mailto = `mailto:${Bio.email}?subject=Hello%20%E2%80%94%20from%20your%20portfolio`;

  return (
    <Container id="contact">
      <Inner>
        <Title>Say hello</Title>
        <Lead>
          The best introductions are human: share what you&apos;re curious
          about, what you&apos;re building, or what drew you here.
        </Lead>
        <Panel
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Actions>
            <PrimaryBtn href={mailto}>
              <EmailOutlinedIcon sx={{ fontSize: 22 }} />
              Email me
            </PrimaryBtn>
            <OutlineBtn href={Bio.resume} target="_blank" rel="noreferrer">
              <DescriptionOutlinedIcon sx={{ fontSize: 22 }} />
              Résumé
            </OutlineBtn>
          </Actions>
          <Hint>
            <HintStrong>Collaboration.</HintStrong> {Bio.collaborationLine}{" "}
            <Mail href={mailto}>Same inbox.</Mail>
          </Hint>
        </Panel>
      </Inner>
    </Container>
  );
};

export default Contact;
