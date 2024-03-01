import SectionHeader from "@dashboard/@admin/components/SectionHeader";
import TableContainer from "@dashboard/@admin/components/TableContainer";
import {materialCols, materialActions, materialsWrapper} from '@config/data-control/material';
import {getMaterials} from "@lib/fetchData";
import {singleLinks} from "@config/admin/singleLinks";

const page = async ({ searchParams }) => {

  const query = searchParams?.query || '';
  const page = Number(searchParams?.page) || 1;
  const reverse = !!searchParams?.sort
  const data = await materialsWrapper(await getMaterials())

  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={'Matériels'}
        icon={singleLinks.materials.icon}
        description={'Bienvenue dans la section de votre matériels'}
      />
      <TableContainer
        tHead={materialCols}
        tBody={reverse ? data?.reverse() : data}
        actions={materialActions}
        query={query}
        page={page}
      />
    </section>
  );
}

export default page;
