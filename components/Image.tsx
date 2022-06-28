/* eslint-disable @next/next/no-img-element */
import { Button, Flex, Heading, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FiShare, FiMoreHorizontal, FiDownload } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";

type Props = {
  src?: string;
};

const Image = (props: Props) => {
  const [imageHovered, setImageHovered] = useState(false);
  return (
    <Flex
      width="100%"
      cursor="zoom-in"
      borderRadius="12px"
      position="relative"
      onMouseEnter={() => setImageHovered(true)}
      onMouseLeave={() => setImageHovered(false)}
    >
      <img
        className="imgboi"
        src={
          props.src
            ? props.src
            : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thehistoryhub.com%2Fwp-content%2Fuploads%2F2014%2F08%2FBig-Ben-Night.jpg&f=1&nofb=1"
        }
        alt=""
        style={{
          width: "100%",
          borderRadius: "12px",
          objectFit: "cover",
        }}
      />
      {imageHovered ? (
        <Flex
          width="100%"
          height="100%"
          backgroundColor="#000000b7"
          zIndex={50}
          position="absolute"
          top={0}
          borderRadius="12px"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            position="absolute"
            top={2}
            left={0}
            alignItems="center"
            width="100%"
            justifyContent="flex-end"
          >
            <Button
              rounded="full"
              variant="solid"
              colorScheme="blue"
              marginRight="10px"
            >
              Save
            </Button>
          </Flex>
          <Flex
            position="absolute"
            bottom={2}
            left={0}
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Flex
              alignItems="center"
              gap="2px"
              marginLeft="4px"
              cursor="pointer"
            >
              <RiArrowRightUpLine color="white" />
              <Heading color="white" fontSize="md" fontWeight="bold">
                idiotboi
              </Heading>
            </Flex>
            <Flex alignItems="center" gap="9px" marginRight="4px">
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
            </Flex>
          </Flex>
        </Flex>
      ) : null}
    </Flex>
  );
};

export default Image;
