import React from 'react';
import "../css/base.css"


function RenderRow({start, end, reverse = false}) {
  let divArray = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      divArray.push(<div className="itemRed">{i}</div>);
    } else {
      divArray.push(<div className="itemWhite">{i}</div>);
    }
  }
  return (
    <div className={reverse ? "flexRowReverse" : "flexRow"}>
      {divArray}
    </div>
  )
}

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="container">
        <RenderRow reverse={false} start={1} end={10}/>
        <RenderRow reverse={true} start={11} end={20}/>
        <RenderRow reverse={false} start={21} end={30}/>
        <RenderRow reverse={true} start={31} end={40}/>
        <RenderRow reverse={false} start={41} end={50}/>
        <RenderRow reverse={true} start={51} end={60}/>
        <RenderRow reverse={false} start={61} end={70}/>
        <RenderRow reverse={true} start={71} end={80}/>
        <RenderRow reverse={false} start={81} end={90}/>
        <RenderRow reverse={true} start={91} end={100}/>
      </div>
    )
  }
}