/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
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
import { useSession } from "next-auth/react";
import { format } from "timeago.js";
import { addComment } from "../redux/actions/singleImageActions";

type Props = {
  cookie: string;
};

const ImageDetailsComponent = (props: Props) => {
  const dispatch = useDispatch();
  const image: ImageType = useSelector(
    (state: any) => state.singleimage.imageData
  );
  const router = useRouter();
  const imageDeleteBoi = () => {
    //@ts-ignore
    dispatch(deleteImage(image.id, router, props.cookie));
  };
  const { colorMode } = useColorMode();
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const addCommentBoi = () => {
    //@ts-ignore
    dispatch(addComment(comment, props.cookie, image.id));
    setComment("");
  };
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
                {/* @ts-ignore */}
                {image?.authorId === session?.user?.id ? (
                  <IconButton
                    icon={<MdDelete size={20} />}
                    aria-label="Delete"
                    rounded="full"
                    colorScheme="red"
                    onClick={imageDeleteBoi}
                  />
                ) : null}
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
                <Avatar
                  name={image?.author?.name}
                  src={image?.author?.image}
                  cursor="pointer"
                />
                <Flex flexDirection="column" gap="2px">
                  <Heading fontSize="20px">{image?.author?.name}</Heading>
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
          <Heading fontSize="22px">
            {image?.comments?.length === 0
              ? "No comments"
              : image?.comments?.length === 1
              ? `${image?.comments?.length} Comment`
              : `${image?.comments?.length} Comments`}
          </Heading>
          <Flex width="100%" alignItems="center" gap="1rem">
            <Avatar
              name={session?.user?.name as string}
              src={session?.user?.image as string}
            />
            <Input
              variant="outline"
              placeholder="Add a comment"
              rounded="full"
              size="lg"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setComment(event.target.value);
              }}
              onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
                if (event.key === "Enter") {
                  addCommentBoi();
                }
              }}
            />
          </Flex>
          <Flex flexDirection="column" width="100%" gap="2rem">
            {image?.comments?.map((comment, index) => (
              <Flex width="100%" alignItems="start" gap="12px" key={index}>
                <Avatar
                  name={comment?.user?.name}
                  src={comment?.user?.image}
                  cursor="pointer"
                />
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
                      {comment?.user?.name}
                    </Heading>
                    <Heading
                      fontSize="15px"
                      color="gray.600"
                      fontWeight="medium"
                    >
                      {format(comment?.createdAt)}
                    </Heading>
                  </Flex>
                  <Text fontSize="15px" color="gray.600" lineHeight="20px">
                    {comment?.comment}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ImageDetailsComponent;
