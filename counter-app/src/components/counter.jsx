import React, { Component } from "react";

class Counter extends Component {
  render() {
    const {
      key,
      counter,
      onIncrement,
      onDecrement,
      onDelete,
    } = this.props;

    return (
      <div className="row">
        <div className="col-8">
          <button
            className={this.getBadgeClasses()} disabled
          >
            {counter.value}
          </button>
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary m-1"
          >
            +
          </button>
          <button
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary m-1"
            disabled={counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger m-1"
          >
            Delete
          </button>
          <button className="btn btn-info m-1" disabled>
            ID: {counter.id}
          </button>
        </div>
      </div>
    );
  };

  getBadgeClasses() {
    const flag = this.props.counter.value === 0 ? "warning" : "primary";
    return `btn btn-${flag} m-1`;
  }
}

export default Counter;
