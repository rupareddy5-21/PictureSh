import { Flex, Heading, useColorMode } from "@chakra-ui/react";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { ImageType, UserType } from "../utils/types";
import Feed from "../components/Feed";
import variants from "../utils/variants";
import { GetServerSidePropsContext } from "next";
import { wrapper } from "../redux/store";
import { getCategoryImages } from "../redux/actions/categoryImageAction";
import { useSelector } from "react-redux";
import NotFoundImage from "../components/NotFoundImage";

type Props = {
  category: string;
};

const Tag = (props: Props) => {
  const { colorMode } = useColorMode();
  const { data: session } = useSession();
  const categoryimages: ImageType[] = useSelector(
    (state: any) => state.categoryimage.imageData
  );
  return (
    <motion.div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: colorMode === "light" ? "#f9f9f9" : "#030303",
      }}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
    >
      <Head>
        <title>Category - {props.category}</title>
        <meta
          name="description"
          content={
            "Category - " +
            props.category +
            ". Find all the images with this category"
          }
        />
        <link rel="icon" href="/ohno.ico" />
      </Head>
      <Navbar user={session?.user as UserType} category={props.category} />
      <Flex paddingLeft="25px" paddingRight="10px" flexDirection="column">
        <Heading
          fontSize="xl"
          fontWeight="bold"
          marginTop={{
            md: "110px",
            sm: "130px",
          }}
          marginLeft="-10px"
        >
          Category - {props.category}
        </Heading>
        {categoryimages?.length === 0 ? (
          <NotFoundImage title="There are no images of this category. Go upload some images of this category idiot :)" />
        ) : (
          <Feed isTagImage={true} />
        )}
      </Flex>
    </motion.div>
  );
};

export default Tag;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context: GetServerSidePropsContext) => {
    const session = await getSession(context);
    const cookie = context?.req?.cookies["__Secure-next-auth.session-token"];
    const category = context?.query?.t;
    await store.dispatch(getCategoryImages(category as string, cookie));
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
        category,
      },
    };
  }
);
