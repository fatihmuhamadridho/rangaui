import { useTheme } from '@/contexts/theme';
import { Box } from 'rangkaui-next-dev';
import React from 'react';
import Header from '../Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { backgroundColor } = useTheme();
  const { children } = props;
  return (
    <Box className="min-h-screen h-full flex flex-col">
      <Header />
      <Box className="pt-[56px] flex-grow h-full overflow-y-auto" style={{ backgroundColor }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
