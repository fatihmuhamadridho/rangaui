import React from 'react';
import { Accordion, Box, Button, Flex, Text, TextInput } from 'rangkaui-next';

const HomePage = () => {
  return (
    <div>
      <Box p={12} style={{ background: 'black', color: 'white' }}>
        awdaad
      </Box>
      <Flex direction="column">
        <Box>adawda</Box>
        <Box>awdada</Box>
      </Flex>
      <Accordion>
        <Accordion.Item value="test1">
          <Accordion.Control>awdada</Accordion.Control>
          <Accordion.Panel>awdaa</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="test2">
          <Accordion.Control>awdada</Accordion.Control>
          <Accordion.Panel>awdaa</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <Text>awdada</Text>
      <TextInput label="input" />
      <Button>Button</Button>
    </div>
  );
};

export default HomePage;
