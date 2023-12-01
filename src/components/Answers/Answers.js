function Answers({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div>
      {question.answers.map((option, index) => (
        <button
          className={`btn btn-answers ${
            hasAnswered
              ? index === question.correctAnswer
                ? "correct"
                : index === answer
                ? "wrong"
                : ""
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Answers;
