import React from "react";
import Header from "./Component/header/Header";
import MainContainer from "./Component/mainContainer/MainContainer";

/* Style */
import "./style/app.scss";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Header />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
