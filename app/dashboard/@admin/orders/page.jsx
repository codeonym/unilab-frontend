import { faker } from '@faker-js/faker'
import OrderCard from './OrderCard'
import { MdOutlineChecklistRtl } from 'react-icons/md'
import SectionHeader from '../components/SectionHeader'

function page() {
  // Generate some fake orders for demonstration
  const orders = Array.from({ length: 10 }, () => ({
    orderId: faker.string.uuid(),
    type: "consumable",
    orderType: faker.commerce.productName(),
    laboratoryName: "LaRI",
    personId: faker.number.int(),
    productId: faker.commerce.isbn(),
    quantity: faker.number.int({ min: 1, max: 10 }),
    requestDate: faker.date.recent(),
    approvalStatus: "pending",
  }))

  return (
    <section className='p-4 '>
      
      <SectionHeader
        title={"Demandes"}
        icon={<MdOutlineChecklistRtl />}
        description={"Bienvenue dans la section des demandes"}
      />
      <div className='grid items-center justify-center flex-col gap-4 mt-4'>
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </section>
  )
}

export default page
