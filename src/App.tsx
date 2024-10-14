import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/platformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import { GameHeading } from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameQuery, setgameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setgameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={4}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setgameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={6}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack spacing={4} margin={3}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setgameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setgameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
