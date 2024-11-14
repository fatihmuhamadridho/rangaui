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
  Formulir,
  Form,
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
      <Formulir
        initialValues={{ input: '', select: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <Stack>
              <Select
                data={[{ label: 'test', value: 'test' }]}
                onChange={handleChange}
                name="select"
                value={values.select}
              />
              <TextInput label="input" name="input" onChange={handleChange} value={values.input} />
              <Switch label="switch" checked={true} />
              <Button>Button</Button>
            </Stack>
          </Form>
        )}
      </Formulir>
    </Stack>
  );
};

export default HomePage;
