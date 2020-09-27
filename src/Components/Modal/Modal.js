import React, { Component } from "react";
import classes from "./Modal.module.css";
import CSSTransition from "react-transition-group/CSSTransition";

const animationTiming = {
  enter: 700,
  exit: 700,
};

class Modal extends Component {
  render() {
    return (
      <CSSTransition
        in={this.props.show}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: "",
          enterActive: classes.ModalOpen,
          exit: "",
          exitActive: classes.ModalClose,
          appear: "",
          appearActive: "",
        }}
      >
        <div className={classes.Modal}>
          {this.props.children}
        </div>
      </CSSTransition>
    );
  }
}

export default Modal;
