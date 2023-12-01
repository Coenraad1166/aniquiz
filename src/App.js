import { useEffect, useReducer, useState } from "react";

import Logo from "./components/Logo/Logo";
import StartScreen from "./components/StartScreen/StartScreen";
import Main from "./components/Main/Main";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import Progress from "./components/Progress/Progress";
import Question from "./components/Question/Question";
import Footer from "./components/Footer/Footer";
import Timer from "./components/Timer/Timer";
import NextButton from "./components/NextButton/NextButton";
import FinishScreen from "./components/FinishScreen/FinishScreen";

const api = process.env.REACT_APP_API;

const initialState = {
  questions: [],
  //Loading, Error, Ready, active etc
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  secondsRemaining: null,
};
const timePerQuestion = 15;

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * timePerQuestion,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctAnswer
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion": {
      return { ...state, index: state.index + 1, answer: null };
    }
    case "finish": {
      return { ...state, status: "finished" };
    }
    case "restart": {
      return { ...initialState, questions: state.questions, status: "ready" };
    }
    case "tick": {
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    }
  }
}

function App() {
  const storedHighscore = localStorage.getItem("highScore");
  let highscore = storedHighscore !== null ? storedHighscore : 0;

  const [
    { questions, status, index, answer, points, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  useEffect(function () {
    fetch(api)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Main>
        <Logo />
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <div className="content-padding">
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              answer={answer}
              highscore={highscore}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                numQuestions={numQuestions}
                index={index}
              />
            </Footer>
          </div>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
