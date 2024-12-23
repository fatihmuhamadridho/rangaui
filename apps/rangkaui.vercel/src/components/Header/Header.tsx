import React from 'react';
import { Button, Flex, Menu, Text, TextInput } from 'rangkaui-next-dev';
import { useTheme } from '@/contexts/theme';
import Image from 'next/image';
import Link from 'next/link';
import { IconBrandGithub, IconChevronDown } from '@tabler/icons-react';

interface HeaderProps {
  hideVersionMenu?: boolean;
}

const Header = (props: HeaderProps) => {
  const { hideVersionMenu = false } = props;
  const { backgroundColor, color } = useTheme();
  return (
    <Flex
      className="fixed px-4 w-full h-full max-h-14 z-20 border-b border-[#1f1f1f]"
      style={{ backgroundColor: backgroundColor, color: color }}
      items="center"
      justify="space-between"
    >
      <Flex items="center" gap={16}>
        <Link href={'/'}>
          <Flex className="cursor-pointer" gap={6} items="center">
            <Image
              className="w-[30px] h-[30px]"
              src={'/favicon/android-chrome-192x192.png'}
              alt="logo"
              width={192}
              height={192}
            />
            <Text fz={20} fw={700}>
              Rangkaui
            </Text>
          </Flex>
        </Link>
        {!hideVersionMenu && (
          <Menu>
            <Menu.Target>
              <Flex className="rounded-xl" py={4} px={12} bg={'#3b3b3b'} items="center" gap={4}>
                <Text fz={12} fw={700}>
                  0.0.42
                </Text>
                <IconChevronDown size={12} />
              </Flex>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>0.0.42</Menu.Item>
              <Menu.Item>0.0.2</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        )}
      </Flex>
      <Flex items="center" gap={10}>
        <TextInput />
        <Link href={'https://github.com/fatihmuhamadridho/rangkaui'} target="__blank">
          <Button>
            <IconBrandGithub color="black" />
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
