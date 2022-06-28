import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Flex, useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import UploadImageComponent from "../components/UploadImageComponent";

const Upload = () => {
  const { colorMode } = useColorMode();
  return (
    <motion.div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: colorMode === "light" ? "#dbe0e6" : "#030303",
      }}
    >
      <Head>
        <title>PictureSh - Upload image</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isUploadImage={true} />
      <Flex
        marginTop="50px"
        height="calc(100vh - 50px)"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <UploadImageComponent />
      </Flex>
    </motion.div>
  );
};

export default Upload;