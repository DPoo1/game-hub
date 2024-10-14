import { HStack, Image, Text, space } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack px="10px">
      <Image src={logo} boxSize="55px" />
      <SearchInput onSearch={(searchText) => onSearch(searchText)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
