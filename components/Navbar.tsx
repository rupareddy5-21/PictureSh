import React from "react";
import { useRouter } from "next/router";
import {
  useColorMode,
  Flex,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { FaMoon, FaSun } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";

const Navbar = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      width="100%"
      backgroundColor={colorMode === "light" ? "#FFFFFF" : "#1a1a1a"}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={80}
      height="50px"
      alignItems="center"
      justifyContent="space-between"
      padding={{
        md: "0px 20px",
        sm: "0 5px",
      }}
      borderBottom={
        colorMode === "light" ? "1px solid #EDEFF1" : "1px solid #2D3748"
      }
    >
      <Heading
        as="h3"
        size="lg"
        cursor="pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        PictureSh
      </Heading>
      <InputGroup
        marginRight={{
          md: "10",
          sm: "20px",
        }}
        marginLeft={{
          md: "10",
          sm: "20px",
        }}
      >
        <form
          style={{
            width: "100%",
          }}
        >
          <InputLeftElement pointerEvents="none">
            <BiSearch color="#797a7a" size="1.2rem" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search for some coding pictures..."
            _placeholder={{
              color: "#797a7a",
            }}
            paddingLeft="2.3rem"
          />
        </form>
      </InputGroup>
      <Flex
        gap="1rem"
        alignItems="center"
        marginRight={{
          md: "10",
          sm: "20px",
        }}
      >
        {colorMode === "light" ? (
          <Tooltip label="Dark mode" openDelay={200}>
            <IconButton
              icon={<FaMoon />}
              aria-label="Dark mode"
              onClick={() => {
                toggleColorMode();
              }}
            />
          </Tooltip>
        ) : (
          <Tooltip label="Light mode" openDelay={200}>
            <IconButton
              icon={<FaSun />}
              aria-label="Light mode"
              onClick={() => {
                toggleColorMode();
              }}
            />
          </Tooltip>
        )}
        <Tooltip label="Add image" openDelay={200}>
          <IconButton aria-label="Add image" icon={<MdAddAPhoto />} />
        </Tooltip>
      </Flex>
      <Flex alignItems="center" gap="1rem">
        <Button
          colorScheme="blue"
          variant="outline"
          rounded="full"
          paddingRight="8"
          paddingLeft="8"
          display={{
            md: "flex",
            sm: "none",
          }}
        >
          Log In
        </Button>
        <Button
          colorScheme="blue"
          variant="solid"
          rounded="full"
          paddingRight="8"
          paddingLeft="8"
          display={{
            md: "flex",
            sm: "none",
          }}
        >
          Sign Up
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;