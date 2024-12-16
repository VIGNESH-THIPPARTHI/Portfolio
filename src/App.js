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
import styled from "styled-components";
import { useState, useEffect } from "react";
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
`

const ScrollToTop = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: linear-gradient(
    225deg, 
    ${({ theme }) => theme.primary} 0%, 
    ${({ theme }) => theme.primary + "dd"} 100%
  );
  padding: 12px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  opacity: ${({ visible }) => visible ? '1' : '0'};
  transform: translateY(${({ visible }) => visible ? '0' : '20px'});
  transition: all 0.3s ease-in-out;
  z-index: 1000;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px ${({ theme }) => theme.primary + '90'};
    background: linear-gradient(
      225deg,
      ${({ theme }) => theme.primary + "ff"} 0%,
      ${({ theme }) => theme.primary} 100%
    );
  }

  &:active {
    transform: scale(0.95);
  }

  &::before {
    content: '↑';
    font-size: 20px;
    font-weight: bold;
    animation: bounce 1s infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
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
      <Router >
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