import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import Gamecards from "./Gamecards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const Skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={8}
        padding="10px"
      >
        {isLoading &&
          Skeleton.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <Gamecards key={game.id} game={game}></Gamecards>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
