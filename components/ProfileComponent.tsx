import { Avatar, Button, Flex, Heading, IconButton } from "@chakra-ui/react";
import React from "react";
import { FiShare } from "react-icons/fi";
import { UserType } from "../utils/types";
import { useSelector } from "react-redux";

type Props = {
  currentUser: UserType;
};

const ProfileComponent = (props: Props) => {
  const user = useSelector((state: any) => state.user.authData);
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
        width="40%"
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
              50
            </Heading>
          </Flex>
          <Flex flexDirection="column" gap="8px" alignItems="center">
            <Heading fontSize="lg" fontWeight="bold">
              Following
            </Heading>
            <Heading fontSize="xl" fontWeight="semibold">
              69
            </Heading>
          </Flex>
        </Flex>
        <Flex
          gap="2rem"
          alignItems="center"
          width="100%"
          justifyContent="center"
        >
          <IconButton
            aria-label="share"
            icon={<FiShare size="22px" />}
            borderRadius="full"
            size="lg"
            colorScheme="blue"
          />
          {user?.id === props.currentUser?.id ? (
            <Button
              borderRadius="full"
              size="lg"
              variant="solid"
              colorScheme="blue"
            >
              Upload
            </Button>
          ) : (
            <Button
              borderRadius="full"
              size="lg"
              variant="solid"
              colorScheme="blue"
            >
              Follow
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileComponent;
