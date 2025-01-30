import React, { useEffect, useState } from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHub, Email } from '@mui/icons-material';
import LeetCodeIcon from '../Icons/LeetCodeIcon';
  
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize and close mobile menu if screen becomes larger than mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) { // 768px is typically mobile breakpoint
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <button 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              color: "white", 
              marginBottom: '20;', 
              cursor: 'pointer', 
              background: 'none', 
              border: 'none' 
            }} 
            onClick={() => window.location.href = '/'}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </button>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={toggleMenu} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#contact'><Email/></NavLink>
          <NavLink href="https://leetcode.com/VIGNESH_12B2/" target="_blank">
            <LeetCodeIcon />
          </NavLink>
          <NavLink href="https://www.linkedin.com/in/vignesh-thipparthi/" target="_blank"><LinkedInIcon/></NavLink>
          <NavLink href={Bio.github} target="_blank"><GitHub/></NavLink>
        </NavItems>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={toggleMenu}>About</MobileLink>
            <MobileLink href='#skills' onClick={toggleMenu}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={toggleMenu}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={toggleMenu}>Projects</MobileLink>
            <MobileLink href='#education' onClick={toggleMenu}>Education</MobileLink>
            <MobileLink href='#contact' onClick={toggleMenu}>Contact</MobileLink>
            <MobileLink href={Bio.github} target="_blank" onClick={toggleMenu}>Github</MobileLink>
            <MobileLink href="https://www.linkedin.com/in/vignesh-thipparthi/" target="_blank" onClick={toggleMenu}>LinkedIn</MobileLink>
            <MobileLink href="https://leetcode.com/VIGNESH_12B2/" target="_blank" onClick={toggleMenu}>LeetCode</MobileLink>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
