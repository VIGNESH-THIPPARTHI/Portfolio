import { ThemeProvider } from "styled-components";
import { darkTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import Spotlight from "./components/Spotlight";
import ScrollProgress from "./components/ScrollProgress";
import styled from "styled-components";
import { useState, useEffect } from "react";
const Body = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(ellipse 72% 45% at 50% -15%, rgba(167, 139, 250, 0.08), transparent),
      radial-gradient(ellipse 55% 35% at 100% 5%, rgba(94, 234, 212, 0.04), transparent),
      radial-gradient(ellipse 45% 28% at 0% 45%, rgba(251, 113, 133, 0.04), transparent);
  }
`

const ScrollToTop = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary} 0%,
    ${({ theme }) => theme.secondary} 100%
  );
  padding: 12px;
  border-radius: 50%;
  color: ${({ theme }) => theme.text_black};
  cursor: pointer;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  opacity: ${({ visible }) => visible ? '1' : '0'};
  transform: translateY(${({ visible }) => visible ? '0' : '24px'});
  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 10002;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow:
    0 0 0 1px rgba(168, 85, 247, 0.2),
    0 12px 40px rgba(0, 0, 0, 0.45);

  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow:
      0 0 30px rgba(34, 211, 238, 0.35),
      0 16px 48px rgba(0, 0, 0, 0.5);
  }

  &:active {
    transform: scale(0.96);
  }

  &::before {
    content: '↑';
    font-family: var(--font-display, system-ui);
    font-size: 20px;
    font-weight: 800;
    animation: bounce 1.2s ease-in-out infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Spotlight />
      <ScrollProgress />
      <Router >
        <div className="grain" aria-hidden="true" />
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
          </Wrapper>
          <Wrapper>  
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
          <ScrollToTop visible={showScroll} onClick={scrollTop}>
            
          </ScrollToTop>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;