import {
  Button,
  Flex,
  Input,
  Select,
  Text,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { uploadImage } from "../redux/actions/imageActions";
import { CreateImageType } from "../utils/types";
import { useDispatch } from "react-redux";

const UploadImageComponent = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<CreateImageType>({
    title: "",
    description: "",
    category: "",
  });
  const uploadImageBoi = () => {
    //@ts-ignore
    dispatch(uploadImage(data));
  };
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setData({ ...data, title: e.target.value });
            }}
          />
          <Textarea
            placeholder="Description"
            size="lg"
            height="130px"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setData({ ...data, description: e.target.value });
            }}
          />
          <Select
            placeholder="Select category"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setData({ ...data, category: e.target.value });
            }}
          >
            <option value="programming">Programming</option>
            <option value="music">Music</option>
            <option value="gaming">Gaming</option>
            <option value="cats">Cats</option>
            <option value="coffee">Coffee</option>
            <option value="idk">Idk</option>
            <option value="shit">Shit</option>
            <option value="other">Other</option>
          </Select>
          <Button colorScheme="blue" rounded="full" onClick={uploadImageBoi}>
            Upload
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UploadImageComponent;
