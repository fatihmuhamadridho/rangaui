import React, { useEffect, useState } from 'react';
import { MDXProvider } from '@mdx-js/react';

interface MdxProviderProps {
  children: React.ReactNode;
}

const MdxProvider = ({ children }: MdxProviderProps) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    if (!isClient) setIsClient(true);
  }, []);

  return (
    <MDXProvider
      components={{
        h2: ({ children }) =>
          isClient ? <h2 style={{ color: 'red' }}>{children}</h2> : <h2>{children}</h2>,
      }}
    >
      {children}
    </MDXProvider>
  );
};

export default MdxProvider;
