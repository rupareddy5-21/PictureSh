/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

type Props = {
  src?: string;
};

const Image = (props: Props) => {
  const [imageHovered, setImageHovered] = useState(false);
  return (
    <div
      style={{
        width: "100%",
        borderRadius: "12px",
        cursor: "pointer",
      }}
    >
      <img
        className="imgboi"
        src={
          props.src
            ? props.src
            : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thehistoryhub.com%2Fwp-content%2Fuploads%2F2014%2F08%2FBig-Ben-Night.jpg&f=1&nofb=1"
        }
        alt=""
        style={{
          width: "100%",
          objectFit: "cover",
        }}
        onMouseEnter={() => setImageHovered(true)}
        onMouseLeave={() => setImageHovered(false)}
      />
    </div>
  );
};

export default Image;
