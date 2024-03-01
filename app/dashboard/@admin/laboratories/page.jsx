// import React and faker
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import TableContainer from "../components/TableContainer";
import {laboratoryCols, laboratoryActions, laboratoriesWrapper} from '@config/data-control/laboratory';
import { singleLinks } from '@config/admin/singleLinks';
import { getLaboratories } from "@lib/fetchData"


const page = async ({searchParams}) => {

  const query = searchParams?.query || '';
  const page = Number(searchParams?.page) || 1;
  const reverse = !!searchParams?.sort
  const data = await laboratoriesWrapper(await getLaboratories())
  
  // return the page component
  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={'Laboratoires'}
        icon={singleLinks.laboratories.icon}
        description={'Bienvenue dans la section de votre laboratoires'}
      />
      <TableContainer
        tHead={laboratoryCols}
        tBody={reverse? data.reverse() : data}
        actions={laboratoryActions}
        query={query}
        page={page}
      />
    </section>
  );
}

// export the page component
export default page;
