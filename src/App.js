import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Stack,
  useColorMode
} from "@chakra-ui/react";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const onClickPlus = () => {
    return setCount(count + 1);
  };

  const onClickMinus = () => {
    return setCount(count - 1);
  };

  const onClickReset = () => {
    return setCount(0);
  };

  return (
    <Flex>
      <Stack>
        <IconButton
          w="50%"
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <Flex>
          <Box
            ml={10}
            mt={50}
            w="100%"
            bgGradient="linear(to-r, cyan.400,blue.500,purple.600)"
            bgClip="text"
            textAlign="center"
          >
            <Heading size="2xl" mb={5}>
              {count}
            </Heading>
            <Button colorScheme="blue" size="lg" onClick={onClickPlus}>
              Plus
            </Button>
            <Button colorScheme="red" size="lg" ml={5} onClick={onClickMinus}>
              Minus
            </Button>
            <Button colorScheme="green" size="lg" ml={5} onClick={onClickReset}>
              Reset
            </Button>
          </Box>
        </Flex>
      </Stack>
    </Flex>
  );
}
