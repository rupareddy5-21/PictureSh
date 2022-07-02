/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Skeleton,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { useRouter } from "next/router";
import { ImageType } from "../utils/types";
import { useSession } from "next-auth/react";
import { saveAs } from "file-saver";
import { GoComment } from "react-icons/go";
import { useDispatch } from "react-redux";
import { likeImageAll, saveImageAll } from "../redux/actions/imageActions";
import {
  likeImageSearch,
  saveImageSearch,
} from "../redux/actions/searchImageActions";
import {
  likeImageCategories,
  saveImageCategories,
} from "../redux/actions/categoryImageAction";
import {
  likeImageSaved,
  saveImageSaved,
} from "../redux/actions/savedImageActions";
import {
  likeImageYour,
  saveImageYour,
} from "../redux/actions/yourImageActions";

type Props = {
  image: ImageType;
  isProfile?: boolean;
  isYourImages?: boolean;
  isSearch?: boolean;
  isSavedImages?: boolean;
  isTagImage?: boolean;
  cookie?: string;
};

const ImageBoi = (props: Props) => {
  const [imageHovered, setImageHovered] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const isLiked =
    //@ts-ignore
    props.image?.likes?.filter((like) => like.userId === session?.user?.id)
      .length > 0;
  const downloadImage = (event: React.MouseEvent) => {
    event.stopPropagation();
    saveAs(props.image?.url, "shit.png");
  };
  const isSaved =
    //@ts-ignore
    props.image?.saves?.filter((save) => save?.userId === session?.user?.id)
      .length > 0;
  const dispatch = useDispatch();
  const likeImageAllBoi = () => {
    //@ts-ignore
    dispatch(likeImageAll(props.image?.id, props.cookie));
  };
  const likeImageSearchBoi = () => {
    //@ts-ignore
    dispatch(likeImageSearch(props.image?.id, props.cookie));
  };
  const likeImageCategoriesBoi = () => {
    //@ts-ignore
    dispatch(likeImageCategories(props.image?.id, props.cookie));
  };
  const likeImageSavedBoi = () => {
    //@ts-ignore
    dispatch(likeImageSaved(props.image?.id, props.cookie));
  };
  const likeImageYourBoi = () => {
    //@ts-ignore
    dispatch(likeImageYour(props.image?.id, props.cookie));
  };
  const saveImageAllBoi = () => {
    //@ts-ignore
    dispatch(saveImageAll(props.image?.id, props.cookie));
  };
  const saveImageSearchBoi = () => {
    //@ts-ignore
    dispatch(saveImageSearch(props.image?.id, props.cookie));
  };
  const saveImageCategoriesBoi = () => {
    //@ts-ignore
    dispatch(saveImageCategories(props.image?.id, props.cookie));
  };
  const saveImageSavedBoi = () => {
    //@ts-ignore
    dispatch(saveImageSaved(props.image?.id, props.cookie));
  };
  const saveImageYourBoi = () => {
    //@ts-ignore
    dispatch(saveImageYour(props.image?.id, props.cookie));
  };
  return (
    <Flex
      width="100%"
      cursor="zoom-in"
      borderRadius="12px"
      position="relative"
      onMouseEnter={() => setImageHovered(true)}
      onMouseLeave={() => setImageHovered(false)}
      onClick={() => {
        router.push(`/image/${props.image?.id}`);
      }}
      boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
    >
      <Image
        className="imgboi"
        src={props.image?.url}
        alt=""
        style={{
          width: "100%",
          borderRadius: "12px",
          objectFit: "cover",
        }}
      />
      {imageHovered ? (
        <Flex
          width="100%"
          height="100%"
          backgroundColor="#000000b7"
          position="absolute"
          top={0}
          borderRadius="12px"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            position="absolute"
            top={2}
            left={0}
            alignItems="center"
            width="100%"
            justifyContent="flex-end"
          >
            <Button
              rounded="full"
              variant="solid"
              colorScheme="blue"
              marginRight="10px"
              onClick={(event: React.MouseEvent) => {
                event.stopPropagation();
                props.isProfile
                  ? router.push(`/image/${props.image?.id}`)
                  : props.isSearch
                  ? saveImageSearchBoi()
                  : props.isTagImage
                  ? saveImageCategoriesBoi()
                  : props.isSavedImages
                  ? saveImageSavedBoi()
                  : props.isYourImages
                  ? saveImageYourBoi()
                  : saveImageAllBoi();
              }}
            >
              {isSaved ? "UnSave" : "Save"}
            </Button>
          </Flex>
          <Flex
            position="absolute"
            bottom={2}
            left={0}
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Flex
              alignItems="center"
              gap="2px"
              marginLeft="4px"
              cursor="pointer"
              onClick={(event: React.MouseEvent) => {
                event.stopPropagation();
                router.push(`/user/${props.image?.authorId}`);
              }}
              width="60%"
              flexWrap="wrap"
            >
              <RiArrowRightUpLine color="white" />
              <Heading color="white" fontSize="md" fontWeight="bold">
                {props.image?.author?.name?.length > 15
                  ? props.image?.author?.name?.slice(0, 14) + "..."
                  : props.image?.author?.name}
              </Heading>
            </Flex>
            <Flex alignItems="center" gap="9px" marginRight="4px" flex={1}>
              <Tooltip label={isLiked ? "Unlike" : "Like"}>
                <IconButton
                  icon={
                    isLiked ? (
                      <IoHeart size={22} />
                    ) : (
                      <IoHeartOutline size={22} />
                    )
                  }
                  aria-label="Like"
                  rounded="full"
                  onClick={(event: React.MouseEvent) => {
                    event.stopPropagation();
                    props.isProfile
                      ? router.push(`/image/${props.image?.id}`)
                      : props.isSearch
                      ? likeImageSearchBoi()
                      : props.isTagImage
                      ? likeImageCategoriesBoi()
                      : props.isSavedImages
                      ? likeImageSavedBoi()
                      : props.isYourImages
                      ? likeImageYourBoi()
                      : likeImageAllBoi();
                  }}
                />
              </Tooltip>
              <Tooltip label={"Comments"}>
                <IconButton
                  icon={<GoComment size={20} />}
                  aria-label="Comments"
                  rounded="full"
                  onClick={(event: React.MouseEvent) => {
                    event.stopPropagation();
                    router.push(`/image/${props.image?.id}`);
                  }}
                />
              </Tooltip>
              <Tooltip label="Download">
                <IconButton
                  icon={<FiDownload size={20} />}
                  aria-label="Download"
                  rounded="full"
                  onClick={downloadImage}
                />
              </Tooltip>
            </Flex>
          </Flex>
        </Flex>
      ) : null}
    </Flex>
  );
};

export default ImageBoi;
