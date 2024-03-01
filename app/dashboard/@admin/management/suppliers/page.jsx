// import React and faker
import { faker } from '@faker-js/faker';
import SectionHeader from "@dashboard/@admin/components/SectionHeader";
import TableContainer from "@dashboard/@admin/components/TableContainer";
import {supplierCols, supplierActions, suppliersWrapper} from '@config/data-control/supplier';
import {getSuppliers} from "@lib/fetchData";
import {singleLinks} from "@config/admin/singleLinks";


const page = async ({ searchParams }) => {

  const query = searchParams?.query || '';
  const page = Number(searchParams?.page) || 1;
  const reverse = !!searchParams?.sort
  const data = await suppliersWrapper(await getSuppliers())
  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={'Fournisseurs'}
        icon={singleLinks.suppliers.icon}
        description={'Bienvenue dans la section de votre fournisseurs'}
      />
      <TableContainer
        tHead={supplierCols}
        tBody={reverse ? data?.reverse() : data}
        actions={supplierActions}
        query={query}
        page={page}
      />
    </section>
  );
}

export default page;
