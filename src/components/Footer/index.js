import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../../data/constants";
import { GitHub } from "@mui/icons-material";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 1rem 2.5rem;
  display: flex;
  justify-content: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 8%;
    right: 8%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(168, 85, 247, 0.45),
      rgba(34, 211, 238, 0.45),
      transparent
    );
  }
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  padding: 0.5rem 1rem 0;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.p`
  font-family: var(--font-display, system-ui);
  font-weight: 800;
  font-size: 1.05rem;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.text_primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  gap: 1.75rem;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 0.5rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  font-size: 1.35rem;
  color: ${({ theme }) => theme.text_secondary};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  background: ${({ theme }) => theme.bgElevated};
  transition: color 0.2s ease, transform 0.2s ease, border-color 0.2s ease,
    box-shadow 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.primary + "44"};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  }
`;

const FinePrint = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.text_tertiary};
  margin-top: 8px;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>VIGNESH THIPPARTHI</Logo>
        <Nav aria-label="Footer">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin.trim()} target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="_blank" rel="noreferrer">
            <GitHub />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="_blank" rel="noreferrer">
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <FinePrint>A personal site—about the work, the stack, and the journey.</FinePrint>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
