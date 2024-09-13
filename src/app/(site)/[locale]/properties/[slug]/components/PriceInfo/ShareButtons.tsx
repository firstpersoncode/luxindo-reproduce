import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

const ShareButtons: React.FC = () => {
  return (
    <Flex gap="20px" fontWeight="400" textAlign="right" justifyContent="space-between">
      <Text margin="auto 0">Share this:</Text>
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e31e710f3d2ca512c521337e53ed9e9dd77de6b3def6c1a8e9e6b9b67bc814d2?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185"
        alt=""
        objectFit="contain"
        objectPosition="center"
        width="12px"
        height="32px"
      />
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/37197d6a7b1aea90064d508941d20784077dd8e58b85aeb03db664fd08992c15?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185"
        alt=""
        objectFit="contain"
        objectPosition="center"
        width="18px"
        height="32px"
      />
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/927bf52c413b854ec1989df0d21d590043e555ec1cf6147f44e226511beb0534?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185"
        alt=""
        objectFit="contain"
        objectPosition="center"
        width="26px"
        height="32px"
      />
    </Flex>
  );
};

export default ShareButtons;