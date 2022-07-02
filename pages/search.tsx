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
import { getsearchImages } from "../redux/actions/searchImageActions";
import { useSelector } from "react-redux";
import NotFoundImage from "../components/NotFoundImage";

type Props = {
  stuff: string;
};

const Search = (props: Props) => {
  const { colorMode } = useColorMode();
  const { data: session } = useSession();
  const searchimages: ImageType[] = useSelector(
    (state: any) => state.searchimage.imageData
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
        <title>Search results - {props.stuff}</title>
        <meta
          name="description"
          content={
            "Search results - " + props.stuff + ". Search anything you want :)"
          }
        />
        <link rel="icon" href="/ohno.ico" />
      </Head>
      <Navbar isSearch={true} user={session?.user as UserType} />
      <Flex paddingLeft="25px" paddingRight="10px" flexDirection="column">
        <Heading
          fontSize="xl"
          fontWeight="bold"
          marginTop="66px"
          marginLeft="-10px"
        >
          Search results
        </Heading>
        {searchimages?.length === 0 ? (
          <NotFoundImage title="No search results found" />
        ) : (
          <Feed isSearch={true} />
        )}
      </Flex>
    </motion.div>
  );
};

export default Search;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context: GetServerSidePropsContext) => {
    const cookie = context?.req?.cookies["next-auth.session-token"];
    const stuff = context.query.q as string;
    await store.dispatch(getsearchImages(stuff, cookie));
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
        stuff,
      },
    };
  }
);
