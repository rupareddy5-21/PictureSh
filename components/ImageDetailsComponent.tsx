/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Avatar,
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FiShare, FiMoreHorizontal, FiDownload } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteImage } from "../redux/actions/imageActions";
import { ImageType } from "../utils/types";
import { useRouter } from "next/router";

const ImageDetailsComponent = () => {
  const dispatch = useDispatch();
  const image: ImageType = useSelector(
    (state: any) => state.singleimage.imageData
  );
  const router = useRouter();
  const imageDeleteBoi = () => {
    //@ts-ignore
    dispatch(deleteImage(image.id, router));
  };
  const { colorMode } = useColorMode();
  return (
    <Flex width="100%" justifyContent="center">
      <Flex
        width="94%"
        marginTop="130px"
        flexDirection="column"
        gap="2rem"
        marginBottom="10px"
      >
        <Flex
          padding="20px"
          gap="2rem"
          backgroundColor={colorMode === "dark" ? "#1a1a1a" : "#ffffff"}
          borderRadius="20px"
          boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
        >
          <img
            src={image?.url}
            alt=""
            style={{
              width: "400px",
              borderRadius: "12px",
              objectFit: "cover",
              height: "100%",
            }}
          />
          <Flex
            flex={1}
            borderRadius="20px"
            justifyContent="flex-start"
            alignItems="flex-start"
            flexDirection="column"
            gap="1.4rem"
          >
            <Flex
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Flex alignItems="center" gap="2rem">
                <IconButton
                  icon={<IoHeartOutline size={22} />}
                  aria-label="Like"
                  rounded="full"
                />
                <IconButton
                  icon={<FiDownload size={20} />}
                  aria-label="Download"
                  rounded="full"
                />
                <IconButton
                  icon={<FiShare size={20} />}
                  aria-label="Share"
                  rounded="full"
                />
                <IconButton
                  icon={<MdDelete size={20} />}
                  aria-label="Delete"
                  rounded="full"
                  colorScheme="red"
                  onClick={imageDeleteBoi}
                />
              </Flex>
              <Button rounded="full" variant="solid" colorScheme="blue">
                Save
              </Button>
            </Flex>
            <Heading fontSize="25px">{image?.title}</Heading>
            <Text fontSize="16px">{image?.description}</Text>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Flex alignItems="center" gap="9px">
                <Avatar name="sdfsf" cursor="pointer" />
                <Flex flexDirection="column" gap="2px">
                  <Heading fontSize="20px">Idiotboi</Heading>
                  <Text fontSize="12px" fontWeight="normal">
                    28 followers
                  </Text>
                </Flex>
              </Flex>
              <Button rounded="full " colorScheme="blue">
                Follow
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          padding="20px"
          gap="2rem"
          borderRadius="20px"
          flexDirection="column"
          width="100%"
        >
          <Heading fontSize="22px">20 Comments</Heading>
          <Flex width="100%" alignItems="center" gap="1rem">
            <Avatar name="fdsafds" />
            <Input
              variant="outline"
              placeholder="Add a comment"
              rounded="full"
              size="lg"
            />
          </Flex>
          <Flex flexDirection="column" width="100%" gap="2rem">
            <Flex width="100%" alignItems="start" gap="12px">
              <Avatar name="sdfsdf" cursor="pointer" />
              <Flex flexDirection="column" alignItems="start" gap="6px">
                <Flex alignItems="center" gap="10px">
                  <Heading
                    fontSize="17px"
                    fontWeight="semibold"
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Idiotboi
                  </Heading>
                  <Heading fontSize="15px" color="gray.600" fontWeight="medium">
                    20 minutes ago
                  </Heading>
                </Flex>
                <Text fontSize="15px" color="gray.600" lineHeight="20px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis accusantium neque unde distinctio commodi a, rem
                  repellendus deserunt explicabo in fugiat corporis natus optio
                  rerum quaerat quod? Sequi, culpa iste.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ImageDetailsComponent;
