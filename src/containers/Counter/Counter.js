import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actions";

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
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map(storedResult => (
            <li
              key={storedResult.id}
              onClick={() => this.props.onDeleteResult(storedResult.id)}
            >
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
    counter: state.counter.counter,
    storedResults: state.result.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(10)),
    onSubstractCounter: () => dispatch(actionCreators.substract(15)),
    onStoreResult: result => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: id => dispatch(actionCreators.deleteResult(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
