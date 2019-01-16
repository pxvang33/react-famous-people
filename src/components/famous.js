import React, {Component} from 'react';

class Famous extends Component{
      constructor() {
    super();
    this.state = {
                  famousPerson: 'Jet Li', 
                  role: 'Master'
      } // end state
  } // end constructor
changePerson = (event) =>{
  console.log(event.target.value);
  this.setState({
    famousPerson: event.target.value,
    // role: event2.target.value
  });
} // end changePerson

changeRole = (event) => {
  console.log(event.target.value);
  this.setState({
    role: event.target.value,
  });
}
    logStuff = (event) => {
        console.log(`${this.state.famousPerson} and ${this.state.role}`);


} //end changeRole
    render() {
        return(
            <div>
                <input onChange={this.changePerson} type="text" placeholder="Famous Person"></input>
                <br />
                <input onChange={this.changeRole} type="text" placeholder="Role"></input>
                <br />
                <button onClick={this.logStuff} type="submit">Submit</button>
                <p>{this.state.famousPerson} is a famous {this.state.role}.</p>
            </div>
        )
    }


}

export default Famous;