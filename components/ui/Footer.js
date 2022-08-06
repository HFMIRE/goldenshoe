import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
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
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Shoie Membership</ListHeader>
            <Link href={"#"}>Find a store</Link>
            <Link href={"#"}>Student Discount</Link>
            <Link href={"#"}>Promo Code</Link>
            <Link href={"#"}>GS Journal </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Golden Shoe</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Sustainability</Link>
            <Link href={"#"}>News</Link>
            <Link href={"#"}>Career</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Get Help</ListHeader>
            <Link href={"#"}>Returns</Link>
            <Link href={"#"}>Order Status</Link>
            <Link href={"#"}>Shipping and Delivery</Link>
            <Link href={"#"}>Contact us</Link>
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
          <Text>© 2022 Golden Shoes. All rights reserved</Text>
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
