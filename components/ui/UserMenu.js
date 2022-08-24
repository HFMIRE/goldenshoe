import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  IconButton,
  Center,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import NextLink from "next/link";
const UserMenu = ({ name }) => {
  let username;
  if (name.includes("@")) {
    username = name.split("@")[0];
  } else {
    username = name;
  }
  return (
    <Box>
      <Flex alignItems={"center"}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<FaUser size={28} />}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minw={0}
          />

          <MenuList alignItems={"center"}>
            <MenuDivider />
            <Center>
              <p fontSize="xs" p={3}>
                {username}
              </p>
            </Center>
            <br />

            <MenuItem>Order</MenuItem>
            <MenuItem>Setting</MenuItem>
            <NextLink href="/api/auth/logout">
              <MenuItem>Logout</MenuItem>
            </NextLink>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default UserMenu;
