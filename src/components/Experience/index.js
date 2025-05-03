import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import { TimelineDot as MuiTimelineDot, TimelineConnector as MuiTimelineConnector } from '@mui/lab';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 50px 0px 80px 0px;
    background: ${({ theme }) => theme.card + '15'};
    clip-path: polygon(0 0, 100% 5%, 100% 95%, 0 100%);
    @media (max-width: 960px) {
        padding: 40px 0px 60px 0px;
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
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled(motion.div)`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        height: 100%;
        width: 2px;
        left: calc(50% - 1px);
        background: linear-gradient(
            to bottom,
            transparent,
            ${({ theme }) => theme.primary + '80'},
            ${({ theme }) => theme.primary + '80'},
            transparent
        );
    }
`;

const StyledTimelineConnector = styled(MuiTimelineConnector)`
    background: linear-gradient(
        45deg,
        ${({ theme }) => theme.primary + '80'},
        ${({ theme }) => theme.primary}
    );
    width: 3px;
    box-shadow: 0 0 10px ${({ theme }) => theme.primary + '80'};
    animation: pulse 2s infinite;

    @keyframes pulse {
        0% { opacity: 0.6; transform: scaleX(1); }
        50% { opacity: 1; transform: scaleX(1.3); }
        100% { opacity: 0.6; transform: scaleX(1); }
    }
`;

const StyledTimelineDot = styled(MuiTimelineDot)`
    background: linear-gradient(
        45deg,
        ${({ theme }) => theme.primary + '80'},
        ${({ theme }) => theme.primary}
    );
    padding: 8px;
    margin: 0;
    box-shadow: 0 0 20px ${({ theme }) => theme.primary + '80'};
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.3);
        box-shadow: 0 0 30px ${({ theme }) => theme.primary};
    }
`;

const StyledTimelineItem = styled(TimelineItem)`
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.02);
        
        ${StyledTimelineDot} {
            transform: scale(1.3);
        }
        
        ${StyledTimelineConnector} {
            opacity: 1;
            transform: scaleX(1.5);
        }
    }
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.text_secondary + '20'};
    border-radius: 2px;
    margin-top: 20px;
    overflow: hidden;
`;

const Progress = styled(motion.div)`
    height: 100%;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
    border-radius: 2px;
`;

const Experience = () => {
    const [progress, setProgress] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    useEffect(() => {
        if (inView) {
            setProgress(100);
        }
    }, [inView]);

    return (
        <Container id="experience">
            <Wrapper>
                <Title
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Professional Journey
                </Title>
                <TimelineSection ref={ref}>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <StyledTimelineItem key={index}>
                                <TimelineSeparator>
                                    <StyledTimelineDot variant="outlined" />
                                    {index !== experiences.length - 1 && <StyledTimelineConnector />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience}/>
                                </TimelineContent>
                            </StyledTimelineItem>
                        ))}
                    </Timeline>
                    <ProgressBar>
                        <Progress
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                    </ProgressBar>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Experience