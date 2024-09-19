import React from "react";
import { Text } from "@chakra-ui/react";

interface NavItemProps {
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ label }) => {
  return (
    <Text as="nav" alignSelf="stretch" margin="auto 0">
      {label}
    </Text>
  );
};

export default NavItem;