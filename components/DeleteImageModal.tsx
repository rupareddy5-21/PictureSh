import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteImage } from "../redux/actions/imageActions";
import { useRouter } from "next/router";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  cookie: string;
  id: number;
};

const DeleteImageModal = (props: Props) => {
  const cancelRef = React.useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const imageDeleteBoi = () => {
    //@ts-ignore
    dispatch(deleteImage(props.id, router, props.cookie));
  };
  const { colorMode } = useColorMode();
  return (
    <AlertDialog
      isOpen={props.isOpen}
      onClose={() => {}}
      leastDestructiveRef={cancelRef}
      size="lg"
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          backgroundColor={colorMode === "light" ? "#FFFFFF" : "#1a1a1a"}
        >
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Image
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You cant undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={props.onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={imageDeleteBoi} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default DeleteImageModal;
