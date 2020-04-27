import React, { Component } from 'react';
import Form from "./components/Form";
import Message from "./components/Message";
import { calculateBmi } from "./helpers/bmiHelper";

class App extends Component {
  state = {
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: "",
    system: "metric",
    feet: "",
    inches: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = e => {
    e.preventDefault();
    let tall;
    let heavy;
    if ( this.state.system == "metric" ) {
      tall = this.state.height;
      heavy = this.state.weight;
    } else {
      tall = ( ( parseInt(this.state.feet) * 12) + parseInt(this.state.inches) ) * 2.54
      heavy = this.state.weight/2.20462262
    }
    const [bmiValue, bmiMessage] = calculateBmi(
      heavy,
      tall
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  };

  render() {
    return (
      <div id="middle">
        <Form
          weight={this.state.weight}
          height={this.state.height}
          system={this.state.system}
          feet={this.state.feet}
          inches={this.state.inches}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
        {this.state.bmiValue && (
          <Message
            bmiValue={this.state.bmiValue}
            bmiMessage={this.state.bmiMessage}
          />
        )}
      </div>
    );
  }
}

export default App;
