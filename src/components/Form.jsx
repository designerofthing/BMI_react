import React from 'react';


const Form = props => {
  return (
    <form onSubmit={props.onSubmitHandler}>
      <input 
        defaultChecked="metric"
        type="radio"
        id="metric"
        name="system"
        value="metric"
        onChange={props.onChangeHandler}
        />
      <label htmlFor="metric">Metric</label>
      <input 
        type="radio"
        id="imperial"
        name="system"
        value="imperial"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="imperial">Imperial</label><br />
      <label htmlFor="weight">Weight</label>
      <input
        type="number"
        required
        placeholder={`Weight in ${"metric" == props.system ? "kgs":"pounds"}`}
        value={props.weight}
        name="weight"
        id="weight"
        onChange={props.onChangeHandler}
      />

      {systemSelector(props)}

      <button id="calculate">Calculate BMI</button>
    </form>
  );
};
  
const systemSelector = props => {
  if (props.system === "metric") {
    return (
      <>
        <label htmlFor="height">Height</label>
        <input
          type="number"
          required
          placeholder="Height in cm"
          value={props.height}
          name="height"
          id="height"
          onChange={props.onChangeHandler}
        /> 
      </>
    )
  } else {
    return(
      <>
        <label htmlFor="feet">Height</label>
        <input
          type="number"
          required
          placeholder="Height in feet"
          value={props.feet}
          name="feet"
          id="feet"
          onChange={props.onChangeHandler}
        />
        <input
          type="number"
          required
          placeholder="inches"
          value={props.inches}
          name="inches"
          id="inches"
          onChange={props.onChangeHandler}
        />
      </>
    )
  }
}

export default Form;