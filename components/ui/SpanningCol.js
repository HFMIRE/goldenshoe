import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  VStack,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function SpanningCol() {
  return (
    // <SimpleGrid>
    <Box p={4}>
      <Box
        backgroundImage={"url(https://bit.ly/dan-abramov)"}
        w={"300px"}
        h={"300px"}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6} p={3}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
            >
              Men
            </Text>
            <Stack direction={"row"}>
              <Button
                bg={"purple.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "purple.500" }}
              >
                Show me more
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Box>

      <Feature
        icon={<Icon as={FcDonate} w={10} h={10} />}
        title={"Unlimited Donations"}
        text={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        }
      />
      <Feature
        icon={<Icon as={FcInTransit} w={10} h={10} />}
        title={"Instant Delivery"}
        text={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        }
      />
    </Box>
  );
}
