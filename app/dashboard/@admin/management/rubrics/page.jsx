import { faker } from '@faker-js/faker';
import SectionHeader from '@dashboard/@admin/components/SectionHeader';
import TableContainer from "@dashboard/@admin/components/TableContainer";
import {rubricCols, rubricActions, rubricsWrapper} from '@config/data-control/rubric';
import ConsummationBar from "@dashboard/@admin/components/ConsummationBar"
import {getRubrics} from "@lib/fetchData";
import {singleLinks} from "@config/admin/singleLinks";


const page = async ({ searchParams }) => {

  const query = searchParams?.query || '';
  const page = Number(searchParams?.page) || 1;
  const reverse = !!searchParams?.sort
  const data = await rubricsWrapper(await getRubrics())
  const alteredData = data?.map(record => ({
    ...record,
    percentage: <ConsummationBar
      value={record?.engagedAmount}
      max={record?.allocatedAmount}
    />
  }))

  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={'Rubriques'}
        icon={singleLinks.rubrics.icon}
        description={'Bienvenue dans la section de votre rubriques'}
      />
      <TableContainer
        tHead={rubricCols}
        tBody={reverse ? alteredData?.reverse() : alteredData}
        actions={rubricActions}
        query={query}
        page={page}
      />
    </section>
  );
}

export default page;
