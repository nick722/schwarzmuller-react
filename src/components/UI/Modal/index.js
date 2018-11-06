import React, { Component } from "react";

import classes from "./Modal.css";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentWillUpdate() {
    console.log("[Modal] WillUpdate");
  }

  render() {
    const { children, show, closeModal } = this.props;

    return (
      <Aux>
        <Backdrop show={show} click={closeModal} />
        <div
          className={classes.Modal}
          style={{
            transform: show ? "translateY(0)" : "translateY(-100vh)",
            opacity: show ? "1" : "0"
          }}
        >
          {children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
