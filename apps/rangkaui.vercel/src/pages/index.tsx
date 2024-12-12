import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import { Box, Button } from 'rangkaui-next-dev';
import React from 'react';

const HoemPage = () => {
  return (
    <Layout>
      <Box>
        <section className="py-[180px] px-[170px] min-h-[643px] bg-[#1f1f1f]">
          <Link href={'/getting-started'}>
            <Button>Getting Started</Button>
          </Link>
        </section>
        <section className="min-h-[643px] bg-[#242424]">
          <div className="py-[100px] px-[170px] text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis mollitia
            consectetur distinctio voluptatibus possimus repudiandae eos dolor sint ex iste labore
            nesciunt, reiciendis aut non unde quasi eveniet veniam ipsa laudantium quo similique
            odit. Inventore eius blanditiis molestiae nihil minus animi repellendus delectus
            incidunt, architecto maiores, consequuntur ratione, illum alias dolorem ut vel saepe
            earum eos quo dolor? Maxime cumque architecto unde! Temporibus placeat officiis facilis,
            doloremque nobis ullam unde eos blanditiis tempore eius voluptas animi ipsam,
            voluptatum, vero quis minima aliquid iusto eum. Perspiciatis alias, accusamus, maiores
            inventore officiis nisi veritatis, commodi et iusto officia unde recusandae voluptatibus
            quae?
          </div>
        </section>
      </Box>
    </Layout>
  );
};

export default HoemPage;
