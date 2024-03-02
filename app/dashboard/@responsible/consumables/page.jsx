// import React and faker
import React from 'react';
import { faker } from '@faker-js/faker';
import SectionHeader from '../components/SectionHeader';
import TableContainer from "../components/TableContainer";
import { PiToolboxFill } from "react-icons/pi"
import { consumableCols, consumableActions } from '@config/data-control/labConsumable';

const fetchData = async () => {
  // generate some dummy data for the table
  const data = [...new Array(45)].map(() => ({
    id: faker.string.uuid(),
    type: faker.commerce.productName(),
    quantity: faker.number.int({min:10, max:1000}),
    supplier: faker.person.fullName(),
    assignDate: "2002-06-18"
  }));

  return data
}

const page = async ({searchParams}) => {

  const query = searchParams?.query || '';
  const page = Number(searchParams?.page) || 1;
  const reverse = !!searchParams?.sort
  const data = await fetchData()
  
  // return the page component
  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={'Consommables'}
        icon={<PiToolboxFill />}
        description={'Bienvenue dans la section des Consommables de votre laboratoire'}
      />
      <TableContainer
        tHead={consumableCols}
        tBody={reverse? data.reverse() : data}
        actions={consumableActions}
        query={query}
        page={page}
      />
    </section>
  );
}

// export the page component
export default page;
