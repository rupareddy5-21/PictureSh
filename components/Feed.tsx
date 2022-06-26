import React from "react";
import Masonry from "react-masonry-css";
import ImageBoi from "./Image";

type Props = {
  isProfile?: boolean;
};

const Feed = (props: Props) => {
  const breakPoints = {
    default: 4,
    1200: 3,
    1000: 2,
    700: 1,
  };
  return (
    <div
      style={{
        marginTop: props.isProfile ? "20px" : "100px",
        width: "100%",
      }}
    >
      <Masonry
        breakpointCols={breakPoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <ImageBoi src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.guim.co.uk%2Fimg%2Fmedia%2F763573fcc896f41309f7debe3db8ca43894b0ccb%2F1899_0_2613_1568%2Fmaster%2F2613.jpg%3Fwidth%3D445%26quality%3D45%26auto%3Dformat%26fit%3Dmax%26dpr%3D2%26s%3D33b9437f5164c2a1732a5527b7778247&f=1&nofb=1" />
        <ImageBoi src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.guim.co.uk%2Fimg%2Fmedia%2F763573fcc896f41309f7debe3db8ca43894b0ccb%2F1899_0_2613_1568%2Fmaster%2F2613.jpg%3Fwidth%3D445%26quality%3D45%26auto%3Dformat%26fit%3Dmax%26dpr%3D2%26s%3D33b9437f5164c2a1732a5527b7778247&f=1&nofb=1" />
        <ImageBoi src="https://cdn.pixabay.com/photo/2021/05/05/00/10/flowers-6229866_960_720.jpg" />
        <ImageBoi />
        <ImageBoi />
        <ImageBoi />
        <ImageBoi />
        <ImageBoi src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2018%2F12%2FSow-Pig-Best-Wallpaper.jpg&f=1&nofb=1" />
      </Masonry>
    </div>
  );
};

export default Feed;
