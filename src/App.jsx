import React, { Component } from 'react';
import Form from "./components/Form";
import Message from "./components/Message";
import { calculateBmi } from "./helpers/bmiHelper";
import ReactPlayer from 'react-player';

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
        <ReactPlayer 
          url='https://archive.org/download/StarWarsTheImperialMarchDarthVadersTheme/Star%20Wars-%20The%20Imperial%20March%20%28Darth%20Vader%27s%20Theme%29.mp3' 
          playing={ this.state.system == 'imperial' }
          width='0px'
          height='0px' 
        />
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
