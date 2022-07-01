import React from "react";
import { Flex, Tag, TagLabel, useColorMode } from "@chakra-ui/react";
import categories from "../constants/categories";
import { useRouter } from "next/router";

const TagsComponent = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  return (
    <Flex
      width="100%"
      padding={{
        md: "0px 20px",
        sm: "0 5px",
      }}
      height="45px"
      backgroundColor={colorMode === "light" ? "#FFFFFF" : "#1a1a1a"}
      borderBottom={
        colorMode === "light" ? "1px solid #e5e5e5" : "1px solid #373737"
      }
    >
      <Flex gap="1rem" alignItems="center" paddingTop="3px" paddingBottom="3px">
        {categories.map((category, index) =>
          category.title !== "All" ? (
            <Tag
              key={index}
              size={"md"}
              borderRadius="full"
              variant="solid"
              backgroundColor={colorMode === "light" ? "#f2f2f2" : "#373737"}
              cursor="pointer"
              color={colorMode === "light" ? "#373737" : "#f2f2f2"}
              border={
                colorMode === "dark"
                  ? "1px solid #ffffff1a"
                  : "1px solid #e1e1e1"
              }
              _hover={{
                backgroundColor:
                  colorMode === "dark" ? "#ffffff44" : "#f2f2f297",
              }}
              onClick={() => {
                router.push(
                  `/category?t=${category.title.toLocaleLowerCase()}`
                );
              }}
            >
              <TagLabel fontWeight="500">{category.title}</TagLabel>
            </Tag>
          ) : (
            <Tag
              key={index}
              size={"md"}
              borderRadius="full"
              variant="solid"
              backgroundColor={colorMode === "dark" ? "#f2f2f2" : "#373737"}
              cursor="pointer"
              color={colorMode === "dark" ? "#373737" : "#f2f2f2"}
              border={
                colorMode === "light"
                  ? "1px solid #ffffff1a"
                  : "1px solid #e1e1e1"
              }
              onClick={() => {
                router.push(`/`);
              }}
            >
              <TagLabel fontWeight="500">{category.title}</TagLabel>
            </Tag>
          )
        )}
      </Flex>
    </Flex>
  );
};

export default TagsComponent;
