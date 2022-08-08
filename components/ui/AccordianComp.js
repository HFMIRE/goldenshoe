import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import React from "react";

const AccordianComp = ({ allergies, dietary }) => {
  return (
    <Box p={4}>
      <Accordion defaultIndex={[0]} allowMultiple color={"orange.100"}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Dietary
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{dietary}</AccordionPanel>

        {!(allergies === "No") ? null : (
          <>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Allergy
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{allergies}</AccordionPanel>
            </>
        )}
      </Accordion>
    </Box>
  );
};

export default AccordianComp;
