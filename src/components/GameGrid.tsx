import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import Gamecards from "./Gamecards";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={8}
        padding="10px"
      >
        {isLoading &&
          Skeleton.map((skeleton) => <GameCardSkeleton></GameCardSkeleton>)}
        {games.map((game) => (
          <Gamecards key={game.id} game={game}></Gamecards>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
