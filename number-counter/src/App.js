import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  increment = () => {
    this.props.dispatch({type:"INCREMENT"})
  }

  decrement = () => {
    this.props.dispatch({type:"DECREMENT"})
  }

  render() {
    return (
      <div className="App">
        <p><b>Number Counter</b><br/><span>A simple redux example</span></p>
        <div className="container">
          <button onClick={this.decrement}>-</button>
          <p>{this.props.count}</p>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps =(state)=> ({
  count: state.count
}) 
export default connect(mapStateToProps)(App);
