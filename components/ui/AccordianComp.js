import {
  Accordion,
  AccordionProduct,
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
        <AccordionProduct>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Dietary
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{dietary}</AccordionPanel>
        </AccordionProduct>

        {!(allergies === "No") ? null : (
          <AccordionProduct>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Allergy
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{allergies}</AccordionPanel>
          </AccordionProduct>
        )}
      </Accordion>
    </Box>
  );
};

export default AccordianComp;
