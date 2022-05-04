import React from "react";
import ReactDOM from "react-dom";
import Circle from "./components/Content/Circle/Circle";
import Triangle from "./components/Content/Triangle/Triangle";
import Header from "./components/Header/Header";
import Context from "./store/content-context";
import Template from 'remote/Template';

const App = () => {

  return(
      <Context>
        <Template>
          <Header />
          <Triangle />
          <Circle />
        </Template>
    </Context>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
