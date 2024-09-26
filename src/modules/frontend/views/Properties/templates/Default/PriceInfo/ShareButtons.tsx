import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { useContextProvider } from "../../../providers";

const ShareButtons: React.FC = () => {
  const { getLocale } = useContextProvider()

  return (
    <Flex gap="20px" fontWeight="400" textAlign="right" justifyContent="space-between">
      <Text margin="auto 0">{getLocale("Share this")}:</Text>
      
    </Flex>
  );
};

export default ShareButtons;