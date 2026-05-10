import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 56px 20px 100px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 10% -20% auto;
    height: 50%;
    background: radial-gradient(
      ellipse 60% 50% at 50% 0%,
      rgba(167, 139, 250, 0.05),
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  gap: 16px;
`;

export const Title = styled.h2`
  font-family: var(--font-display, system-ui);
  font-size: clamp(2rem, 4vw, 2.75rem);
  text-align: center;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-top: 8px;
  color: ${({ theme }) => theme.text_primary};
`;

export const Desc = styled.p`
  font-size: 1.05rem;
  text-align: center;
  max-width: 560px;
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  border-radius: 999px;
  font-weight: 600;
  margin: 28px 0 8px;
  padding: 6px;
  background: ${({ theme }) => theme.bgElevated};
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35);
  font-family: var(--font-body, system-ui);

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 4px;
  }
`;

export const ToggleButton = styled.button`
  padding: 10px 20px;
  border-radius: 999px;
  cursor: pointer;
  border: none;
  font: inherit;
  background: ${({ $active, theme }) =>
    $active
      ? `linear-gradient(135deg, ${theme.primary}dd, ${theme.secondary}aa)`
      : "transparent"};
  color: ${({ $active, theme }) =>
    $active ? theme.text_black : theme.text_secondary};
  transition: transform 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
  box-shadow: ${({ $active }) =>
    $active ? "0 8px 24px rgba(168, 85, 247, 0.35)" : "none"};

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
  }
`;

export const Divider = styled.div`
  width: 1px;
  align-self: stretch;
  min-height: 28px;
  background: ${({ theme }) => theme.cardBorder};
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 32px;
  flex-wrap: wrap;
  margin-top: 32px;
`;
