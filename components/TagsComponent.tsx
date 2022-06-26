import React from "react";
import { Flex, Tag, TagLabel, useColorMode } from "@chakra-ui/react";

const TagsComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      width="100%"
      left={0}
      right={0}
      zIndex={80}
      marginTop="50px"
      backgroundColor={colorMode === "light" ? "#FFFFFF" : "#1a1a1a"}
      padding={{
        md: "5px 20px",
        sm: "0 5px",
      }}
      position="fixed"
      borderBottom={
        colorMode === "light" ? "1px solid #EDEFF1" : "1px solid #2D3748"
      }
    >
      <Flex gap="1rem" alignItems="center" paddingTop="3px" paddingBottom="3px">
        <Tag
          size={"lg"}
          borderRadius="full"
          variant="solid"
          backgroundColor="white"
          cursor="pointer"
          color="#373737"
          border="1px solid #ffffff1a"
        >
          <TagLabel fontWeight="500">StuffStuffStuff</TagLabel>
        </Tag>
        <Tag
          size={"lg"}
          borderRadius="full"
          variant="solid"
          backgroundColor="#373737"
          cursor="pointer"
          border="1px solid #ffffff1a"
          _hover={{
            backgroundColor: "#ffffff44",
          }}
        >
          <TagLabel fontWeight="500">StuffStuffStuff</TagLabel>
        </Tag>
        <Tag
          size={"lg"}
          borderRadius="full"
          variant="solid"
          backgroundColor="#373737"
          cursor="pointer"
          border="1px solid #ffffff1a"
          _hover={{
            backgroundColor: "#ffffff44",
          }}
        >
          <TagLabel fontWeight="500">StuffStuffStuff</TagLabel>
        </Tag>
        <Tag
          size={"lg"}
          borderRadius="full"
          variant="solid"
          backgroundColor="#373737"
          cursor="pointer"
          border="1px solid #ffffff1a"
          _hover={{
            backgroundColor: "#ffffff44",
          }}
        >
          <TagLabel fontWeight="500">StuffStuffStuff</TagLabel>
        </Tag>
        <Tag
          size={"lg"}
          borderRadius="full"
          variant="solid"
          backgroundColor="#373737"
          cursor="pointer"
          border="1px solid #ffffff1a"
          _hover={{
            backgroundColor: "#ffffff44",
          }}
        >
          <TagLabel fontWeight="500">StuffStuffStuff</TagLabel>
        </Tag>
        <Tag
          size={"lg"}
          borderRadius="full"
          variant="solid"
          backgroundColor="#373737"
          cursor="pointer"
          border="1px solid #ffffff1a"
          _hover={{
            backgroundColor: "#ffffff44",
          }}
        >
          <TagLabel fontWeight="500">StuffStuffStuff</TagLabel>
        </Tag>
        <Tag
          size={"lg"}
          borderRadius="full"
          variant="solid"
          backgroundColor="#373737"
          cursor="pointer"
          border="1px solid #ffffff1a"
          _hover={{
            backgroundColor: "#ffffff44",
          }}
        >
          <TagLabel fontWeight="500">StuffStuffStuff</TagLabel>
        </Tag>
        <Tag
          size={"lg"}
          borderRadius="full"
          variant="solid"
          backgroundColor="#373737"
          cursor="pointer"
          border="1px solid #ffffff1a"
          _hover={{
            backgroundColor: "#ffffff44",
          }}
        >
          <TagLabel fontWeight="500">StuffStuffStuff</TagLabel>
        </Tag>
        <Tag
          size={"lg"}
          borderRadius="full"
          variant="solid"
          backgroundColor="#373737"
          cursor="pointer"
          border="1px solid #ffffff1a"
          _hover={{
            backgroundColor: "#ffffff44",
          }}
        >
          <TagLabel fontWeight="500">StuffStuffStuff</TagLabel>
        </Tag>
        <Tag
          size={"lg"}
          borderRadius="full"
          variant="solid"
          backgroundColor="#373737"
          cursor="pointer"
          border="1px solid #ffffff1a"
          _hover={{
            backgroundColor: "#ffffff44",
          }}
        >
          <TagLabel fontWeight="500">StuffStuffStuff</TagLabel>
        </Tag>
      </Flex>
    </Flex>
  );
};

export default TagsComponent;
