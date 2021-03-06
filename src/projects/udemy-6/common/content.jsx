import React, { Component, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Segment from "./segment";
import First from "../content/first";
import Second from "../content/second";
import Third from "./../content/third";
import Weather from "./../content/fourth";
import { useMediaQuery } from "react-responsive";

const Content = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      <Tabs mt="5">
        <TabList>
          <Tab>Accordion</Tab>
          <Tab>Dropdown</Tab>
          <Tab>Translate (free)</Tab>
          {!isTabletOrMobile && <Tab>Weather</Tab>}
        </TabList>

        <TabPanels>
          <TabPanel>
            <First />
          </TabPanel>
          <TabPanel>
            <Second />
          </TabPanel>
          <TabPanel>
            <Third />
          </TabPanel>
          {!isTabletOrMobile && (
            <TabPanel>
              <Weather />
            </TabPanel>
          )}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Content;
