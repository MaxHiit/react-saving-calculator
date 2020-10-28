import React, { useState } from "react";

/* Style */
import "./form.scss";

function Form(props) {
  const [state, setState] = useState({
    startNb: 0,
    monthlyNb: 0,
    period: 0,
    interest: 0
  });

  const [options, setOption] = useState({
    selectedOption: ""
  });

  const handleChangeOption = (event) => {
    const { name, value } = event.target;
    setOption((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleChangeState = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: Number(value)
    }));
  };

  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        props.handleFormSubmit(
          e,
          state.startNb,
          state.monthlyNb,
          state.period,
          state.interest,
          options.selectedOption
        );
      }}
    >
      <label>
        <span>Starting Behance*:</span> <br />
        <input
          type="text"
          name="startNb"
          placeholder="0"
          value={state.startNb}
          onChange={handleChangeState}
        />
      </label>
      <label>
        <span>Monthly contributions:</span> <br />
        <input
          type="text"
          name="monthlyNb"
          placeholder="0"
          value={state.monthlyNb}
          onChange={handleChangeState}
        />
      </label>
      <label>
        <span>Period:</span> <br />
        <input
          type="text"
          placeholder="0"
          name="period"
          value={state.period}
          onChange={handleChangeState}
        />
      </label>
      <div className="radio-input">
        <label>
          <span>Years</span>
          <input
            type="radio"
            placeholder="1"
            name="selectedOption"
            value="years"
            // checked={state.selectedOption === "years"}
            onChange={handleChangeOption}
          />
          <span className="checkmark"></span>
        </label>
        <label>
          <span>Months</span>
          <input
            type="radio"
            placeholder="1"
            name="selectedOption"
            value="months"
            // checked={state.selectedOption === "months"}
            checked
            onChange={handleChangeOption}
          />
          <span className="checkmark"></span>
        </label>
      </div>
      <label>
        <span>Annual Interest Rate (%)</span> <br />
        <input
          type="text"
          placeholder="0"
          name="interest"
          value={state.interest}
          onChange={handleChangeState}
        />
      </label>
      <button type="submit">Calculate</button>
    </form>
  );
}

export default Form;
