import { HStack, Image, Text, space } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./searchInput";

const NavBar = () => {
  return (
    <HStack px="10px">
      <Image src={logo} boxSize="55px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
