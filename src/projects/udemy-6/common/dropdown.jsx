import React, { Component, useEffect } from "react";
import { Select } from "@chakra-ui/react";

const Dropdown = ({
  options,
  selected,
  onSelectedChange,
  placeholder,
  disabled,
}) => {
  return (
    <>
      <Select
        mt={5}
        placeholder={placeholder}
        selected={selected.value}
        variant="filled"
        value={selected?.value} // returns undefined when first started but don't do anything when it's in conditional chain
        onChange={(e) => onSelectedChange(e.target.selectedOptions[0])}
        isDisabled={disabled}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.title}
          </option>
        ))}
      </Select>
    </>
  );
};

export default Dropdown;
