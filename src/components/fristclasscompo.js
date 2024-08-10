import React  from 'react';

class Frisstcompo extends React.Component {
    state={
        name:"moosa",
        age:21,
        place:"malappuram"
    }
  render() {

    return <h1>hello...</h1>;
  }
}
export class Secondtcompo extends React.Component {
    state={
        name:"moosa",
        age:21,
        place:"malappuram"
    }
  render() {

    return <h1>my name {this.state.name} </h1>;
  }
}

export default Frisstcompo;
