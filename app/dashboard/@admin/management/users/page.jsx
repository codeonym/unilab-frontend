import SectionHeader from "@dashboard/@admin/components/SectionHeader";
import TableContainer from "@dashboard/@admin/components/TableContainer";
import {userCols, userActions, usersWrapper} from '@config/data-control/user';
import AvatarPlaceholder from './AvatarPlaceholder';
import {getUsers} from "@lib/fetchData";
import {singleLinks} from "@config/admin/singleLinks";

const page = async ({ searchParams }) => {

  const query = searchParams?.query || '';
  const page = Number(searchParams?.page) || 1;
  const reverse = !!searchParams?.sort
  const data = await usersWrapper(await getUsers())

  const alteredData = data?.map((record => (
    {
      avatar: <AvatarPlaceholder placeholder={record?.email?.substring(0, 2)} />,
      ...record
    }
  )))
  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={'Utillisateurs'}
        icon={singleLinks.users.icon}
        description={'Bienvenue dans la section de votre utillisateurs'}
      />
      <TableContainer
        tHead={userCols}
        tBody={reverse ? alteredData?.reverse() : alteredData}
        actions={userActions}
        query={query}
        page={page}
      />
    </section>
  );
}

export default page;
