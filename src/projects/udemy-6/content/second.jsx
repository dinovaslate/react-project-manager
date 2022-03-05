import React, { Component } from "react";
import Dropdown from "./../common/dropdown";
import { useState } from "react";
import { Heading } from "@chakra-ui/react";
const Second = (props) => {
  const options = [
    {
      title: "The Color Red",
      value: "red",
    },
    {
      title: "The Color Green",
      value: "green",
    },
    {
      title: "The Color Yellow",
      value: "yellow",
    },
  ];
  const [selected, setSelected] = useState(options[0]);
  return (
    <>
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
      <Heading as="h3" mt={5} size="lg" color={selected.value}>
        This text is {selected.value}
      </Heading>
    </>
  );
};

export default Second;
