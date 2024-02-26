// import React and faker
import { faker } from '@faker-js/faker';
import SectionHeader from "@dashboard/@admin/components/SectionHeader";
import TableContainer from "@dashboard/@admin/components/TableContainer";
import { IoDesktop } from "react-icons/io5"
import { materialCols, materialActions } from '@config/data-control/material';

const fetchData = async () => {

  // generate some dummy data for the table
  const data = [...new Array(45)].map(() => ({
    id: faker.string.uuid(),
    inventoryNumber: faker.number.int(),
    type: faker.commerce.product(),
    supplier: faker.company.name(),
  }));

  return data
}

const page = async ({ searchParams }) => {

  const query = searchParams?.query || '';
  const page = Number(searchParams?.page) || 1;
  const reverse = !!searchParams?.sort
  const data = await fetchData()

  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={'Matériels'}
        icon={<IoDesktop />}
        description={'Bienvenue dans la section de votre matériels'}
      />
      <TableContainer
        tHead={materialCols}
        tBody={reverse ? data.reverse() : data}
        actions={materialActions}
        query={query}
        page={page}
      />
    </section>
  );
}

export default page;
