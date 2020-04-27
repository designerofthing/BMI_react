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
      <label id="radio" htmlFor="metric">Metric</label>
      <input 
        type="radio"
        id="imperial"
        name="system"
        value="imperial"
        onChange={props.onChangeHandler}
      />
      <label id="radio" htmlFor="imperial">Imperial</label><br />
      <label id="weight_text" htmlFor="weight">Weight</label>
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
        <label id="height_text" htmlFor="height">Height</label>
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
        
        <label id="height_text" htmlFor="feet">Height</label>
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