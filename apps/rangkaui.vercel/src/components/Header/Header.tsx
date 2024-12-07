import React from 'react';
import { Box } from 'rangkaui-next-dev';
import { useTheme } from '@/contexts/theme';

const Header = () => {
  const { backgroundColor, color } = useTheme();
  return (
    <Box
      className="fixed p-2 w-full h-14 border-b border-black z-10"
      style={{ backgroundColor: backgroundColor, color: color, borderColor: 'white' }}
    >
      Header
    </Box>
  );
};

export default Header;
