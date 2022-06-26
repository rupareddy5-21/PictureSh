/* eslint-disable @next/next/no-img-element */
import { Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

type Props = {
  src?: string;
};

const Image = (props: Props) => {
  const [imageHovered, setImageHovered] = useState(false);
  return (
    <Flex
      width="100%"
      cursor="pointer"
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
          <Heading color="white" fontSize="xl" fontWeight="extrabold">
            Open
          </Heading>
          <Flex
            position="absolute"
            bottom={2}
            left={0}
            marginLeft="10px"
            flexWrap="wrap"
            alignItems="center"
            gap="2px"
          >
            <RiArrowRightUpLine color="white" />
            <Heading color="white" fontSize="md" fontWeight="bold">
              idiotboi
            </Heading>
          </Flex>
        </Flex>
      ) : null}
    </Flex>
  );
};

export default Image;
