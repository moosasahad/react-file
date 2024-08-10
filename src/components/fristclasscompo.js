import React  from 'react';

class Frisstcompo extends React.Component {
    state={
        name:"moosa",
        age:21,
        place:"malappuram"
    }
  render(props) {

   return <div>
        <h1>hello...</h1>
        {this.props.children}
    </div>
  }
}
export class Secondtcompo extends React.Component {
    state={
        name:"Moosa",
        age:21,
        place:"malappuram"
    }
    changetext = ()=>{
        this.setState({
            name:"sahad"
        })
    }
    changeback = ()=>{
        this.setState({
            name:"moosa"
        })
    }
  render() {

    return <div>
        <h1>my name is "{this.state.name}" </h1>
        <button onClick={this.changetext}>cahnge text</button>
        <br/>
        <button onClick={this.changeback}>cahnge back</button>
    </div>
  }
}

export default Frisstcompo;
