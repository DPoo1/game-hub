import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      colorScheme={color}
      fontSize="14px"
      borderRadius="4px"
      paddingX="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
