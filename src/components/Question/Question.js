import "./question.css";
import Answers from "../Answers/Answers";
import NextButton from "../NextButton/NextButton";
function Question({ question, dispatch, answer, index, numQuestions }) {
  return (
    <div className="question-container">
      <div className="width-container">
        <h4>{question.question}</h4>
        <Answers question={question} dispatch={dispatch} answer={answer} />
        <div className="nxt-btn">
          <NextButton
            dispatch={dispatch}
            answer={answer}
            index={index}
            numQuestions={numQuestions}
          />
        </div>
      </div>
    </div>
  );
}

export default Question;
