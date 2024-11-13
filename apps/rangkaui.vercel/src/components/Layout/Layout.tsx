import React, { useEffect, useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Box } from 'rangkaui-next';

interface MdxProviderProps {
  children: React.ReactNode;
}

const MdxProvider = ({ children }: MdxProviderProps) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    if (!isClient) setIsClient(true);
  }, [isClient]);

  if (!isClient) return null;

  return (
    <Box className="min-h-screen h-full flex flex-col">
      <Box className="fixed p-2 w-full h-14 bg-white border-b border-black z-10">Navbar</Box>
      <Box className="fixed mt-14 p-2 min-w-64 max-w-64 h-full bg-white border-r border-black overflow-y-auto">
        Sidebar
      </Box>
      <Box className="pt-[calc(56px+8px)] pl-[calc(256px+8px)] p-2 flex-grow h-full overflow-y-auto">
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
