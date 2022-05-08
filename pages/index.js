import {
  Flex,
  Spacer,
  HStack,
  Center,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";

import FormCustom from "../components/Form";

export default function Home() {
  return (
    <>
      <header>
        <Center>
          <Box mt={[50, 60, 65, 70]} width="full">
            <Center>
              <Box pt={[20, 15, 15, 15]}>
                <Text className="cara-title">cara.</Text>
                <Text mt={1} mb={7} className="cara-subTitle">
                  (DEAR ONE)
                </Text>
              </Box>
            </Center>

            <Center>
              <Box mt={7}>
                <Text mt={7} className="alert">
                  COMING SOON
                </Text>
              </Box>
            </Center>

            <Center>
              <Box mt={7}>
                <HStack spacing="1rem">
                  <Box w={[200, 300, 400]} pl={1}>
                    <FormCustom />
                  </Box>
                  <Box>
                    <Button
                      bg="#e7af5d"
                      borderRadius="0px"
                      border="0.7px"
                      height="30px"
                      className="btn-submit"
                    >
                      SEND
                    </Button>
                  </Box>
                </HStack>
              </Box>
            </Center>
          </Box>
        </Center>
      </header>
    </>
  );
}
