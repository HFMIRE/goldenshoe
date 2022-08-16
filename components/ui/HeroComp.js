import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroComp = () => {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "0", lg: "12" }}
      py={{ base: "0", lg: "12" }}
    >
      <Stack
        direction={{ base: "column-reverse", lg: "row" }}
        spacing={{ base: "0", lg: "20" }}
      >
        <Box
          width={{ lg: "sm" }}
          transform={{ base: "translateY(-50%)", lg: "none" }}
          bg={{
            base: useColorModeValue("purple.50", "gray.700"),
            lg: "transparent",
          }}
          mx={{ base: "6", md: "8", lg: "0" }}
          px={{ base: "6", md: "8", lg: "0" }}
          py={{ base: "6", md: "8", lg: "12" }}
        >
          <Stack spacing={{ base: "8", lg: "10" }}>
            <Stack spacing={{ base: "2", lg: "4" }}>
              <Heading
                size="xl"
                color={useColorModeValue("purple.500", "purple.300")}
              >
                Nike
              </Heading>
              <Heading size="xl" fontWeight="normal">
                Refresh your Game
              </Heading>
            </Stack>
            <HStack spacing="3">
              <Link
                href="/products"
                color={useColorModeValue("purple.500", "purple.300")}
                fontWeight="bold"
                fontSize="lg"
              >
                Discover now
              </Link>
              <Icon
                color={useColorModeValue("purple.500", "purple.300")}
                as={FaArrowRight}
              />
            </HStack>
          </Stack>
        </Box>
        <Flex flex="1" overflow="hidden">
          <Image
            src="https://goldenshoe.vercel.app/assets/fei-chao-JG3gTNM4q8A-unsplash.jpg"
            alt="tennis"
            fallback={<Skeleton />}
            maxH="450px"
            minW="400px"
            objectFit="cover"
            flex="1"
          />
          <Image
            display={{ base: "none", sm: "initial" }}
            src="https://goldenshoe.vercel.app/assets/fei-chao-r8EUf9oOtlQ-unsplash.jpg"
            alt="tennis"
            fallback={<Skeleton />}
            maxH="450px"
            minW="300px"
            objectFit="cover"
          />
        </Flex>
      </Stack>
    </Box>
  );
};

export default HeroComp;
