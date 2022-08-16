import Link from "next/Link";
import {
  Button,
  Box,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuProduct,
  MenuDivider,
} from "@chakra-ui/react";

const Log = () => {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <Box>
      <Box>
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <Avatar
              size={"lg"}
              src={
                "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              }
            />
          </MenuButton>
          <MenuList>
            <MenuProduct>Account</MenuProduct>
            <MenuDivider />
            <MenuProduct>Order</MenuProduct>
            <Link href={"/api/auth/logout"}>
              <MenuProduct>Logout</MenuProduct>
            </Link>
          </MenuList>
        </Menu>
      </Box>
      ) : (
      <Link href={"/api/auth/login"}>
        <Button size={{ base: "xs", md: "sm", lg: "md" }} colorScheme="orange">
          Login
        </Button>
      </Link>
    </Box>
  );
};

export default Log;
