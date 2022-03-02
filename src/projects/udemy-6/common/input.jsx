import React, { Component } from "react";

class Input extends Component {
  render() {
    const {
      state,
      placeholder,
      type,
      size,
      styling,
      onInputChange,
      value,
      label,
      margin,
    } = this.props;
    return (
      <>
        {label && (
          <>
            <label>
              <b>{label}</b>
            </label>
            <br></br>{" "}
          </>
        )}
        <div
          className={`ui icon input ${styling} ${size} ${state}`}
          style={{ marginTop: margin }}
        >
          <input
            type={type}
            placeholder={placeholder}
            onChange={onInputChange}
            value={value}
          />
          <i className="search icon"></i>
        </div>
      </>
    );
  }
}

export default Input;
