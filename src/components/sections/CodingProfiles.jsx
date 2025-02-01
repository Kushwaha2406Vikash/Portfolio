import React from "react";
import styled from "styled-components";
import { profiles} from "../../data/constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CodingProfilesCard from "../cards/CodingProfilesCard";

const Container = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
align-items: center;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
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
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CodingProfiles = () => {
  return (
    <Container id="CodingProfile">
      <Wrapper>
        <Title>Coding Profile</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
         "Experienced in algorithms, data structures, and problem-solving. Active on LeetCode/GFG, constantly enhancing coding skills. Seeking opportunities to contribute, grow, and solve complex challenges."
        </Desc>

        <VerticalTimeline>
        {profiles.map((profile, index) => (
       
        <CodingProfilesCard key={`profile-${index}`} profile={profile} />
      ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default CodingProfiles;
