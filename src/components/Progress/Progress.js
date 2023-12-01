import "./progress.css";
function Progress({ numQuestions, index, points, answer, highscore }) {
  return (
    <div className=".header-container">
      <div className="score-highscore">
        <p>
          Score: <strong>{points}</strong>
        </p>
        <p>
          Highscore: <strong>{highscore}</strong>
        </p>
      </div>
      <div className="progress">
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>
      </div>
    </div>
  );
}

export default Progress;
