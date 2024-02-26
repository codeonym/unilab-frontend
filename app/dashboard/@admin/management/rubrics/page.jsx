import { faker } from '@faker-js/faker';
import SectionHeader from '@dashboard/@admin/components/SectionHeader';
import TableContainer from "@dashboard/@admin/components/TableContainer";
import { FaCoins } from "react-icons/fa"
import { rubricCols, rubricActions } from '@config/data-control/rubric';
import ConsummationBar from "./ConsummationBar"

const fetchData = async () => {

  // generate some dummy data for the table
  const data = [...new Array(45)].map(() => ({
    id: faker.string.uuid(),
    code: faker.number.int(),
    designation: faker.lorem.sentence(),
    engagedAmount: Math.round(faker.number.float({ min: 0, max: 100_000 })),
    allocatedAmount: Math.round(faker.number.float({ min: 100_000, max: 300_000 })),
  }));

  return data
}

const page = async ({ searchParams }) => {

  const query = searchParams?.query || '';
  const page = Number(searchParams?.page) || 1;
  const reverse = !!searchParams?.sort
  const data = await fetchData()
  const alteredData = data.map(record => ({
    ...record,
    percentage: <ConsummationBar
      value={record.engagedAmount}
      max={record.allocatedAmount}
    />
  }))

  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={'Rubriques'}
        icon={<FaCoins />}
        description={'Bienvenue dans la section de votre rubriques'}
      />
      <TableContainer
        tHead={rubricCols}
        tBody={reverse ? alteredData.reverse() : alteredData}
        actions={rubricActions}
        query={query}
        page={page}
      />
    </section>
  );
}

export default page;
