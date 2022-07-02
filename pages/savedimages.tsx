import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Flex, Heading, useColorMode } from "@chakra-ui/react";
import Feed from "../components/Feed";
import variants from "../utils/variants";
import { getSession, useSession } from "next-auth/react";
import { ImageType, UserType } from "../utils/types";
import { wrapper } from "../redux/store";
import { getSavedImages } from "../redux/actions/savedImageActions";
import { useSelector } from "react-redux";
import NotFoundImage from "../components/NotFoundImage";

const SavedImages = () => {
  const { colorMode } = useColorMode();
  const { data: session } = useSession();
  const savedimages: ImageType[] = useSelector(
    (state: any) => state.savedimage.imageData
  );
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
        <title>Saved images</title>
        <meta name="description" content="See all your saved images :)" />
        <link rel="icon" href="/ohno.ico" />
      </Head>
      <Navbar isSavedImages={true} user={session?.user as UserType} />
      <Flex paddingLeft="25px" paddingRight="10px" flexDirection="column">
        <Heading
          fontSize="xl"
          fontWeight="bold"
          marginTop="66px"
          marginLeft="-10px"
        >
          Saved images
        </Heading>
        {savedimages?.length === 0 ? (
          <NotFoundImage title="You dont have any saved images. Go save some images idiot :)" />
        ) : (
          <Feed isSavedImages={true} />
        )}
      </Flex>
    </motion.div>
  );
};

export default SavedImages;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context: GetServerSidePropsContext) => {
    const session = await getSession(context);
    const cookie = context?.req?.cookies["next-auth.session-token"];
    await store.dispatch(getSavedImages(cookie));
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
