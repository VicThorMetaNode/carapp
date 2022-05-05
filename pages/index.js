import { Flex, Spacer, Center, Box, Text, Button } from "@chakra-ui/react";

import FormCustom from "../components/Form";

export default function Home() {
  return (
    <>
      <header>
        <Center>
          <Box>
            <Center>
              <Box>
                <Text className="cara-title">cara.</Text>
                <Text className="cara-subTitle">(DEAR ONE)</Text>
              </Box>
            </Center>

            <Box>
              <Text className="alert">COMING SOON</Text>
            </Box>

            <Flex minWidth="max-content" gap="2">
              <Box>
                <FormCustom />
              </Box>
              <Box>
                <Button variant="outline">SEND</Button>
              </Box>
            </Flex>
          </Box>
        </Center>
      </header>
    </>
  );
}
