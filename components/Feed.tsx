import { Flex } from "@chakra-ui/react";
import React from "react";
import Masonry from "react-masonry-css";
import { useSelector } from "react-redux";
import { ImageType, UserType } from "../utils/types";
import ImageBoi from "./Image";
import Image from "next/image";
import ohno from "../public/assets/ohno.png";

type Props = {
  isProfile?: boolean;
  isYourImages?: boolean;
  isSearch?: boolean;
  isSavedImages?: boolean;
  isTagImage?: boolean;
};

const Feed = (props: Props) => {
  const images: ImageType[] = useSelector(
    (state: any) => state.image.imageData
  );
  const profileimages: UserType = useSelector(
    (state: any) => state.user.authData
  );
  const yourimages: ImageType[] = useSelector(
    (state: any) => state.yourimage.imageData
  );
  const savedimages: ImageType[] = useSelector(
    (state: any) => state.savedimage.imageData
  );
  const searchimages: ImageType[] = useSelector(
    (state: any) => state.searchimage.imageData
  );
  const categoryimages: ImageType[] = useSelector(
    (state: any) => state.categoryimage.imageData
  );
  const breakPoints = {
    default: 4,
    1200: 3,
    1000: 2,
    700: 1,
  };
  return (
    <div
      style={{
        marginTop:
          props.isProfile ||
          props.isYourImages ||
          props.isSearch ||
          props.isSavedImages ||
          props.isTagImage
            ? "10px"
            : "100px",
        width: "100%",
      }}
    >
      <Masonry
        breakpointCols={breakPoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {props.isProfile
          ? profileimages?.images?.map((image, index) => (
              <ImageBoi key={index} image={image} />
            ))
          : props.isYourImages
          ? yourimages?.map((image, index) => (
              <ImageBoi key={index} image={image} />
            ))
          : props.isSavedImages
          ? savedimages?.map((image, index) => (
              <ImageBoi key={index} image={image} />
            ))
          : props.isSearch
          ? searchimages?.map((image, index) => (
              <ImageBoi key={index} image={image} />
            ))
          : props.isTagImage
          ? categoryimages?.map((image, index) => (
              <ImageBoi key={index} image={image} />
            ))
          : images?.map((image, index) => (
              <ImageBoi key={index} image={image} />
            ))}
      </Masonry>
    </div>
  );
};

export default Feed;
