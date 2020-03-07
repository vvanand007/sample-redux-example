import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { setName } from "./actions/userActions";
import { Main } from "./components/Main";
import { User } from "./components/User";
import { addNumber, subtractNumber } from "./actions/mathActions";

function App(props) {
  return (
    <div className="container">
      <Main
        changeUsername={() => props.setName("Anna")}
        increment={() => props.increment()}
        decrement={() => props.decrement()}
        result={props.math.result}
      />
      <User username={props.user.name} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    math: state.math
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch(setName(name));
    },
    increment: () => {
      dispatch(addNumber());
    },
    decrement: () => {
      dispatch(subtractNumber());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
