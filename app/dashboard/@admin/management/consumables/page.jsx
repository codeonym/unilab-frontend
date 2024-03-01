// import React and faker
import { faker } from '@faker-js/faker';
import SectionHeader from "@dashboard/@admin/components/SectionHeader";
import TableContainer from "@dashboard/@admin/components/TableContainer";
import {singleLinks} from "@config/admin/singleLinks";
import {consumableCols, consumableActions, consumablesWrapper} from '@config/data-control/consumable';
import { getConsumables} from "@lib/fetchData";


const page = async ({ searchParams }) => {

  const query = searchParams?.query || '';
  const page = Number(searchParams?.page) || 1;
  const reverse = !!searchParams?.sort
  const data = await consumablesWrapper(await getConsumables())

  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={'Consommables'}
        icon={singleLinks.consumables.icon}
        description={'Bienvenue dans la section de votre consommables'}
      />
      <TableContainer
        tHead={consumableCols}
        tBody={reverse ? data?.reverse() : data}
        actions={consumableActions}
        query={query}
        page={page}
      />
    </section>
  );
}

export default page;
