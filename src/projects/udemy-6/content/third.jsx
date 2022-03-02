import React, { Component, useState, useEffect, useRef } from "react";
import Input from "../common/input";
import Segment from "../common/segment";
import Dropdown from "../common/dropdown";
import translate from "../api/translate";
import { Tooltip } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
const Third = (props) => {
  const [term, setTerm] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedTo, setSelectedTo] = useState(); // Out of frustation i hardcoded the default state
  const [selectedFrom, setSelectedFrom] = useState();
  const [debouncedState, setDebouncedState] = useState("");
  // for the text
  const [text, setText] = useState("");
  const [state, setState] = useState("waiting");

  //Flipped but
  const flip = () => {
    setSelectedFrom(selectedTo);
    setSelectedTo(selectedFrom);
    console.log(selectedToRef.current);
  };

  //Reference
  const selectedToRef = useRef();
  const selectedFromRef = useRef();

  useEffect(() => {
    selectedToRef.current = selectedTo;
  }, [selectedTo]);

  useEffect(() => {
    selectedFromRef.current = selectedFrom;
  }, [selectedFrom]); // when i console.log it here it doesn't return an object

  const objectWrapper = (value) => {
    return { title: value, value: value };
  };

  useEffect(() => {
    const getLanguages = async () => {
      const response = await translate.get("/language/translate/v2/languages", {
        params: {
          key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          target: "en",
        },
      });
      const opts = response.data.data.languages.map((language) => ({
        title: language.name,
        value: language.language,
      }));

      const defaultFrom = opts.find((l) => l.value === "en");
      const defaultTo = opts.find((l) => l.value === "es");

      setOptions(opts);
      if (localStorage.getItem("languagesFrom") === null) {
        setSelectedFrom(defaultFrom);
        setSelectedTo(defaultTo);
      } else {
        setSelectedTo(JSON.parse(localStorage.getItem("languagesTo")));
        setSelectedFrom(JSON.parse(localStorage.getItem("languagesFrom")));
      }
      var optJSON = JSON.stringify(opts);
      localStorage.setItem("languages", optJSON);
    };

    if (localStorage.getItem("languages") === null) {
      getLanguages();
    } else {
      setOptions(JSON.parse(localStorage.getItem("languages")));
      setSelectedTo(JSON.parse(localStorage.getItem("languagesTo")));
      setSelectedFrom(JSON.parse(localStorage.getItem("languagesFrom")));
    }
    //Memory Leak for some reason
    return () => {
      localStorage.setItem(
        "languagesTo",
        JSON.stringify(objectWrapper(selectedToRef.current.value))
      );
      localStorage.setItem(
        "languagesFrom",
        JSON.stringify(objectWrapper(selectedFromRef.current.value)) // I use object wrapper function that i create since the selectFromRef.current returns an HTML element not an object
      );
    };
  }, []);

  useEffect(() => {
    const search = async () => {
      setState("loading");
      try {
        const response = await translate.post(
          "/language/translate/v2",
          {},
          {
            params: {
              q: debouncedState,
              target: selectedToRef.current.value,
              key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
            },
          }
        );
        setText(response.data.data.translations[0].translatedText);
        setState("show");
      } catch (e) {
        //doing detection
      }
    };
    if (debouncedState) {
      search();
    }
  }, [selectedTo, debouncedState]);

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

  const CustomButton = React.forwardRef(({ children, ...rest }, ref) => (
    <button
      className="ui button green fluid"
      ref={ref}
      onClick={flip}
      {...rest}
      disabled
    >
      {children}
    </button>
  ));

  const CustomSelect = React.forwardRef(({ children, ...rest }, ref) => (
    <Dropdown
      placeholder={children}
      options={options}
      selected={selectedFrom}
      onSelectedChange={setSelectedFrom}
      disabled={true}
      ref={ref}
      {...rest}
    />
  ));

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
            <Tooltip hasArrow label="Premium Features only " shouldWrapChildren>
              <CustomSelect>Translate From</CustomSelect>
            </Tooltip>
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
            <Tooltip hasArrow label="Premium Features only " shouldWrapChildren>
              <CustomButton>Flip</CustomButton>
            </Tooltip>
          </div>
        </div>
      </Segment>
      <Segment state={state} type="raised" minHeight="100px">
        <Heading as="h2" size="xl">
          {text}
        </Heading>
      </Segment>
    </>
  );
};

export default Third;
