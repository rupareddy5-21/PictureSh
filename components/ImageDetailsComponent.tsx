/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Avatar,
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { FiShare, FiMoreHorizontal, FiDownload } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";

const ImageDetailsComponent = () => {
  return (
    <Flex width="100%" justifyContent="center">
      <Flex width="94%" marginTop="130px" flexDirection="column" gap="2rem">
        <Flex
          padding="20px"
          gap="2rem"
          backgroundColor="#1a1a1a"
          borderRadius="20px"
        >
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.guim.co.uk%2Fimg%2Fmedia%2F763573fcc896f41309f7debe3db8ca43894b0ccb%2F1899_0_2613_1568%2Fmaster%2F2613.jpg%3Fwidth%3D445%26quality%3D45%26auto%3Dformat%26fit%3Dmax%26dpr%3D2%26s%3D33b9437f5164c2a1732a5527b7778247&f=1&nofb=1"
            alt=""
            style={{
              width: "400px",
              borderRadius: "12px",
              objectFit: "cover",
              height: "100%",
            }}
          />
          <Flex
            flex={1}
            borderRadius="20px"
            justifyContent="flex-start"
            alignItems="flex-start"
            flexDirection="column"
            gap="1.4rem"
          >
            <Flex
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Flex alignItems="center" gap="2rem">
                <IconButton
                  icon={<IoHeartOutline size={22} />}
                  aria-label="Like"
                  rounded="full"
                />
                <IconButton
                  icon={<FiDownload size={20} />}
                  aria-label="Download"
                  rounded="full"
                />
                <IconButton
                  icon={<FiShare size={20} />}
                  aria-label="Share"
                  rounded="full"
                />
                <IconButton
                  icon={<FiMoreHorizontal size={20} />}
                  aria-label="More"
                  rounded="full"
                />
              </Flex>
              <Button rounded="full" variant="solid" colorScheme="blue">
                Save
              </Button>
            </Flex>
            <Heading fontSize="25px">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              perferendis itaque harum iste sequi voluptas asperiores
            </Heading>
            <Text fontSize="16px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odit
              sed culpa expedita, ipsum quo unde voluptates atque soluta ipsa
              vel dicta laborum rem possimus hic? Dolorum, ut dolore! Cum?Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Veniam suscipit
              obcaecati facere repellendus, hic ipsum? Omnis facilis animi
              suscipit quaerat aut, ab rerum magni deserunt cumque incidunt,
              eligendi, aspernatur repudiandae?
            </Text>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Flex alignItems="center" gap="9px">
                <Avatar name="sdfsf" cursor="pointer" />
                <Flex flexDirection="column" gap="2px">
                  <Heading fontSize="20px">Idiotboi</Heading>
                  <Text fontSize="12px" fontWeight="normal">
                    28 followers
                  </Text>
                </Flex>
              </Flex>
              <Button rounded="full " colorScheme="blue">
                Follow
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          padding="20px"
          gap="2rem"
          borderRadius="20px"
          flexDirection="column"
          width="100%"
        >
          <Heading fontSize="22px">20 Comments</Heading>
          <Flex width="100%" alignItems="center" gap="1rem">
            <Avatar name="fdsafds" />
            <Input
              variant="outline"
              placeholder="Add a comment"
              rounded="full"
              size="lg"
            />
          </Flex>
          <Flex flexDirection="column" width="100%" gap="2rem">
            <Flex width="100%" alignItems="start" gap="12px">
              <Avatar name="sdfsdf" cursor="pointer" />
              <Flex flexDirection="column" alignItems="start" gap="6px">
                <Flex alignItems="center" gap="10px">
                  <Heading
                    fontSize="17px"
                    fontWeight="semibold"
                    _hover={{
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Idiotboi
                  </Heading>
                  <Heading fontSize="15px" color="gray.600" fontWeight="medium">
                    20 minutes ago
                  </Heading>
                </Flex>
                <Text fontSize="15px" color="gray.600" lineHeight="20px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis accusantium neque unde distinctio commodi a, rem
                  repellendus deserunt explicabo in fugiat corporis natus optio
                  rerum quaerat quod? Sequi, culpa iste.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ImageDetailsComponent;
