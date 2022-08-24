import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

import NextLink from "next/link";
export default function Hero() {
  return (
    <Stack minH={"80vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            color="purple.100"
            lineHeight={"110%"}
          >
            Want to grab a{" "}
            <Text as={"span"} color={"orange.600"}>
              shoe
            </Text>{" "}
            and{" "}
            <Text as={"span"} color={"orange.600"}>
              Go
            </Text>
            ?
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"brand.100"} p={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia,molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4} p={3}>
            <NextLink href={"/menu"}>
              <Button
                rounded={"5px"}
                bg={"orange.400"}
                color={"orange.50"}
                _hover={{
                  bg: "orange.500",
                }}
              >
                Order Now
              </Button>
            </NextLink>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={0.6}>
        <Image
          alt={"product Image"}
          objectFit={"cover"}
          src={
            "https://goldenshoe.vercel.app/assets/tamas-pap-68Vb4Mj-L9c-unsplash-removebg-preview.png"
          }
        />
      </Flex>
    </Stack>
  );
}
