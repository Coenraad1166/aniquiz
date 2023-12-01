function Answers({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="answer-container">
      {question.answers.map((option, index) => (
        <button
          className={`btn btn-answers ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctAnswer
                ? "correct"
                : "wrong"
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
