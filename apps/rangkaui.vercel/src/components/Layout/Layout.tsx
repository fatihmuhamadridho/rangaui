import React, { useEffect, useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Box } from 'rangkaui-next-dev';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { useTheme } from '@/contexts/theme';

interface MdxProviderProps {
  children: React.ReactNode;
}

const MdxProvider = ({ children }: MdxProviderProps) => {
  const { backgroundColor } = useTheme();
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    if (!isClient) setIsClient(true);
  }, [isClient]);

  if (!isClient) return null;

  return (
    <Box className="min-h-screen h-full flex flex-col">
      <Header />
      <Navbar />
      <Box
        className="pt-[calc(56px+32px)] pl-[calc(256px+64px)] pb-8 px-[64px] flex-grow h-full overflow-y-auto"
        style={{ backgroundColor }}
      >
        <MDXProvider
          components={{
            h2: ({ children }) =>
              isClient ? <h2 style={{ color: 'red' }}>{children}</h2> : <h2>{children}</h2>,
          }}
        >
          {children}
        </MDXProvider>
      </Box>
    </Box>
  );
};

export default MdxProvider;
