import React, { Component, useEffect } from "react";
import { useState } from "react";
import Segment from "../common/segment";
import Input from "../common/input";
import wikipedia from "../api/wikipedia";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const First = (props) => {
  const [term, setTerm] = useState("");
  const [state, setState] = useState("waiting");
  const [items, setItems] = useState([]);
  const [debouncedState, setDebouncedState] = useState("");

  useEffect(() => {
    const search = async () => {
      setState("loading");
      const response = await wikipedia.get("/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          srsearch: debouncedState,
          origin: "*",
        },
      });
      setState("show");
      setItems(response.data.query.search);
    };
    if (debouncedState) {
      search();
    }
  }, [debouncedState]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedState(term);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [term]);

  return (
    <>
      <Segment state="show" type="stacked">
        <Input
          state="show"
          styling="fluid"
          size="large"
          type="text"
          placeholder="Search topic..."
          onInputChange={(e) => {
            setTerm(e.target.value);
          }}
          value={term}
        />
      </Segment>
      <Segment state={state} minHeight="500px">
        <Accordion defaultIndex={[0]} allowToggle>
          {items.map((item) => (
            <AccordionItem key={item.pageid}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <a href={`https://en.wikipedia.org?curid=${item.pageid}`}>
                      {item.title}
                    </a>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                dangerouslySetInnerHTML={{ __html: item.snippet }}
              ></AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Segment>
    </>
  );
};

export default First;
