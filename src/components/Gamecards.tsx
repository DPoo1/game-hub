import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
interface props {
  game: Game;
}
const Gamecards = ({ game }: props) => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image}></Image>
        <CardBody>
          <Heading fontSize={"medium"}>{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default Gamecards;
