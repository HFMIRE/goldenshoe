import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import UserMenu from "./UserMenu";
import { useUser } from "@auth0/nextjs-auth0";

export const LoginComponent = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      {user ? (
        <UserMenu name={user.name} />
      ) : (
        <NextLink href={"/api/auth/login"}>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"purple.400"}
            _hover={{
              bg: "purple.300",
            }}
          >
            Login
          </Button>
        </NextLink>
      )}
    </>
  );
};
