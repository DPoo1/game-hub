import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../Services/image-url";
interface props {
  game: Game;
}
const Gamecards = ({ game }: props) => {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={2}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize={"medium"}>{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default Gamecards;
