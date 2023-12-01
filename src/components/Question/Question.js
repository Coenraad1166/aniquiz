import "./question.css";
import Answers from "../Answers/Answers";
function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Answers question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
