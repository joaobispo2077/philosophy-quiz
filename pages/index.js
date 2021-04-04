/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  background-size: cover;
  background-position: center;
  flex: 1;  
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>
        <Widget>
          <Widget.Content>
            <Widget.Header>
              <h1>Filosofia Antiga</h1>
            </Widget.Header>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <Widget.Header>
              <h1>Filosofia Antiga</h1>
            </Widget.Header>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </Widget.Content>
        </Widget>
        {/* <Footer /> */}
      </QuizContainer>
      {/* <GitHubCorner /> */}
    </QuizBackground>
  );
}
