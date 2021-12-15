import {
  Image,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { makeStorageClient } from '../../common/web3Storage';
import {
  ButtonPrimary,
  ButtonSuccess,
} from '../../styles/ui-components/Chakra-Button';

type AddAvatarProps = {
  src: string;
};

const circularStyles = {
  w: '8rem',
  h: '8rem',
  margin: 'auto',
  mt: '5%',
  borderRadius: '180px',
};

const IPFS_ENDPOINT = 'https://ipfs.io/ipfs';

const AddAvatar = ({ src }: AddAvatarProps) => {
  const [hoverImage, setHoverImage] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [file, setFile] = useState<string>();
  const [tempFile, setTempFile] = useState<File>();
  const web3Storage = makeStorageClient();

  const toggleHover = () => {
    setHoverImage((prev) => !prev);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event;
    if (currentTarget.files) {
      setTempFile(currentTarget.files[0]);
    }
  };

  const submitProfilePicture = async () => {
    if (tempFile) {
      try {
        const cid = await web3Storage.put([tempFile], {
          maxRetries: 3,
        });
        /*
         * TODO:
         * - Add the cid to the database
         */
        setFile(`${IPFS_ENDPOINT}/${cid}/${tempFile.name}`);
        toggleHover();
        onClose();
      } catch (e) {
        console.error('uploading image', e);
      }
    }
  };

  return hoverImage ? (
    <>
      <Center
        {...circularStyles}
        bgImage={file ?? src}
        bgSize="cover"
        bgRepeat="no-repeat"
        opacity={0.5}
        onMouseLeave={toggleHover}
      >
        <ButtonPrimary onClick={onOpen}>edit</ButtonPrimary>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Set new Profile pic</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type="file" onChange={handleImageChange}></Input>
          </ModalBody>
          <ModalFooter>
            <ButtonPrimary onClick={onClose}>Close</ButtonPrimary>
            <ButtonSuccess onClick={submitProfilePicture}>Submit</ButtonSuccess>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  ) : (
    <Image
      {...circularStyles}
      src={file ?? src}
      alt="developer"
      onMouseEnter={toggleHover}
    />
  );
};

export default AddAvatar;
