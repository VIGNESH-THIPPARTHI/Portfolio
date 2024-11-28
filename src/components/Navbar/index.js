import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHub, Email } from '@mui/icons-material';
import LeetCodeIcon from '../Icons/LeetCodeIcon';
  
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <button style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer', background: 'none', border: 'none' }} onClick={() => window.location.href = '/'}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </button>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
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
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <MobileLink href='#contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>
            <MobileLink target="_blank">Github</MobileLink>
            <MobileLink href="https://www.linkedin.com/in/vignesh-thipparthi/" target="_blank">LinkedIn</MobileLink>
            <MobileLink href="https://leetcode.com/VIGNESH_12B2/" target="_blank">LeetCode</MobileLink>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
