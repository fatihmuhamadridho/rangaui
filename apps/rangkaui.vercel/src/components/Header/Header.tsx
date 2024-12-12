import React from 'react';
import { Flex, Text, TextInput } from 'rangkaui-next-dev';
import { useTheme } from '@/contexts/theme';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const { backgroundColor, color } = useTheme();
  return (
    <Flex
      className="fixed px-4 w-full h-full max-h-14 z-20 border-b border-[#1f1f1f]"
      style={{ backgroundColor: backgroundColor, color: color }}
      items="center"
      justify="space-between"
    >
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
      <Flex items="center">
        <TextInput />
      </Flex>
    </Flex>
  );
};

export default Header;
