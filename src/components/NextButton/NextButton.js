function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <div className="nxt-container">
        <div className="test">
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "nextQuestion" })}
          >
            Next
          </button>
        </div>
      </div>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
