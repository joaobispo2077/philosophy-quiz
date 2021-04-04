/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import PropTypes from 'prop-types';
import Widget from '../Widget';
import Button from '../Button';

export default function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
}) {
  console.log({
    question,
    questionIndex,
    totalQuestions,
    onSubmit,
  });
  const [answer, setAnswer] = React.useState(0);
  const [answered, setAnswered] = React.useState(false);

  // React.useEffect(() => {

  // }, [answered]);

  return (
    <>
      <Widget>
        <Widget.Header>
          {/* <BackLinkArrow href="/" /> */}
          <h3>
            {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
          </h3>
        </Widget.Header>

        <img
          alt="Descrição"
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
          }}
          src={question.image}
        />
        <Widget.Content>
          <h2>
            {question.title}
          </h2>
          <p>
            {question.description}
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setTimeout(() => {
                setAnswered(false);
                onSubmit();
              }, 2000);
            }}
          >
            {question.alternatives.map((alternative, alternativeIndex) => {
              const alternativeId = `alternative__${alternativeIndex}`;
              return (
                <Widget.Topic
                  as="label"
                  htmlFor={alternativeId}
                  key={`${alternativeId}`}
                >
                  <input
                    key={alternativeId}
                    // style={{ display: 'none' }}
                    id={alternativeId}
                    onChange={() => setAnswer(alternativeIndex)}
                    name={`question__${questionIndex}`}
                    type="radio"
                  />
                  {alternative}
                </Widget.Topic>
              );
            })}

            <Button type="submit" onClick={() => setAnswered(true)}>
              Confirmar
            </Button>

            {(answered && answer === question.answer) && (<div>Você acertou!</div>)}
            {(answered && answer !== question.answer) && (<div>Você errou, estuda mais!</div>)}

          </form>
        </Widget.Content>
      </Widget>
    </>
  );
}

QuestionWidget.propTypes = {
  questionIndex: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
