import { useEffect, useState } from "react";
import "./finishScreen.css";

function FinishScreen({ points, highscore, dispatch }) {
  useEffect(() => {
    if (points > highscore) {
      highscore = points;
      localStorage.setItem("highScore", highscore);
    }
  }, [points, highscore]);

  return (
    <div className="finish-screen">
      <div className="finish-container">
        <img src="loaderlogo.png" />
        <div>
          {points < highscore && (
            <p className="result">
              Your score is <strong>{points}</strong>. Unfortunatly you did not
              beat the highscore of <strong>{highscore}</strong> Better luck
              next time!
            </p>
          )}
          {points > highscore && (
            <p className="result">
              Congratulations!!! You beat the highscore of
              <strong> {highscore}</strong> with <strong>{points}</strong>
              points.
            </p>
          )}
          <div>
            <button
              className="btn btn-primary"
              onClick={() => dispatch({ type: "restart" })}
            >
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinishScreen;
