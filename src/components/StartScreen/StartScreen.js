import "./startScreen.css";
function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="headings">
      <h1>Welcome to AniQuiz!</h1>
      <h3>{numQuestions} Questions to test your anime knowledge</h3>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "start" })}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
