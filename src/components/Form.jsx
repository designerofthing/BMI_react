import React from 'react';


const Form = props => {
      return (
        <form onSubmit={props.onSubmitHandler}>
          <input 
            type="radio"
            id="metric"
            name="system"
            value="metric"
            >
          <label htmlFor="metric">Metric</label>
          <input 
            type="radio"
            id="imperial"
            name="system"
            value="imperial"
            >
          <label htmlFor="imperial">Imperial</label>
          <label htmlFor="weight">Weight</label>
          <input
            type="number"
            required
            placeholder="Weight in kgs"
            value={props.weight}
            name="weight"
            id="weight"
            onChange={props.onChangeHandler}
            />
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
            <button id="calculate">Calculate BMI</button>
        </form>
      );
    };

    export default Form;
  