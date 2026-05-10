import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;
    transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease,
      backdrop-filter 0.35s ease;
    background: linear-gradient(180deg, rgba(18, 14, 28, 0.92), rgba(9, 9, 11, 0.88));
    backdrop-filter: blur(16px) saturate(1.4);
    -webkit-backdrop-filter: blur(16px) saturate(1.4);
    border-bottom: 1px solid rgba(139, 92, 246, 0.32);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);

    @media (max-width: 960px) {
        transition: 0.35s ease;
    }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;
export const LogoMark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 11px;
  font-family: var(--font-mono, monospace);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid rgba(139, 92, 246, 0.3);
  background: linear-gradient(
    160deg,
    rgba(139, 92, 246, 0.2),
    rgba(94, 234, 212, 0.08)
  );
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04) inset;
`;

export const LogoText = styled.span`
  margin-left: 11px;
  font-family: var(--font-display, system-ui);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.primary};
`;

export const Span = LogoText;
export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled.a`
    position: relative;
    color: ${({ theme }) => theme.secondary};
    font-weight: 500;
    font-size: 0.95rem;
    cursor: pointer;
    transition: color 0.2s ease;
    text-decoration: none;
    font-family: var(--font-body, system-ui);

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 100%;
      height: 2px;
      border-radius: 1px;
      background: linear-gradient(90deg, ${({ theme }) => theme.primaryMuted}, ${({ theme }) => theme.secondary});
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.2s ease;
    }

    :hover {
      color: ${({ theme }) => theme.primary};
      text-shadow: 0 0 18px rgba(139, 92, 246, 0.35);
    }

    :hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }

    &.active {
      color: ${({ theme }) => theme.primary};
      text-shadow: 0 0 18px rgba(139, 92, 246, 0.28);
    }
`;




export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.secondary};
  }
`

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: rgba(14, 14, 18, 0.96);
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.34);
    border-top: 1px solid rgba(139, 92, 246, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

`

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export  const MobileLink = styled.a`
  color: ${({ theme }) => theme.secondary};
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
    text-shadow: 0 0 14px rgba(139, 92, 246, 0.28);
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;