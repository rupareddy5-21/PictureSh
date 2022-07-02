import React from "react";
import { motion } from "framer-motion";
import { useColorMode } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import ImageDetailsComponent from "../../components/ImageDetailsComponent";
import variants from "../../utils/variants";
import { GetServerSidePropsContext } from "next";
import { getSession, useSession } from "next-auth/react";
import { ImageType, UserType } from "../../utils/types";
import { wrapper } from "../../redux/store";
import { getSingleImage } from "../../redux/actions/singleImageActions";
import * as api from "../../utils/api";
import { useSelector } from "react-redux";

type Props = {
  cookie: string;
};

const ImageDetails = (props: Props) => {
  const { colorMode } = useColorMode();
  const { data: session } = useSession();
  const image: ImageType = useSelector(
    (state: any) => state.singleimage.imageData
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
        <title>Image - {image?.title}</title>
        <meta
          name="description"
          content={
            "Image by " +
            image?.author?.name +
            ". " +
            image?.title +
            ". " +
            image?.description
          }
        />
        <link rel="icon" href="/ohno.ico" />
      </Head>
      <Navbar isSingleImage={true} user={session?.user as UserType} />
      <ImageDetailsComponent cookie={props.cookie} />
    </motion.div>
  );
};

export default ImageDetails;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context: GetServerSidePropsContext) => {
    const cookie = context?.req?.cookies["next-auth.session-token"];
    await store.dispatch(
      getSingleImage(parseInt(context.query.imageId as string), cookie)
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
    const { data } = await api.getSingleImage(
      parseInt(context.query.imageId as string),
      cookie
    );
    if (data === null) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        session,
        cookie,
      },
    };
  }
);
