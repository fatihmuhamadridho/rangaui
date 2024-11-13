import React, { useEffect, useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Box, Flex } from 'rangkaui-next';

interface MdxProviderProps {
  children: React.ReactNode;
}

const MdxProvider = ({ children }: MdxProviderProps) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    if (!isClient) setIsClient(true);
  }, [isClient]);

  return (
    <Box className="min-h-screen h-full flex flex-col">
      <Box className="h-14 border border-black">Navbar</Box>
      <Flex className="flex-grow" style={{ height: 'calc(100vh - 56px)' }}>
        <Box className="p-2 min-w-64 max-w-64 h-full border border-black overflow-y-auto">
          Sidebar
        </Box>
        <Box className="p-2 flex-grow h-full overflow-y-auto">
          <MDXProvider
            components={{
              h2: ({ children }) =>
                isClient ? <h2 style={{ color: 'red' }}>{children}</h2> : <h2>{children}</h2>,
            }}
          >
            {children}
          </MDXProvider>
        </Box>
      </Flex>
    </Box>
  );
};

export default MdxProvider;
