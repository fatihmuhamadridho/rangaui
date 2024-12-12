import React from 'react';
import { Box, Button, Stack } from 'rangkaui-next-dev';
import { useTheme } from '@/contexts/theme';

const Navbar = () => {
  const { color } = useTheme();
  return (
    <Box
      className="fixed mt-14 p-2 min-w-64 max-w-64 h-full overflow-y-auto"
      style={{ color, backgroundColor: '#1f1f1f' }}
    >
      <Stack gap={0}>
        <Button className="min-h-[48px]" w={'100%%'} bg={'#228be633'} fz={14}>
          Getting Started
        </Button>
        <Button className="min-h-[48px]" w={'100%%'} bg={'#228be633'} fz={14}>
          About Rangkaui
        </Button>
        <Button className="min-h-[48px]" w={'100%%'} bg={'#228be633'} fz={14}>
          API Overview
        </Button>
        <Button className="min-h-[48px]" w={'100%%'} bg={'#228be633'} fz={14}>
          Contribute
        </Button>
        <Button className="min-h-[48px]" w={'100%%'} bg={'#228be633'} fz={14}>
          Colors Generator
        </Button>
        <Button className="min-h-[48px]" w={'100%%'} bg={'#228be633'} fz={14}>
          Help Center
        </Button>
        <Button className="min-h-[48px]" w={'100%%'} bg={'#228be633'} fz={14}>
          Rangkaui
        </Button>
      </Stack>
    </Box>
  );
};

export default Navbar;
