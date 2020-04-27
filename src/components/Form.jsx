import React from 'react';


const Form = props => {
      return (
        <form onSubmit={props.onSubmitHandler}>
          <label id="weight_text" htmlFor="weight">Weight</label>
          <input
            type="number"
            required
            placeholder="Weight in kgs"
            value={props.weight}
            name="weight"
            id="weight"
            onChange={props.onChangeHandler}
            />
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
            <button id="calculate">Calculate BMI</button>
        </form>
      );
    };

    export default Form;
  