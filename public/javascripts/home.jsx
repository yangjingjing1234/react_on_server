
import React from "react";
// import ReactDOM from "react-dom";

import List from "./List";
export default class Home extends React.Component
{
  constructor(props){
    super(props);
  }
  handleClick(event){
    event.preventDefault();
		alert("click me")
    console.log("====Clicked==");
  }
  render(){
    let ps = {
  		items: ['Marylin', 'Mike','Jack']
  	};
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.handleClick.bind(this)}>Click me</button>
        <List items={ps.items} />
      </div>

    );
  }
}


// ReactDOM.render(<Home />, document.getElementById('containerId'));

// module.exports = Home;
