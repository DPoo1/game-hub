import {
  Button,
  HStack,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../Services/image-url";

interface Props {
  onSelectGenre: (Genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, errors } = useGenre();
  if (errors) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginY={3}>
        Genre
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} padding="4px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
