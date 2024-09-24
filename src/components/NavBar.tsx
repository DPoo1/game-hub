import { HStack, Image, Text, space } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" px="10px">
      <Image src={logo} boxSize="55px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
