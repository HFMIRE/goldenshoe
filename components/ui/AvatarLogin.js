import NextLink from "next/NextLink";
import {
  Button,
  Box,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { useUser } from "@auth0/nextjs-auth0";

const Log = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <Box>
      {user && user ? (
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
              <MenuItem>Account</MenuItem>
              <MenuDivider />
              <MenuItem>Order</MenuItem>
              <NextLink href={"/api/auth/logout"}>
                <MenuItem>Logout</MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        </Box>
      ) : (
        <NextLink href={"/api/auth/login"}>
          <Button
            size={{ base: "xs", md: "sm", lg: "md" }}
            colorScheme="orange"
          >
            Login
          </Button>
        </NextLink>
      )}
    </Box>
  );
};

export default Log;
