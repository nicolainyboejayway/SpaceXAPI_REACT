import React from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import MissionForm from "./MissionForm";

const MainDiv = styled.div``;

const MissionDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: floralwhite;
  width: 100vw;
`;

const ImageDiv = styled.div`
  padding-right: 10rem;
  margin: auto;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 5rem;
  width: 100vw;
  margin: auto;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

interface MissionDetails {
  id: string;
  description: string;
  wikipedia: string;
  name: string;
  website: string;
}

interface MissionImages {
  flickr_images: string;
  mission_name: string;
  links: any;
}

interface MissionDetailsData {
  missions: MissionDetails[];
  launches: MissionImages[];
}

const MISSION_LATEST = gql`
  {
    missions(limit: 10) {
      id
      wikipedia
      name
      website
      description
    }
    launches(limit: 10) {
      links {
        flickr_images
      }
      mission_name
    }
  }
`;

export default function RenderRocketsLaunch() {
  const { data, loading, error } = useQuery<MissionDetailsData>(MISSION_LATEST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <MainDiv>
      <MissionDiv>
        {data?.missions.map((mission) => (
          <MissionForm
            mission={mission.name}
            website={mission.website}
            wiki={mission.wikipedia}
          />
        ))}
      </MissionDiv>
      <ImageContainer>
        {data?.launches.map((c, number) => (
          <ImageDiv>
            {c.links.flickr_images[0] ? (
              <Image
                key={number.toString()}
                src={c.links.flickr_images[0]}
              ></Image>
            ) : null}
          </ImageDiv>
        ))}
      </ImageContainer>
    </MainDiv>
  );
}

// export default RenderRocketsLaunch;
