import { faker } from '@faker-js/faker'
import OrderCard from './OrderCard'
import { MdOutlineChecklistRtl } from 'react-icons/md'
import SectionHeader from '../components/SectionHeader'
import { getUserDetails, getResponsiblePendingOrders } from '@lib/fetchResponsibleData'
import { withAuth } from '@lib/auth'

async function page() {
  // Generate some fake orders for demonstration
  const { user} = await withAuth()

  const userData = await getUserDetails(user?.id)
  
  const orders = await getResponsiblePendingOrders(userData.laboratoryId)
  console.log(orders)

  return (
    <section className='p-4 '>
      
      <SectionHeader
        title={"Demandes"}
        icon={<MdOutlineChecklistRtl />}
        description={"Bienvenue dans la section des demandes"}
      />
      <div className='grid items-center justify-center flex-col gap-4 mt-4 h-screen overflow-y-scroll'>
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </section>
  )
}

export default page
