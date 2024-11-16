import React from 'react'
import styled from 'styled-components'

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    background: ${({ theme }) => theme.card};
    border: 0.1px solid ${({ theme }) => theme.primary + 20};
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;

    &:hover {
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
        border-color: ${({ theme }) => theme.primary};
    }

    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            225deg,
            ${({ theme }) => theme.primary + '20'} 0%,
            ${({ theme }) => theme.card} 100%
        );
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    &:hover::before {
        opacity: 1;
    }
`;

const ExpandedContent = styled.div`
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;

    ${Card}:hover & {
        max-height: 1000px;
    }
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: 10px;
    position: relative;
    z-index: 2;
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    padding: 2px 8px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.primary + "20"};
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 768px){
        font-size: 12px;
    }

    ${Card}:hover & {
        background-color: ${({ theme }) => theme.primary + "40"};
        color: ${({ theme }) => theme.text_primary};
    }
`;

const ProjectSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease-in-out;

    ${Card}:hover & {
        opacity: 1;
        transform: translateY(0);
    }
`;

const ProjectTitle = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 8px;

    &::before {
        content: '';
        width: 8px;
        height: 8px;
        background: ${({ theme }) => theme.primary};
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
    }

    ${Card}:hover &::before {
        width: 12px;
        height: 12px;
    }
`;

const ProjectDesc = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 8px;
`;

const BulletPoints = styled.ul`
  margin-left: 16px;
  list-style-type: disc;
  color: ${({ theme }) => theme.text_secondary};
`;

const BulletPoint = styled.li`
  font-size: 14px;
  margin-bottom: 4px;
  line-height: 1.5;
`;

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                <Span>{experience.desc}</Span>
            </Description>
            
            {experience.skills && (
                <Skills>
                    <ItemWrapper>
                        {experience.skills.map((skill, index) => (
                            <Skill key={index}>{skill}</Skill>
                        ))}
                    </ItemWrapper>
                </Skills>
            )}
            
            <ExpandedContent>
                {experience.projects && (
                    <ProjectSection>
                        {experience.projects.map((project, index) => (
                            <div key={index}>
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <ProjectDesc>{project.desc}</ProjectDesc>
                                <BulletPoints>
                                    {project.points.map((point, idx) => (
                                        <BulletPoint key={idx}>{point}</BulletPoint>
                                    ))}
                                </BulletPoints>
                            </div>
                        ))}
                    </ProjectSection>
                )}
            </ExpandedContent>
        </Card>
    )
}

export default ExperienceCard