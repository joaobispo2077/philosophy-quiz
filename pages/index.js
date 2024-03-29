/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

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
  const [name, setName] = useState('');
  const router = useRouter();
  return (
    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>
        <Widget
          as={motion.section}
          transitions={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>Filosofia Antiga</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(e) => {
              e.preventDefault();

              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input name="username" value={name} type="text" onChange={(e) => setName(e.target.value)} placeholder="Digite o seu nome aqui" />
              <Button type="submit" disabled={name.length === 0}>
                Jogue agora!
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        {/* <Widget>
          <Widget.Header>
            <h1>Filosofia Antiga</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </Widget.Content>
        </Widget> */}
        <Footer
          as={motion.footer}
          transitions={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      {/* <GitHubCorner /> */}
    </QuizBackground>
  );
}
