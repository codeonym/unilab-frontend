// import React and faker
import React from 'react';
import { faker } from '@faker-js/faker';
import SectionHeader from '../components/SectionHeader';
import TableContainer from "../components/TableContainer";
import { PiToolboxFill } from "react-icons/pi"
import { consumableCols, consumableActions } from '@config/data-control/labConsumable';
import {withAuth} from "@lib/auth";
import {getLaboratoryConsumables, getUserDetails} from "@lib/fetchResponsibleData";
import {consumablesWrapper} from "@config/data-control/labConsumable";



const page = async ({searchParams}) => {

  const { user} = await withAuth()

  const userData = await getUserDetails(user?.id)

  const query = searchParams?.query || '';
  const page = Number(searchParams?.page) || 1;
  const reverse = !!searchParams?.sort
  const data = await consumablesWrapper(await getLaboratoryConsumables(userData?.laboratoryId))
  
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
