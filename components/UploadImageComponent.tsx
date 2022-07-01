/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  Input,
  Select,
  Text,
  Textarea,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { uploadImage } from "../redux/actions/imageActions";
import { CreateImageType } from "../utils/types";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

type Props = {
  cookie: string;
};

const UploadImageComponent = (props: Props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState<CreateImageType>({
    title: "",
    description: "",
    category: "",
    url: "",
  });
  const router = useRouter();
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      //@ts-ignore
      url: e.target.files[0],
    });
    //@ts-ignore
    const imageObjectUrl = URL.createObjectURL(e.target.files[0]);
    setImageObjectUrl(imageObjectUrl);
  };
  const uploadImageCloudinary = async () => {
    const { signature, timestamp } = await getSignature();
    const formData = new FormData();
    formData.append("file", data.url);
    formData.append(
      "api_key",
      process.env.NEXT_PUBLIC_CLOUDINARY_APIKEY as string
    );
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);
    const databoi = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const json = await databoi.json();
    return json.secure_url;
  };
  const [loading, setLoading] = useState(false);
  const uploadImageBoi = async () => {
    setLoading(true);
    const url = await uploadImageCloudinary();
    const databoi = {
      title: data.title,
      description: data.description,
      category: data.category,
      url: url,
    };
    //@ts-ignore
    dispatch(uploadImage(databoi, props.cookie, router, setLoading));
  };
  const { colorMode } = useColorMode();
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageObjectUrl, setImageObjectUrl] = useState("");
  return (
    <Flex width="100%" justifyContent="center">
      <Flex
        marginBottom="20px"
        width="90%"
        marginTop="130px"
        backgroundColor={colorMode === "dark" ? "#1a1a1a" : "#ffffff"}
        borderRadius="20px"
        padding="20px"
        gap="2rem"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      >
        <Flex
          width="40%"
          backgroundColor={colorMode === "dark" ? "#1a1a1a" : "#ffffff"}
          borderRadius="20px"
          padding="10px"
          cursor="pointer"
        >
          {imageObjectUrl !== "" ? (
            <img
              src={imageObjectUrl}
              alt=""
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "20px",
                height: "100%",
              }}
            />
          ) : (
            <Flex
              border="1px dotted gray"
              width="100%"
              borderRadius="20px"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              onClick={() => {
                inputRef.current?.click();
              }}
            >
              <input
                type="file"
                style={{
                  display: "none",
                }}
                ref={inputRef}
                accept="image/*"
                onChange={handleImageChange}
              />
              <BsFillArrowUpCircleFill size={24} />
              <Text fontWeight="semibold" fontSize="sm" marginTop="20px">
                Click to upload image
              </Text>
              <Text fontWeight="semibold" fontSize="sm" marginTop="5px">
                Image is required
              </Text>
            </Flex>
          )}
        </Flex>
        <Flex flex={1} flexDirection="column" gap="2rem">
          <FormControl>
            <Input
              variant="flushed"
              placeholder="Title"
              fontSize="25px"
              size="lg"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, title: e.target.value });
              }}
            />
            {data?.title?.length >= 5 && data?.title?.length <= 50 ? null : (
              <FormHelperText>
                Title should be between 5 to 50 characters
              </FormHelperText>
            )}
          </FormControl>
          <FormControl>
            <Textarea
              placeholder="Description"
              size="lg"
              height="130px"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setData({ ...data, description: e.target.value });
              }}
            />
            {data?.description?.length <= 254 ? null : (
              <FormHelperText>
                Description should be less than 255 characters
              </FormHelperText>
            )}
          </FormControl>
          <FormControl>
            <Select
              placeholder="Select category"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setData({ ...data, category: e.target.value });
              }}
            >
              <option value="programming">Programming</option>
              <option value="music">Music</option>
              <option value="gaming">Gaming</option>
              <option value="cats">Cats</option>
              <option value="coffee">Coffee</option>
              <option value="idk">Idk</option>
              <option value="shit">Shit</option>
              <option value="other">Other</option>
            </Select>
            {data?.category !== "" ? null : (
              <FormHelperText>Select atleast one category</FormHelperText>
            )}
          </FormControl>
          {data?.title?.length >= 5 &&
          data?.title?.length <= 50 &&
          data?.description?.length <= 254 &&
          data?.category !== "" &&
          data?.url !== "" ? (
            <Button
              width="100%"
              colorScheme="blue"
              rounded="full"
              onClick={uploadImageBoi}
              isLoading={loading}
              loadingText="Uploading..."
            >
              Upload
            </Button>
          ) : (
            <Tooltip
              label="Complete all the validation before uploading image"
              shouldWrapChildren
            >
              <Button
                colorScheme="blue"
                rounded="full"
                disabled={true}
                width="100%"
              >
                Upload
              </Button>
            </Tooltip>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UploadImageComponent;

async function getSignature() {
  const response = await fetch("/api/sign");
  const data = await response.json();
  const { signature, timestamp } = data;
  return { signature, timestamp };
}
