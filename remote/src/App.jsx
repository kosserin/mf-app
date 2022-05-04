import React from "react";
import ReactDOM from "react-dom";
import Template from './Template';

const App = () => {
  return(
    <Template>
      <div>Name: remote</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
    </Template>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
