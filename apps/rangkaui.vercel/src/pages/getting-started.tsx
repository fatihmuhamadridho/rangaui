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
  Slider,
  Carousel,
  Center,
  Radio,
  Checkbox,
  Chip,
  Grid,
  Group,
  Rating,
  PasswordInput,
  DateInput,
  PinInput,
} from 'rangkaui-next-dev';
import MdxProvider from '@/components/MdxProvider/MdxProvider';

const GettingStartedPage = () => {
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

  const slides = [
    'https://via.placeholder.com/600x300?text=Slide+1',
    'https://via.placeholder.com/600x300?text=Slide+2',
    'https://via.placeholder.com/600x300?text=Slide+3',
  ];

  const handleSubmitData = () => {
    setData(data?.concat([{ username: 'fatih' }]));
  };

  return (
    <MdxProvider>
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
        <Formulir
          initialValues={{ input: '', select: '', textarea: '' }}
          onSubmit={handleSubmitData}
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
                <TextInput
                  label="input"
                  name="input"
                  onChange={handleChange}
                  value={values.input}
                />
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
        <Slider steps={[20, 50, 100]} />
        <Carousel slides={slides}></Carousel>
        <Box w={'50%'} bg={'white'}>
          <Center>Ini Center</Center>
          <Box>
            <Radio label="radio" name="radio" value={'radio'} onChange={() => {}} checked></Radio>
            <Checkbox label="checkbox" onChange={() => {}} checked />
            <Grid columns={3} gap="20px" p="16px" bg="#f9f9f9">
              <Chip label="Grid and Chip"></Chip>
              <Chip label="Grid and Chip"></Chip>
              <Chip label="Grid and Chip"></Chip>
              <Chip label="Grid and Chip"></Chip>
              <Chip label="Grid and Chip"></Chip>
              <Chip label="Grid and Chip"></Chip>
            </Grid>
            <Group>
              <Chip label="Group and Chip"></Chip>
              <Chip label="Group and Chip"></Chip>
              <Chip label="Group and Chip"></Chip>
              <Chip label="Group and Chip"></Chip>
            </Group>
            <Rating value={5} readOnly />
          </Box>
        </Box>
        {/* <Menu items={menuItems} /> */}
        <PasswordInput value="test" />
        <DateInput />
        <PinInput />
      </Stack>
    </MdxProvider>
  );
};

export default GettingStartedPage;
