import React from "react";
import Masonry from "react-masonry-css";
import { useSelector } from "react-redux";
import { ImageType } from "../utils/types";
import ImageBoi from "./Image";

type Props = {
  isProfile?: boolean;
  isYourImages?: boolean;
  isSearch?: boolean;
  isSavedImages?: boolean;
};

const Feed = (props: Props) => {
  const images: ImageType[] = useSelector(
    (state: any) => state.image.imageData
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
          props.isSavedImages
            ? "20px"
            : "100px",
        width: "100%",
      }}
    >
      <Masonry
        breakpointCols={breakPoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image: ImageType, index) => (
          <ImageBoi key={index} image={image} />
        ))}
      </Masonry>
    </div>
  );
};

export default Feed;
