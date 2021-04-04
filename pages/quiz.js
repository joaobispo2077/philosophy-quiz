/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import db from '../db.json';

import Widget from '../src/components/Widget';
// import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuestionWidget from '../src/components/QuestionWidget';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;
const Spinner = styled.span`
  

  display: inline-block;
  border: 4px solid  ${({ theme }) => theme.colors.contrastText};
  border-left-color: ${({ theme }) => theme.colors.primary};;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: donut-spin 1.2s linear infinite;
@keyframes donut-spin {
    to {
        transform: rotate(1turn);
    }
}
  

`;

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  console.log(db.questions);

  React.useEffect(() => {
    setTimeout(() => {
      console.log(screenStates.QUIZ);
      setScreenState(screenStates.QUIZ);
    }, 1 * 4000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        {/* <QuizLogo /> */}
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <div>Você acertou X questões, parabéns!</div>}
      </QuizContainer>
    </QuizBackground>
  );
}
