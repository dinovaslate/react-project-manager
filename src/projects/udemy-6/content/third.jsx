import React, { useState, useEffect } from "react";
import Input from "../common/input";
import Segment from "../common/segment";
import Dropdown from "./../common/dropdown";
import axios from "axios";
const queryString = require("query-string");
import { Heading } from "@chakra-ui/react";
const Third = (props) => {
  const [term, setTerm] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedTo, setSelectedTo] = useState(); // Out of frustation i hardcoded the default state
  const [selectedFrom, setSelectedFrom] = useState();
  const [debouncedState, setDebouncedState] = useState("");
  // for the text
  const [detected, setDetected] = useState(false);
  const [text, setText] = useState("");
  const [state, setState] = useState("waiting");

  //Flipped but
  const flip = () => {
    setSelectedFrom(selectedTo);
    setSelectedTo(selectedFrom);
    console.log(selectedToRef.current);
  };
  useEffect(() => {
    selectedFrom !== undefined &&
      localStorage.setItem("selectedFrom", JSON.stringify(selectedFrom));
  }, [selectedFrom]);
  useEffect(() => {
    selectedTo !== undefined &&
      localStorage.setItem("selectedTo", JSON.stringify(selectedTo));
  }, [selectedTo]);

  useEffect(() => {
    const getLanguages = async () => {
      const response = await axios.request({
        method: "GET",
        url: "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
        headers: {
          "x-rapidapi-host": "google-translate1.p.rapidapi.com",
          "x-rapidapi-key":
            "bd898d726fmsh7069caa0195710ep184571jsnd95e353568b3",
        },
        params: { target: "en" },
      });

      const opts = response.data.data.languages.map((language) => ({
        title: language.name,
        value: language.language,
      }));

      const defaultFrom = opts.find((l) => l.value === "en");
      const defaultTo = opts.find((l) => l.value === "es");

      setOptions(opts);

      setSelectedTo(defaultTo);
      setSelectedFrom(defaultFrom);

      const optJSON = JSON.stringify(opts);
      localStorage.setItem("languages", optJSON);
    };
    if (localStorage.getItem("languages") === null) {
      getLanguages();
    } else {
      setOptions(JSON.parse(localStorage.getItem("languages")));
      setSelectedTo(JSON.parse(localStorage.getItem("selectedTo")));
      setSelectedFrom(JSON.parse(localStorage.getItem("selectedFrom")));
    }
  }, []);

  useEffect(() => {
    const search = async () => {
      setState("loading");
      const response = await axios.request({
        method: "POST",
        url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
        data: queryString.stringify({
          q: debouncedState,
          target: selectedTo.value,
          source: selectedFrom.value,
        }),
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "x-rapidapi-host": "google-translate1.p.rapidapi.com",
          "x-rapidapi-key":
            "bd898d726fmsh7069caa0195710ep184571jsnd95e353568b3",
        },
      });
      setText(response.data.data.translations[0].translatedText);
      setState("show");
    };
    const detect = async () => {
      setState("loading");
      const response = await axios.request({
        method: "POST",
        url: "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
        data: queryString.stringify({ q: debouncedState }),
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "x-rapidapi-host": "google-translate1.p.rapidapi.com",
          "x-rapidapi-key":
            "bd898d726fmsh7069caa0195710ep184571jsnd95e353568b3",
        },
      });
      setSelectedFrom(
        options.find(
          (option) =>
            option.value === response.data.data.detections[0][0].language
        )
      );
      return search();
    };

    if (debouncedState) {
      if (detected) {
        detect();
      } else {
        search();
      }
    }
  }, [selectedTo, debouncedState, selectedFrom]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedState(term);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [term]);

  if (!selectedFrom || !selectedTo) {
    return <div>Loading language definitions...</div>;
  }

  return (
    <>
      <Segment type="stacked" state="show">
        <Input
          label="Input text"
          placeholder="text to translate"
          size="medium"
          styling="fluid"
          value={term}
          onInputChange={(e) => setTerm(e.target.value)}
          margin="20px"
        />
        <div className="ui grid">
          <div className="eight wide column">
            <Dropdown
              placeholder="Translate to"
              options={options}
              selected={selectedFrom}
              onSelectedChange={setSelectedFrom}
            />
          </div>
          <div className="eight wide column">
            <Dropdown
              placeholder="Translate to"
              options={options}
              selected={selectedTo}
              onSelectedChange={setSelectedTo}
            />
          </div>
          <div className="sixteen wide column">
            <div className="ui toggle checkbox">
              <input
                type="checkbox"
                name="public"
                onChange={(e) => setDetected(e.target.checked)}
              />
              <label>Apply Auto Detection</label>
            </div>
          </div>
          <div className="sixteen wide column">
            <div className="ui button positive fluid" onClick={flip}>
              Flip
            </div>
          </div>
        </div>
      </Segment>
      <Segment state={state} type="raised" minHeight="100px">
        <Heading>{text}</Heading>
      </Segment>
    </>
  );
};

export default Third;
