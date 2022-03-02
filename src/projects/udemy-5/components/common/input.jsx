import React, { Component } from "react";

class Input extends Component {
  render() {
    const {
      state,
      placeholder,
      type,
      size,
      styling,
      onFormSubmit,
      onInputChange,
      value,
    } = this.props;
    return (
      <form onSubmit={onFormSubmit}>
        <div className={`ui icon input ${styling} ${size} ${state}`}>
          <input
            type={type}
            placeholder={placeholder}
            onChange={onInputChange}
            value={value}
          />
          <i className="search icon"></i>
        </div>
      </form>
    );
  }
}

export default Input;
