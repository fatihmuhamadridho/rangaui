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
  DataTable,
  HeadersDataTableProps,
  Divider,
  Space,
  TextArea,
} from 'rangkaui-next';

const HomePage = () => {
  const headers: HeadersDataTableProps[] = [
    { key: 'index', label: 'no' },
    { key: 'username', label: 'username' },
    { key: 'username', label: 'username' },
    { key: 'username', label: 'username' },
    { key: 'username', label: 'username' },
    { key: 'username', label: 'username' },
    { key: 'username', label: 'username' },
    { key: 'username', label: 'username' },
    { key: 'username', label: 'username' },
    { key: 'username', label: 'username' },
    { key: 'username', label: 'username' },
    { key: 'username', label: 'username' },
    { key: 'username', label: 'username' },
    { key: 'username', label: 'username' },
    { key: 'username', label: 'username' },
  ];
  const data = [
    { username: 'fatih' },
    { username: 'fatih' },
    { username: 'fatih' },
    { username: 'fatih' },
  ];

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
        initialValues={{ input: '', select: '', textarea: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <Stack>
              <Select
                data={[{ label: 'test', value: 'test' }]}
                name="select"
                onChange={handleChange}
                value={values.select}
              />
              <TextInput label="input" name="input" onChange={handleChange} value={values.input} />
              <Switch label="switch" checked={true} />
              <Space />
              <TextArea label="textarea" onChange={handleChange} value={values.textarea} />
              <Divider />
              <Button>Button</Button>
            </Stack>
          </Form>
        )}
      </Formulir>
      <DataTable headers={headers} data={data} />
    </Stack>
  );
};

export default HomePage;
