"use client"

function OrderCard({ order }) {

  // Handle the approval or rejection of an order
  const handleOrder = (id, action) => {
    // Update the order status in the state or database
    // For simplicity, we just log the action here
    console.log(`Order ${id} is ${action}`)
  }

  return (
    <div
      className='grid sm:grid-cols-3 items-center justify-center p-4 gap-2 rounded shadow'
    >
      <div className='flex flex-col divide-y-0 space-y-4'>
        <span className='text-lg font-medium'>
          {order.orderType}
          <span
            className="ml-2 badge badge-info"
          >
            {order.quantity}
          </span>
        </span>
        <span className='text-sm text-slate-500'>
          Type de produit: {order.type}
        </span>
        <span className='text-sm text-slate-500'>
          ID de produit: {order.productId}
        </span>
        <span className='text-sm text-slate-500'>
          Demande par: {order.personId}
        </span>
        <span className='text-sm text-slate-500'>
          Demandé à: {order.requestDate.toLocaleDateString()}
        </span>
      </div>
      <div className='flex flex-col gap-2'>
        <span className='text-lg font-medium'>
          Laboratoire: {order.laboratoryName}
        </span>
        <span
          className={`text-sm font-bold ${order.approvalStatus === 'pending'
            ? 'text-yellow-300'
            : order.approvalStatus === 'approved'
              ? 'text-emerald-500'
              : 'text-rose-500'
            }`}
        >
          {order.approvalStatus}
        </span>
      </div>
      <div className='flex items-center flex-wrap gap-2'>
        <button
          className='btn w-24 text-white btn-ghost bg-emerald-400'
          onClick={() => handleOrder(order.orderId, 'approved')}
        >
          Approve
        </button>
        <button
          className='btn w-24 btn-ghost text-white bg-rose-400'
          onClick={() => handleOrder(order.orderId, 'rejected')}
        >
          Reject
        </button>
      </div>
    </div>
  )
}

export default OrderCard