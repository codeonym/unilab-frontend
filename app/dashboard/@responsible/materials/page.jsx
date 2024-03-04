// import React and faker
import React from 'react';
import { faker } from '@faker-js/faker';
import SectionHeader from '../components/SectionHeader';
import TableContainer from "../components/TableContainer";
import { IoDesktop } from "react-icons/io5"
import { materialCols, materialActions } from '@config/data-control/labMaterial';
import {withAuth} from "@lib/auth"
import { getUserDetails,getLaboratoryMaterials } from '@lib/fetchResponsibleData';
import { materialsWrapper } from '@config/data-control/labMaterial';





const page = async ({searchParams}) => {

  const query = searchParams?.query || '';
  const page = Number(searchParams?.page) || 1;
  const reverse = !!searchParams?.sort
  const { user} = await withAuth()
  const userData = await getUserDetails(user?.id)
  const data = await materialsWrapper(await getLaboratoryMaterials(userData?.laboratoryId));
  
  // return the page component
  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={'Matérels'}
        icon={<IoDesktop />}
        description={'Bienvenue dans la section des matériels de votre laboratoire'}
      />
      <TableContainer
        tHead={materialCols}
        tBody={reverse? data.reverse() : data}
        actions={materialActions}
        query={query}
        page={page}
      />
    </section>
  );
}

// export the page component
export default page;
