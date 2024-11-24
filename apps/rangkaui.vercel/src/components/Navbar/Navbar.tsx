import React from 'react';
import { Box } from 'rangkaui-next-dev';
import { useTheme } from '@/contexts/theme';

const Navbar = () => {
  const { color, backgroundColor } = useTheme();
  return (
    <Box
      className="fixed mt-14 p-2 min-w-64 max-w-64 h-full border-r border-black overflow-y-auto"
      style={{ color, backgroundColor, borderColor: 'white' }}
    >
      Sidebar
    </Box>
  );
};

export default Navbar;
