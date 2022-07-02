import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Flex, useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import UploadImageComponent from "../components/UploadImageComponent";
import variants from "../utils/variants";
import { getSession, useSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import { UserType } from "../utils/types";

type Props = {
  cookie: string;
};

const Upload = (props: Props) => {
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
        <title>Upload image</title>
        <meta name="description" content="Upload your shitty images :)" />
        <link rel="icon" href="/ohno.ico" />
      </Head>
      <Navbar isUploadImage={true} user={session?.user as UserType} />
      <UploadImageComponent cookie={props.cookie} />
    </motion.div>
  );
};

export default Upload;
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const cookie = ctx.req?.cookies["__Secure-next-auth.session-token"];
  return {
    props: {
      session,
      cookie,
    },
  };
}
