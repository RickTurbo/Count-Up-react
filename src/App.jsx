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
import { AlertButton } from "./components/atoms/buttons/Alert";
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
    <Stack>
      <Flex justifyContent="center">
        <Box p={8} border={4}>
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
              <Stack>
                <Flex>
                  <Box>
                    <Button colorScheme="blue" size="lg" onClick={onClickPlus}>
                      Plus
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      colorScheme="red"
                      size="lg"
                      ml={5}
                      onClick={onClickMinus}
                    >
                      Minus
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      colorScheme="green"
                      size="lg"
                      ml={5}
                      onClick={onClickReset}
                    >
                      Reset
                    </Button>
                  </Box>

                  <Box ml={5}>
                    <AlertButton />
                  </Box>
                </Flex>
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Stack>
  );
}
