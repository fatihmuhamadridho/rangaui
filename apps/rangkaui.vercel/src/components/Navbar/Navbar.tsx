import React from 'react';
import { Box, Button, Stack } from 'rangkaui-next-dev';
import { useTheme } from '@/contexts/theme';
import Link from 'next/link';

const Navbar = () => {
  const { color } = useTheme();
  return (
    <Box
      className="fixed mt-14 p-2 min-w-64 max-w-64 h-full overflow-y-auto"
      style={{ color, backgroundColor: '#1f1f1f' }}
    >
      <Stack gap={0}>
        <Link href={'/getting-started'}>
          <Button className="w-full min-h-[48px]" bg={'#228be633'} fz={14}>
            Getting Started
          </Button>
        </Link>
        <Link href={'/about'}>
          <Button className="w-full min-h-[48px]" bg={'#228be633'} fz={14}>
            About Rangkaui
          </Button>
        </Link>
        <Button className="w-full min-h-[48px]" bg={'#228be633'} fz={14}>
          API Overview
        </Button>
        <Button className="w-full min-h-[48px]" bg={'#228be633'} fz={14}>
          Contribute
        </Button>
        <Button className="w-full min-h-[48px]" bg={'#228be633'} fz={14}>
          Colors Generator
        </Button>
        <Button className="w-full min-h-[48px]" bg={'#228be633'} fz={14}>
          Help Center
        </Button>
      </Stack>
    </Box>
  );
};

export default Navbar;
