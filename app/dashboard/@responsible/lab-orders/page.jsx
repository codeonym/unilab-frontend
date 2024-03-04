import { faker } from '@faker-js/faker'
import OrderCard from './OrderCard'
import { MdOutlineChecklistRtl } from 'react-icons/md'
import SectionHeader from '../components/SectionHeader'
import { getUserDetails, getResponsiblePendingOrders } from '@lib/fetchResponsibleData'
import { withAuth } from '@lib/auth'
import {orderResponsibleApprovalAction} from "@actions/ordersActions";

async function page() {
  // Generate some fake orders for demonstration
  const { user} = await withAuth()

  const userData = await getUserDetails(user?.id)
  
  const allOrders = await getResponsiblePendingOrders(userData.laboratoryId)

  return (
    <section className='p-4 '>
      
      <SectionHeader
        title={"Demandes"}
        icon={<MdOutlineChecklistRtl />}
        description={"Bienvenue dans la section des demandes"}
      />
      <div className='grid items-center justify-center flex-col gap-4 mt-4 h-screen overflow-y-scroll'>
        {allOrders?.map((order) => (
            <OrderCard
                key={order?.id}
                orderApprovalAction={orderResponsibleApprovalAction}
                order={order}
            />
        ))}
      </div>
    </section>
  )
}

export default page
