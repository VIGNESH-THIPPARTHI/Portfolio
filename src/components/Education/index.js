import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import { education } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 56px 20px 72px;

  @media (max-width: 960px) {
    padding: 40px 16px 56px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  gap: 12px;
`;

const Title = styled.h2`
  font-family: var(--font-display, system-ui);
  font-size: clamp(2rem, 4vw, 2.75rem);
  text-align: center;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-top: 8px;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.p`
  font-size: 1.05rem;
  text-align: center;
  max-width: 560px;
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const EducationPage = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          Coursework and milestones that shaped how I think about systems,
          software, and continuous learning.
        </Desc>
        <TimelineSection>
          <Timeline sx={{ padding: 0 }}>
            {education.map((edu) => (
              <TimelineItem key={edu.id}>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={edu} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default EducationPage;
