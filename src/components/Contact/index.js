import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;


const ContactButton = styled.button`

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  color: ${({ theme }) => theme.text_primary};
  padding: 10px 24px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.card};
    transform: translateY(-2px);
  }

  svg {
    font-size: 20px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const ArrowIcon = styled.span`
  display: inline-block;
  transform: rotate(-45deg);
  border: solid currentColor;
  border-width: 0 2px 2px 0;
  padding: 3px;
  margin-left: 4px;
  transition: transform 0.3s ease;

  ${ContactButton}:hover & {
    transform: rotate(-45deg) translate(2px, 2px);
  }
`;



const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:thipparthivignesh3004@gmail.com';
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
        I’m available for any inquiries or collaboration opportunities—feel free to reach out!
        </Desc>
          <ContactButton onClick={handleEmailClick}>
            Email Me 🚀
            <ArrowIcon />
          </ContactButton>
      </Wrapper>
    </Container>
  );
};

export default Contact;