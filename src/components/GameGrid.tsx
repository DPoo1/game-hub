import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import Gamecards from "./Gamecards";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={8}
        padding="10px"
      >
        {games.map((game) => (
          <Gamecards key={game.id} game={game}></Gamecards>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
