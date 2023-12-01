import Timer from "../Timer/Timer";
import "./progress.css";
function Progress({
  numQuestions,
  index,
  points,
  answer,
  highscore,
  dispatch,
  secondsRemaining,
}) {
  return (
    <div>
      <div className="progress-container">
        <div className="score-highscore">
          <h3>Highscore:</h3>
          <h3>Score:</h3>
          <h3>Timer:</h3>
          <p>{highscore}</p>
          <p>{points}</p>
          <p>
            <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
          </p>
        </div>
        <div className="progress">
          <p>
            Question <strong>{index + 1}</strong> / {numQuestions}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Progress;
