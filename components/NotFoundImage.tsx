import { Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ohno from "../public/assets/ohno.png";

type Props = {
  title: string;
};

const NotFoundImage = (props: Props) => {
  return (
    <Flex
      width="100%"
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 200px)"
      flexDirection="column"
      gap="1.2rem"
    >
      <Image src={ohno} alt="" objectFit="cover" width="200px" height="200px" />
      <Heading fontSize="2xl">{props.title}</Heading>
    </Flex>
  );
};

export default NotFoundImage;
