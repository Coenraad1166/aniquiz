import "./startScreen.css";
function StartScreen({ numQuestions, dispatch }) {
  return (
    <>
      <div className="heading-container">
        <div className="headings">
          <h3>{numQuestions} Questions to test your anime knowledge</h3>
        </div>
      </div>
    </>
  );
}

export default StartScreen;
