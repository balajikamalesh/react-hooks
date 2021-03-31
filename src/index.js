import React from "react";
import ReactDOM from "react-dom";
import State from "./hooks/useState";
import Effect from "./hooks/useEffect";
import Context from "./hooks/useContext";
import Reducer from './hooks/useReducer';
import './index.css'

function App() {
  return (
    <div className="App">
      <State />
      <hr />
      <Effect />
      <hr />
      <Context />
      <hr />
      <Reducer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
