import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import ReactStoreBadges from "react-store-badges";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10} mb={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Golden Shoes Membership</ListHeader>
            <NextLink href={"#"}>Find a store</NextLink>
            <NextLink href={"#"}>Student Discount</NextLink>
            <NextLink href={"#"}>Promo Code</NextLink>
            <NextLink href={"#"}>GS Journal </NextLink>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Golden Shoes</ListHeader>
            <NextLink href={"#"}>About Us</NextLink>
            <NextLink href={"#"}>Sustainability</NextLink>
            <NextLink href={"#"}>News</NextLink>
            <NextLink href={"#"}>Career</NextLink>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Get Help</ListHeader>
            <NextLink href={"#"}>Returns</NextLink>
            <NextLink href={"#"}>Order Status</NextLink>
            <NextLink href={"#"}>Shipping and Delivery</NextLink>
            <NextLink href={"#"}>Contact us</NextLink>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Install App</ListHeader>
            <ReactStoreBadges
              platform={"ios"}
              url={"YOUR_APP_STORE_URL"}
              locale={"en-us"}
            />{" "}
            <ReactStoreBadges
              platform={"android"}
              url={"YOUR_APP_STORE_URL"}
              locale={"en-us"}
            />
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>?? 2022 Golden Shoes. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
