import React from "react";

export const Main = props => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h1>The Main Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <button
            className="btn btn-primary"
            onClick={() => props.changeUsername("Anna")}
          >
            Change the Username
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <button onClick={() => props.increment()}>+</button>
          <div>
            <span>Result :{props.result}</span>
          </div>
          <button onClick={() => props.decrement()}>-</button>
        </div>
      </div>
    </div>
  );
};
