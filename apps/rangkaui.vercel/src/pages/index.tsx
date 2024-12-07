import React, { useState } from 'react';
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
  Modal,
  Tooltip,
} from 'rangkaui-next-dev';

const HomePage = () => {
  const [data, setData] = useState<any[]>([
    { username: 'fatih' },
    { username: 'fatih' },
    { username: 'fatih' },
    { username: 'fatih' },
  ]);
  const [open, setOpen] = useState<boolean>(false);

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

  const handleSubmitData = () => {
    setData(data?.concat([{ username: 'fatih' }]));
  };

  return (
    <Stack>
      <Box c={'white'}>Box</Box>
      <Flex direction="column">
        <Box c={'white'}>Flex</Box>
        <Box c={'white'}>Flex</Box>
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
      <Box>
        <Tooltip content="Tooltip">
          <Text c={'white'}>Text dan Tooltip</Text>
        </Tooltip>
      </Box>
      <Formulir initialValues={{ input: '', select: '', textarea: '' }} onSubmit={handleSubmitData}>
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
              <Divider color="white" />
              <Flex gap={12}>
                <Button>Button</Button>
                <Modal isOpen={open} onClose={() => setOpen(false)} closeOnClickOutside={true}>
                  <Box>Modal</Box>
                </Modal>
                <Tooltip content="awdadada">
                  <Button onClick={() => setOpen(true)}>Modal</Button>
                </Tooltip>
              </Flex>
            </Stack>
          </Form>
        )}
      </Formulir>
      <DataTable headers={headers} data={data} />
    </Stack>
  );
};

export default HomePage;
