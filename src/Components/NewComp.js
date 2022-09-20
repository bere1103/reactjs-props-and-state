import React, { Component } from 'react';
import bell1 from "./bell1.png";
import bell2 from "./bell2.png";


 class NewComp extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      message: "Subscribe me",
      sub: "Subscribe",
      imageURL: bell1
   };
 }

 styles = {
    fontStyle: "italic",
    color: "purple"
  };

  Buttonchange = () => {
    this.setState({
      message: "Hit the bell item",
      sub: "Subscribe"
    });
  };
  imageChange=()=>{
    this.setState({
      imageURL: bell2,
      message: "Happy to learn you RJS"
  })
  }
  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.Buttonchange}>{this.state.sub}</button>
        <p/>
        <img style={{width: "30px", height: "30px"}} 
        src={this.state.imageURL} 
        onClick={this.imageChange}
        alt="" 
        /> 
      </div>
          
      );
    }
  }

  export default NewComp;