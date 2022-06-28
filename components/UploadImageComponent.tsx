import { Button, Flex, Input, Select, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const UploadImageComponent = () => {
  return (
    <Flex width="100%" justifyContent="center">
      <Flex
        width="80%"
        marginTop="130px"
        backgroundColor="#1a1a1a"
        borderRadius="20px"
        padding="20px"
        gap="2rem"
      >
        <Flex
          width="40%"
          backgroundColor="#030303"
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
            <BsFillArrowUpCircleFill size={24} color="white" />
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
            <option value="option3">Bullshit</option>
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
