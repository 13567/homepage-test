import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function Roadmap() {
  return (
    <Wrapper>
      <Container>
        <Stack>
          <OverTitle>RoadMap</OverTitle>
          <SectionTitle>演进方向，产品上线规划</SectionTitle>
          <ImageContainer>
            <NextImage src="/homepage/roadmap.png" alt="roadmap" width={1280} height={581} layout="responsive" objectFit="contain" />
          </ImageContainer>
        </Stack>
      </Container>
    </Wrapper>
  );
}

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const Wrapper = styled.div`
  background: rgb(var(--secondary));
`;

const ImageContainer = styled.div`
  flex: 1;

  position: relative;
  width: 100%;

  ${media('<=desktop')} {
    width: 100%;
  }
`;
