import React from "react";
import { motion } from "framer-motion";
import { Flex, Heading, useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Feed from "../../components/Feed";
import ProfileComponent from "../../components/ProfileComponent";
import variants from "../../utils/variants";
import { GetServerSidePropsContext } from "next";
import { getSession, useSession } from "next-auth/react";
import { UserType } from "../../utils/types";
import { wrapper } from "../../redux/store";
import * as api from "../../utils/api";
import { getUsers } from "../../redux/actions/userActions";
import { useSelector } from "react-redux";
import NotFoundImage from "../../components/NotFoundImage";

type Props = {
  cookie: string;
};

const UserProfile = (props: Props) => {
  const { colorMode } = useColorMode();
  const { data: session } = useSession();
  const profileimages: UserType = useSelector(
    (state: any) => state.user.authData
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
        <title>{profileimages?.name} profile</title>
        <meta
          name="description"
          content={"See " + profileimages?.name + " profile :)"}
        />
        <link rel="icon" href="/ohno.ico" />
      </Head>
      <Navbar isProfile={true} user={session?.user as UserType} />
      <Flex
        paddingLeft="25px"
        paddingRight="10px"
        flexDirection="column"
        marginTop="50px"
      >
        <ProfileComponent
          currentUser={session?.user as UserType}
          cookie={props.cookie}
        />
        <Heading
          fontSize="xl"
          fontWeight="bold"
          marginTop="30px"
          marginLeft="-10px"
        >
          {profileimages?.name} images
        </Heading>
        {profileimages?.images?.length === 0 ? (
          <NotFoundImage title="Seems like this idiot has no images" />
        ) : (
          <Feed isProfile={true} />
        )}
      </Flex>
    </motion.div>
  );
};

export default UserProfile;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context: GetServerSidePropsContext) => {
    const session = await getSession(context);
    const cookie = context?.req?.cookies["next-auth.session-token"];
    await store.dispatch(
      getUsers(context?.params?.userId as string, cookie as string)
    );
    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    const { data } = await api.getUser(
      context?.params?.userId as string,
      cookie as string
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
