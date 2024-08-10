import React from "react";

export function Firstfunctionalcompo (props) {
    return (<div>
        <h1>hello.. function {props.age}</h1>
        {props.children}
    </div>)
}


export class Toinone extends React.Component {
    render(){
        return <h1>hellow to join {this.props.name} {this.props.children} </h1>
    }
}