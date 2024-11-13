import React from 'react';
import {
  Accordion,
  Box,
  Button,
  Flex,
  Select,
  Stack,
  Text,
  TextInput,
  Switch,
} from 'rangkaui-next';

const HomePage = () => {
  return (
    <Stack>
      <Box>awdaad</Box>
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
      <Select data={[{ label: 'test', value: 'test' }]} />
      <TextInput label="input" />
      <Button>Button</Button>
      <Switch label="switch" />
    </Stack>
  );
};

export default HomePage;
