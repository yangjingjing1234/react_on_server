import React from "react";
// import ReactDOMServer from "react-dom/server";
export default class List extends React.Component
{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <ul>
        {
          this.props.items.map((value,index)=>{
            return (<li key={index}>{value}</li>)
          })
        }
      </ul>
    )
  }
}
