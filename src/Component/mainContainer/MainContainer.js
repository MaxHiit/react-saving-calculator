import React, { useState } from "react";
import Form from "../form/Form";
import PriceContainer from "../price_container/PriceContainer";

/* Style */
import "./main-container.scss";

function MainContainer() {
  const [resultNb, setResultNb] = useState("0");

  const handleFormSubmit = (event, startNb, monthlyNb, period, interest, options) => {
    event.preventDefault();
    let newResult;
    let annualInterest;
    let balance;
    if (options === "years") {
      const yearPeriod = period * 12;
      balance = startNb + monthlyNb * yearPeriod;
      annualInterest = balance * (interest / 100);
      newResult = balance + annualInterest;
    } else {
      balance = startNb + monthlyNb * period;
      annualInterest = balance * (interest / 100);
      newResult = balance + annualInterest;
    }
    setResultNb(newResult);
  };

  return (
    <main className="main-content">
      <PriceContainer resultNb={resultNb} />
      <Form handleFormSubmit={handleFormSubmit} />
    </main>
  );
}

export default MainContainer;
