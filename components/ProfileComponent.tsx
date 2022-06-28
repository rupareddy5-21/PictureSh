import { Avatar, Button, Flex, Heading, IconButton } from "@chakra-ui/react";
import React from "react";
import { FiShare } from "react-icons/fi";

const ProfileComponent = () => {
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
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          cursor="pointer"
          size="xl"
        />
        <Heading fontSize="3xl">IdiotBoi</Heading>
        <Heading fontSize="16px" fontWeight="normal" color="gray.600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio autem
          voluptatibus vero sequi eligendi aspernatur, quam doloremque
          blanditiis amet dignissimos commodi omnis asperiores provident eos?
          Dolorem natus qui sint corporis.
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
          <Button
            borderRadius="full"
            size="lg"
            variant="solid"
            colorScheme="blue"
          >
            Follow
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileComponent;
