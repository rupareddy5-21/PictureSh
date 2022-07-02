/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import {
  Avatar,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  Text,
  Tooltip,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { FiShare, FiMoreHorizontal, FiDownload } from "react-icons/fi";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteImage } from "../redux/actions/imageActions";
import { ImageType } from "../utils/types";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { format } from "timeago.js";
import {
  addComment,
  likeImage,
  saveImage,
} from "../redux/actions/singleImageActions";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import {
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { IoIosCopy } from "react-icons/io";
import { toast } from "react-toastify";
import DeleteImageModal from "./DeleteImageModal";
import { saveAs } from "file-saver";

type Props = {
  cookie: string;
};

const ImageDetailsComponent = (props: Props) => {
  const dispatch = useDispatch();
  const image: ImageType = useSelector(
    (state: any) => state?.singleimage?.imageData
  );
  const router = useRouter();
  const { colorMode } = useColorMode();
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const addCommentBoi = () => {
    setComment("");
    //@ts-ignore
    dispatch(addComment(comment, props.cookie, image?.id));
  };
  const SHARE_URL = `https://picturesh.vercel.app/image/${image?.id}`;
  const likeImageBoi = () => {
    //@ts-ignore
    dispatch(likeImage(image?.id, props.cookie));
  };
  const isLiked =
    //@ts-ignore
    image?.likes?.filter((like) => like.userId === session?.user?.id).length >
    0;
  const isSaved =
    //@ts-ignore
    image?.saves?.filter((save) => save?.userId === session?.user?.id).length >
    0;
  const saveImageBoi = () => {
    //@ts-ignore
    dispatch(saveImage(image?.id, props.cookie));
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(SHARE_URL);
    toast.success("Copied to clipboard", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      theme: "dark",
    });
  };
  const { onOpen, onClose, isOpen } = useDisclosure();
  const isFollowing =
    image?.author?.followers?.filter(
      // @ts-ignore
      (follow) => follow?.followingId === session?.user?.id
    ).length > 0;
  const {
    isOpen: deleteIsOpen,
    onOpen: deleteOnOpen,
    onClose: deleteOnClose,
  } = useDisclosure();
  const downloadImage = () => {
    saveAs(image?.url, "shit.png");
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
          flexDirection={{
            md: "row",
            sm: "column",
          }}
        >
          <Image
            src={image?.url}
            alt=""
            width={{
              md: "32%",
              sm: "100%",
            }}
            borderRadius="12px"
            objectFit="cover"
          />
          <Flex
            width={{
              md: "68%",
              sm: "100%",
            }}
            paddingRight={{
              md: "25px",
              sm: "2px",
            }}
            borderRadius="20px"
            justifyContent="flex-start"
            alignItems="flex-start"
            flexDirection="column"
            gap="1.4rem"
            position="relative"
          >
            <Flex
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Flex
                alignItems="center"
                gap={{
                  md: "2rem",
                  sm: "1rem",
                }}
              >
                <Flex
                  alignItems="center"
                  gap={{
                    md: "7px",
                    sm: "4px",
                  }}
                >
                  <Tooltip label={isLiked ? "UnLike image" : "Like image"}>
                    <IconButton
                      icon={
                        isLiked ? (
                          <IoHeart size={22} />
                        ) : (
                          <IoHeartOutline size={22} />
                        )
                      }
                      aria-label="Like"
                      rounded="full"
                      onClick={likeImageBoi}
                    />
                  </Tooltip>
                  <Text fontSize="md" fontWeight="bold">
                    {image?.likes?.length}
                  </Text>
                </Flex>
                <Tooltip label="Download image">
                  <IconButton
                    icon={<FiDownload size={20} />}
                    aria-label="Download"
                    rounded="full"
                    onClick={downloadImage}
                  />
                </Tooltip>
                <Popover isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
                  <Tooltip label="Share image">
                    <PopoverTrigger>
                      <IconButton
                        icon={<FiShare size={20} />}
                        aria-label="Share"
                        rounded="full"
                      />
                    </PopoverTrigger>
                  </Tooltip>
                  <PopoverContent
                    backgroundColor={
                      colorMode === "dark" ? "#1a1a1a" : "#ffffff"
                    }
                  >
                    <PopoverArrow
                      backgroundColor={
                        colorMode === "dark" ? "#1a1a1a" : "#ffffff"
                      }
                    />
                    <PopoverCloseButton />
                    <PopoverHeader>Share image!</PopoverHeader>
                    <PopoverBody>
                      <Flex
                        width="100%"
                        gap="10px"
                        alignItems="center"
                        cursor="pointer"
                        paddingBottom="8px"
                        onClick={() => {
                          copyToClipboard();
                          onClose();
                        }}
                      >
                        <IoIosCopy
                          size="24px"
                          style={{
                            marginLeft: "4px",
                          }}
                        />
                        <Text
                          fontSize="md"
                          fontWeight="semibold"
                          position="absolute"
                          left="60px"
                        >
                          Copy to clipboard
                        </Text>
                      </Flex>
                      <Divider />
                      <Flex
                        width="100%"
                        gap="10px"
                        alignItems="center"
                        cursor="pointer"
                        paddingBottom="5px"
                        paddingTop="5px"
                      >
                        <RedditShareButton
                          url={SHARE_URL}
                          style={{
                            width: "100%",
                          }}
                        >
                          <RedditIcon size={32} round />
                        </RedditShareButton>
                        <Text
                          fontSize="md"
                          fontWeight="semibold"
                          position="absolute"
                          left="60px"
                        >
                          Reddit
                        </Text>
                      </Flex>
                      <Divider />
                      <Flex
                        width="100%"
                        gap="10px"
                        alignItems="center"
                        cursor="pointer"
                        paddingBottom="5px"
                        paddingTop="5px"
                      >
                        <FacebookShareButton
                          url={SHARE_URL}
                          style={{
                            width: "100%",
                          }}
                        >
                          <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <Text
                          fontSize="md"
                          fontWeight="semibold"
                          position="absolute"
                          left="60px"
                        >
                          Facebook
                        </Text>
                      </Flex>
                      <Divider />
                      <Flex
                        width="100%"
                        gap="10px"
                        alignItems="center"
                        cursor="pointer"
                        paddingBottom="5px"
                        paddingTop="5px"
                      >
                        <TwitterShareButton
                          url={SHARE_URL}
                          style={{
                            width: "100%",
                          }}
                        >
                          <TwitterIcon size={32} round />
                        </TwitterShareButton>
                        <Text
                          fontSize="md"
                          fontWeight="semibold"
                          position="absolute"
                          left="60px"
                        >
                          Twitter
                        </Text>
                      </Flex>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                {/* @ts-ignore */}
                {image?.authorId === session?.user?.id ? (
                  <Tooltip label="Delete image">
                    <IconButton
                      icon={<MdDelete size={20} />}
                      aria-label="Delete"
                      rounded="full"
                      colorScheme="red"
                      onClick={deleteOnOpen}
                    />
                  </Tooltip>
                ) : null}
              </Flex>
              <Tooltip label={isSaved ? "UnSave image" : "Save image"}>
                <Button
                  rounded="full"
                  variant="solid"
                  colorScheme="blue"
                  onClick={saveImageBoi}
                >
                  {isSaved ? "UnSave" : "Save"}
                </Button>
              </Tooltip>
            </Flex>
            <Flex width="100%" flexWrap="wrap">
              <Heading fontSize="25px" width="100%">
                {image?.title}
              </Heading>
            </Flex>
            <Flex width="100%" flexWrap="wrap">
              <Text fontSize="16px" width="100%">
                {image?.description}
              </Text>
            </Flex>
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
                  onClick={() => {
                    router.push(`/user/${image?.author?.id}`);
                  }}
                />
                <Flex flexDirection="column" gap="2px" alignItems="start">
                  <Heading
                    fontSize="20px"
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                    onClick={() => {
                      router.push(`/user/${image?.author?.id}`);
                    }}
                  >
                    {image?.author?.name}
                  </Heading>
                  <Text fontSize="14px" fontWeight="normal">
                    {image?.author?.followers?.length} followers
                  </Text>
                </Flex>
              </Flex>
              <Button
                rounded="full "
                colorScheme="blue"
                onClick={() => {
                  router.push(`/user/${image?.author?.id}`);
                }}
              >
                {isFollowing ? "UnFollow" : "Follow"}
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
                  if (comment?.trim()?.length === 0) {
                    toast.error("Comment cannot be empty", {
                      position: "top-center",
                      autoClose: 2000,
                      theme: "dark",
                    });
                  } else if (comment?.trim()?.length >= 254) {
                    toast.error("Comment should be less than 255 characters", {
                      position: "top-center",
                      autoClose: 2000,
                      theme: "dark",
                    });
                  } else {
                    addCommentBoi();
                  }
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
                  onClick={() => {
                    router.push(`/user/${comment?.user?.id}`);
                  }}
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
                      onClick={() => {
                        router.push(`/user/${comment?.user?.id}`);
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
      <DeleteImageModal
        isOpen={deleteIsOpen}
        onClose={deleteOnClose}
        cookie={props.cookie}
        id={image?.id}
      />
    </Flex>
  );
};

export default ImageDetailsComponent;
