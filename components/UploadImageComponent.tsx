import {
  Button,
  Flex,
  Input,
  Select,
  Text,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const UploadImageComponent = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex width="100%" justifyContent="center">
      <Flex
        marginBottom="20px"
        width="80%"
        marginTop="130px"
        backgroundColor={colorMode === "dark" ? "#1a1a1a" : "#ffffff"}
        borderRadius="20px"
        padding="20px"
        gap="2rem"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      >
        <Flex
          width="40%"
          backgroundColor={colorMode === "dark" ? "#1a1a1a" : "#ffffff"}
          height="400px"
          borderRadius="20px"
          padding="10px"
          cursor="pointer"
        >
          <Flex
            border="1px dotted gray"
            width="100%"
            borderRadius="20px"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <BsFillArrowUpCircleFill size={24} />
            <Text fontWeight="semibold" fontSize="sm" marginTop="20px">
              Click to upload image
            </Text>
          </Flex>
        </Flex>
        <Flex flex={1} flexDirection="column" gap="2rem">
          <Input
            variant="flushed"
            placeholder="Title"
            fontSize="25px"
            size="lg"
          />
          <Textarea placeholder="Description" size="lg" height="130px" />
          <Select placeholder="Select category">
            <option value="option1">Programming</option>
            <option value="option2">Music</option>
            <option value="option3">Gaming</option>
            <option value="option3">Cats</option>
            <option value="option3">Coffee</option>
            <option value="option3">Idk</option>
            <option value="option3">Shit</option>
          </Select>
          <Button colorScheme="blue" rounded="full">
            Upload
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UploadImageComponent;
