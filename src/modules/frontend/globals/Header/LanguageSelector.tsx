import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

const LanguageSelector: React.FC = () => {
  return (
    <Flex
      alignItems="center"
      gap="8px"
      whiteSpace={{ base: "initial", md: "nowrap" }}
      justifyContent="flex-start"
      margin="auto 0"
    >
      <Flex
        alignItems="center"
        gap="12px"
        justifyContent="flex-start"
        margin="auto 0"
      >
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/120dfd5208213f03a83ef6487f5202d655b61b524ccfb1be154a269d3bc8e291?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185"
          alt="Language Icon"
          objectFit="contain"
          width="16px"
          alignSelf="stretch"
          loading="lazy"
        />
        <Text alignSelf="stretch" margin="auto 0">
          EN
        </Text>
      </Flex>
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e3ca621faa748a797dcb094ed958d81a7f757fb2e5e2e9df69240236e82f37f?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185"
        alt="Dropdown Icon"
        objectFit="contain"
        width="16px"
        alignSelf="stretch"
        loading="lazy"
      />
    </Flex>
  );
};

export default LanguageSelector;