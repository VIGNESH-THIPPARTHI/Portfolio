import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled(motion.article)`
  width: 330px;
  min-height: 480px;
  background: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  overflow: hidden;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  transition: box-shadow 0.35s ease;
  box-shadow: 0 20px 56px rgba(0, 0, 0, 0.45);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
      145deg,
      rgba(168, 85, 247, 0.5),
      rgba(34, 211, 238, 0.15) 50%,
      rgba(244, 114, 182, 0.25)
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.35;
    pointer-events: none;
    transition: opacity 0.35s ease;
  }

  &:hover {
    box-shadow: 0 28px 72px rgba(0, 0, 0, 0.55),
      0 0 48px rgba(168, 85, 247, 0.12);
  }

  &:hover::before {
    opacity: 0.85;
  }

  @media (max-width: 400px) {
    width: 100%;
    max-width: 360px;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: ${({ theme }) => theme.bgElevated};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);

  ${Card}:hover & {
    transform: scale(1.06);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.card} 0%,
    transparent 55%
  );
  pointer-events: none;
`;

const CardBody = styled.div`
  padding: 22px 22px 26px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.secondary};
  background: rgba(34, 211, 238, 0.08);
  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.h3`
  font-family: var(--font-display, system-ui);
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.text_primary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_tertiary};
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.55;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Hint = styled.span`
  margin-top: auto;
  padding-top: 12px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  opacity: 0.9;
`;

function previewDescription(description) {
  if (Array.isArray(description)) {
    return typeof description[0] === "string" ? description[0] : "";
  }
  return description || "";
}

const ProjectCards = ({ project, setOpenModal }) => {
  const blurb = previewDescription(project.description);

  return (
    <Card
      onClick={() => setOpenModal({ state: true, project })}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
    >
      <ImageWrap>
        <Image src={project.image} alt="" />
        <ImageOverlay />
      </ImageWrap>
      <CardBody>
        <Tags>
          {project.tags?.slice(0, 4).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Details>
          <Title>{project.title}</Title>
          <Date>{project.date}</Date>
          <Description>{blurb}</Description>
        </Details>
        <Hint>Open details →</Hint>
      </CardBody>
    </Card>
  );
};

export default ProjectCards;
