import {
  Avatar,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FiShare } from "react-icons/fi";
import { UserType } from "../utils/types";
import { useDispatch, useSelector } from "react-redux";
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
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { followUser } from "../redux/actions/userActions";
import { toast } from "react-toastify";

type Props = {
  currentUser: UserType;
  cookie: string;
};

const ProfileComponent = (props: Props) => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const user: UserType = useSelector((state: any) => state?.user?.authData);
  const SHARE_URL = `https://picturesh.vercel.app/user/${user?.id}`;
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const isFollowing =
    user?.followers?.filter(
      // @ts-ignore
      (follow) => follow?.followingId === session?.user?.id
    ).length > 0;
  const followUserBoi = () => {
    //@ts-ignore
    dispatch(followUser(user?.id, props.cookie));
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
  return (
    <Flex
      width="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Flex
        flexDirection="column"
        marginTop="50px"
        alignItems="center"
        gap="1rem"
        width={{
          md: "40%",
          sm: "100%",
        }}
      >
        <Avatar
          name={user?.name}
          src={user?.image}
          cursor="pointer"
          size="xl"
        />
        <Heading fontSize="3xl">{user?.name}</Heading>
        <Heading fontSize="16px" fontWeight="normal" color="gray.600">
          I love PictureSh and your mom :)
        </Heading>
        <Flex justifyContent="space-evenly" alignItems="center" width="100%">
          <Flex flexDirection="column" gap="8px" alignItems="center">
            <Heading fontSize="xl" fontWeight="bold">
              Followers
            </Heading>
            <Heading fontSize="lg" fontWeight="semibold">
              {user?.followers?.length}
            </Heading>
          </Flex>
          <Flex flexDirection="column" gap="8px" alignItems="center">
            <Heading fontSize="lg" fontWeight="bold">
              Following
            </Heading>
            <Heading fontSize="xl" fontWeight="semibold">
              {user?.following?.length}
            </Heading>
          </Flex>
        </Flex>
        <Flex
          gap="2rem"
          alignItems="center"
          width="100%"
          justifyContent="center"
        >
          <Popover
            closeOnBlur={false}
            onOpen={onOpen}
            onClose={onClose}
            isOpen={isOpen}
          >
            <PopoverTrigger>
              <IconButton
                aria-label="share"
                icon={<FiShare size="22px" />}
                borderRadius="full"
                size="lg"
                colorScheme="blue"
              />
            </PopoverTrigger>
            <PopoverContent
              backgroundColor={colorMode === "dark" ? "#1a1a1a" : "#ffffff"}
            >
              <PopoverArrow
                backgroundColor={colorMode === "dark" ? "#1a1a1a" : "#ffffff"}
              />
              <PopoverCloseButton />
              <PopoverHeader>Share profile!</PopoverHeader>
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
          {user?.id === props.currentUser?.id ? (
            <Button
              borderRadius="full"
              size="lg"
              variant="solid"
              colorScheme="blue"
              onClick={() => {
                router.push("/upload");
              }}
            >
              Upload
            </Button>
          ) : (
            <Button
              borderRadius="full"
              size="lg"
              variant="solid"
              colorScheme="blue"
              onClick={followUserBoi}
            >
              {isFollowing ? "UnFollow" : "Follow"}
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileComponent;
