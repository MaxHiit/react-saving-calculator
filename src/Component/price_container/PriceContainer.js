import React from "react";
import { ReactComponent as SaveMoney } from "../../img/save-money.svg";

/* Style */
import "./price-container.scss";

function PriceContainer(props) {
  return (
    <div className="main-content__left">
      <div className="img">
        <SaveMoney />
      </div>
      <p>End Balance:</p>
      <h2>{props.resultNb} €</h2>
    </div>
  );
}

export default PriceContainer;
