// import React and faker
import { faker } from '@faker-js/faker';
import SectionHeader from "@dashboard/@admin/components/SectionHeader";
import TableContainer from "@dashboard/@admin/components/TableContainer";
import { IoStorefront } from "react-icons/io5"
import { supplierCols, supplierActions } from '@config/data-control/supplier';

const fetchData = async () => {

  // generate some dummy data for the table
  const data = [...new Array(45)].map(() => ({
    id: faker.string.uuid(),
    name: faker.company.name(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress()
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
        title={'Fournisseurs'}
        icon={<IoStorefront />}
        description={'Bienvenue dans la section de votre fournisseurs'}
      />
      <TableContainer
        tHead={supplierCols}
        tBody={reverse ? data.reverse() : data}
        actions={supplierActions}
        query={query}
        page={page}
      />
    </section>
  );
}

export default page;
