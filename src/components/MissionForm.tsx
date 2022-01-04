import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 20rem;
  height: 10rem;
  /* background-color: #035399; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
const BoxDiv = styled.div`
  width: 18rem;
  height: 8rem;
  background-color: rgba(185, 30, 30, 0.2);
`;
const MissionName = styled.h1`
  margin: auto;
  font-size: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-top: 1rem;
`;
const Links = styled.div`
  display: grid;
  padding-left: 1rem;
`;
const Website = styled.a`
  padding: 0.2rem;
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;
const Wiki = styled.a`
  padding: 0.2rem;
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

interface Props {
  mission: string;
  website: string;
  wiki: string;
}

export default function MissionForm({ mission, website, wiki }: Props) {
  return (
    <div>
      <MainDiv>
        <BoxDiv>
          <MissionName>{mission}</MissionName>
          <Links>
            <Website href={website}>Website</Website>
            <Wiki href={wiki}>Wiki</Wiki>
          </Links>
        </BoxDiv>
      </MainDiv>
    </div>
  );
}
