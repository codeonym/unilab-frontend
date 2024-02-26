// import React and faker
import { faker } from '@faker-js/faker';
import SectionHeader from "@dashboard/@admin/components/SectionHeader";
import TableContainer from "@dashboard/@admin/components/TableContainer";
import { PiToolboxFill } from "react-icons/pi"
import { consumableCols, consumableActions } from '@config/data-control/consumable';

const fetchData = async () => {

  // generate some dummy data for the table
  const data = [...new Array(45)].map(() => ({
    id: faker.string.uuid(),
    type: faker.commerce.product(),
    quantity: faker.number.int({min:1, max:400}),
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
        title={'Consommables'}
        icon={<PiToolboxFill />}
        description={'Bienvenue dans la section de votre consommables'}
      />
      <TableContainer
        tHead={consumableCols}
        tBody={reverse ? data.reverse() : data}
        actions={consumableActions}
        query={query}
        page={page}
      />
    </section>
  );
}

export default page;
