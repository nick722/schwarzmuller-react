import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 15"
          clicked={this.props.onSubstractCounter}
        />
        <hr />
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {this.props.storedResults.map(storedResult => (
            <li key={storedResult.id} onClick={this.props.onDeleteResult}>
              {storedResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    storedResults: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddCounter: () => dispatch({ type: "ADD", value: 10 }),
    onSubstractCounter: () => dispatch({ type: "SUBSTRACT", value: 15 }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    onDeleteResult: () => dispatch({ type: "DELETE_RESULT" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
