import React from 'react'
import "./App.css"
import NewComp from './Components/NewComp';

class App extends React.Component {
  styles = {
    fontStyle: "bold",
    color: "teal"
  };
  render() {
    return <div className = "App">
        <h3 style={this.styles}>Hello World</h3>
        <NewComp />
      </div> 
  }
}
export default App;

