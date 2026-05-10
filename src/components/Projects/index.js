import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  const filtered =
    toggle === "all"
      ? projects
      : projects.filter((item) => item.category === toggle);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Things I&apos;ve built</Title>
        <Desc>
          Shipping experiments, coursework, and production pieces—what I reach
          for when learning and when it has to work.
        </Desc>
        <ToggleButtonGroup role="tablist" aria-label="Filter projects">
          <ToggleButton
            type="button"
            $active={toggle === "all"}
            onClick={() => setToggle("all")}
            aria-selected={toggle === "all"}
          >
            All
          </ToggleButton>
          <Divider />
          <ToggleButton
            type="button"
            $active={toggle === "web app"}
            onClick={() => setToggle("web app")}
            aria-selected={toggle === "web app"}
          >
            Web
          </ToggleButton>
          <Divider />
          <ToggleButton
            type="button"
            $active={toggle === "machine learning"}
            onClick={() => setToggle("machine learning")}
            aria-selected={toggle === "machine learning"}
          >
            ML
          </ToggleButton>
          <Divider />
          <ToggleButton
            type="button"
            $active={toggle === "Iot"}
            onClick={() => setToggle("Iot")}
            aria-selected={toggle === "Iot"}
          >
            IoT
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
