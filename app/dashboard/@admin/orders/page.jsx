import OrderCard from './OrderCard'
import SectionHeader from '../components/SectionHeader'
import { getAdminPendingOrders} from "@lib/fetchData";
import {singleLinks} from "@config/admin/singleLinks";
import { orderApprovalAction} from "@actions/ordersActions";

async function page() {
  // Generate some fake orders for demonstration
  const orders = await getAdminPendingOrders()

  return (
    <section className='p-4 '>
      
      <SectionHeader
        title={"Demandes"}
        icon={singleLinks.orders.icon}
        description={"Bienvenue dans la section des demandes"}
      />
      <div className='grid items-center justify-center flex-col gap-4 mt-4'>
        {orders?.map((order) => (
          <OrderCard
              key={order?.id}
              orderApprovalAction={orderApprovalAction}
              order={order}
          />
        ))}
      </div>
    </section>
  )
}

export default page
