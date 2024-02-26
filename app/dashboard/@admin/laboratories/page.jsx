// import React and faker
import React from 'react';
import { faker } from '@faker-js/faker';
import SectionHeader from '../components/SectionHeader';
import TableContainer from "../components/TableContainer";
import { MdBusiness } from "react-icons/md"
import { laboratoryCols, laboratoryActions } from '@config/data-control/laboratory';

const fetchData = async () => {
  // generate some dummy data for the table
  const data = [...new Array(45)].map(() => ({
    id: faker.string.uuid(),
    nom: faker.company.name(),
    chef: faker.person.fullName(),
    adjoint: faker.person.fullName(),
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
        title={'Laboratoires'}
        icon={<MdBusiness />}
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
