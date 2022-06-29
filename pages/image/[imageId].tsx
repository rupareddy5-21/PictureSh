import React from "react";
import { motion } from "framer-motion";
import { useColorMode } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import ImageDetailsComponent from "../../components/ImageDetailsComponent";
import variants from "../../utils/variants";
import { GetServerSidePropsContext } from "next";
import { getSession, useSession } from "next-auth/react";
import { UserType } from "../../utils/types";
import { wrapper } from "../../redux/store";
import { getSingleImage } from "../../redux/actions/singleImageActions";

const ImageDetails = () => {
  const { colorMode } = useColorMode();
  const { data: session } = useSession();
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: colorMode === "light" ? "#f9f9f9" : "#030303",
      }}
    >
      <Head>
        <title>PictureSh - This is a nice image</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isSingleImage={true} user={session?.user as UserType} />
      <ImageDetailsComponent />
    </motion.div>
  );
};

export default ImageDetails;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context: GetServerSidePropsContext) => {
    await store.dispatch(
      getSingleImage(parseInt(context.query.imageId as string))
    );
    const session = await getSession(context);
    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    return {
      props: {
        session,
      },
    };
  }
);
