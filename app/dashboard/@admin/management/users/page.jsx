// import React and faker
import { faker } from '@faker-js/faker';
import SectionHeader from "@dashboard/@admin/components/SectionHeader";
import TableContainer from "@dashboard/@admin/components/TableContainer";
import { FaUsersCog } from "react-icons/fa"
import { userCols, userActions } from '@config/data-control/user';
import AvatarPlaceholder from './AvatarPlaceholder';

const fetchData = async () => {

  // generate some dummy data for the table
  const data = [...new Array(45)].map(() => ({
    id: faker.string.uuid(),
    email: faker.internet.email(),
    responsibility: faker.helpers.arrayElement(['admin', 'responsible', 'user']),
    phone: faker.phone.number(),
    gender: faker.person.sex(),
    grade: faker.person.jobTitle()
  }));

  return data
}

const page = async ({ searchParams }) => {

  const query = searchParams?.query || '';
  const page = Number(searchParams?.page) || 1;
  const reverse = !!searchParams?.sort
  const data = await fetchData()

  const alteredData = data.map((record => (
    {
      avatar: <AvatarPlaceholder placeholder={record.email.substring(0, 2)} />,
      ...record
    }
  )))
  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={'Utillisateurs'}
        icon={<FaUsersCog />}
        description={'Bienvenue dans la section de votre utillisateurs'}
      />
      <TableContainer
        tHead={userCols}
        tBody={reverse ? alteredData.reverse() : alteredData}
        actions={userActions}
        query={query}
        page={page}
      />
    </section>
  );
}

export default page;
