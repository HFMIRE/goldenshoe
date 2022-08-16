import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const AccordionComp = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Details
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text>
            Composition Shell: Polyester 100% Lining: Polyester 87%, Elastane
            13%
          </Text>
          <Text p={0.5}>
            More sustainable materials Shell: Recycled polyester 100%{" "}
          </Text>
          <Text p={0.5}>Lining: Recycled polyester 87% </Text>
          <Text p={0.5}>Care instructions</Text>
          <UnorderedList>
            <ListItem> Low iron </ListItem>
            <ListItem> No dry clean </ListItem>
            <ListItem> Wash with similar colours </ListItem>
            <ListItem> Only non-chlorine bleach when needed</ListItem>
            <ListItem> Machine wash at 40°</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Delivery and Payments
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text>
            {" "}
            Golden Shoes Free standard delivery and Click & Collect on orders
            over £20 for Members.
          </Text>
          <Text p={0.5}>
            {" "}
            You can also use our Click & Collect service (free for all members /
            non- members free over £20).{" "}
          </Text>
          <Text p={0.5}>
            {" "}
            We accept card payments via MasterCard and Visa.{" "}
          </Text>
          <Text p={0.5}>
            You can also pay by Klarna, PayPal, Apple Pay or use your G&S
            giftcard. Find out more on our customer service pages.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComp;
