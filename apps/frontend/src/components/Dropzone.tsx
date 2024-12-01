import { useCallback } from "react";
import { Box, Image, VStack } from "@chakra-ui/react";
import { blobToBase64, getDeviceId, resizeImage } from "../util";
import { useWallet } from "@vechain/dapp-kit-react";
import { submitTicket } from "../networking";
import { useDisclosure, useSubmission } from "../hooks";

export const Dropzone = () => {
  const { account } = useWallet();
  const { setIsLoading, setResponse } = useSubmission();
  const { onOpen } = useDisclosure();

  // Handle file upload
  const onFileUpload = useCallback(
    async (files: File[]) => {
      if (files.length > 1 || files.length === 0) {
        alert("Please upload only one file");
        return;
      }

      if (!account) {
        alert("Please connect your wallet");
        return;
      }

      setIsLoading(true);
      onOpen();

      const file = files[0];
      const resizedBlob = await resizeImage(file);
      const base64Image = await blobToBase64(resizedBlob as Blob);

      const deviceID = await getDeviceId();

      try {
        const response = await submitTicket({
          address: account,
          deviceID,
          image: base64Image,
        });

        console.log(response);
        setResponse(response);
      } catch (error) {
        alert("Error submitting ticket");
      } finally {
        setIsLoading(false);
      }
    },
    [account, onOpen, setIsLoading, setResponse]
  );

  // Capture photo using camera
  const handleCapturePhoto = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      const video = document.createElement("video");
      video.srcObject = stream;
      await video.play();

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      context?.drawImage(video, 0, 0, canvas.width, canvas.height);

      stream.getTracks().forEach(track => track.stop());

      canvas.toBlob(blob => {
        if (blob) {
          const file = new File([blob], "photo.jpg", { type: "image/jpeg" });
          onFileUpload([file]); // Send the captured file to the existing upload handler
        }
      }, "image/jpeg");
    } catch (error) {
      console.error("Error capturing photo:", error);
    }
  };

  return (
    <VStack w={"full"} mt={3}>
      {/* Capture Photo with Camera */}
      <Box
        as="button"
        mt={4}
        onClick={handleCapturePhoto}
        _hover={{
          transform: "scale(1.1)", // Add hover effect
          transition: "transform 0.2s",
        }}
      >
        <Image src="Camera.png" alt="Capture Photo" h={100} w={100} />
      </Box>
    </VStack>
  );
};