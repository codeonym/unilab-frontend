"use client"
import { toast} from "react-hot-toast";
import Link from "next/link";
import {singleLinks} from "@config/admin/singleLinks";
function OrderCard({ order, orderApprovalAction }) {

  // Handle the approval or rejection of an order
  const handleClick = async (status) => {
    const jsonObj = {
      id: order?.id,
      status: status,
      type: order?.type
    }
    const res = await orderApprovalAction( jsonObj )
    if(res.ok) {
      toast.success(res.message)
    }else {
      toast.error(res.message)
    }
  }

  return (
    <div
      className='grid sm:grid-cols-3 items-center justify-center p-4 gap-2 rounded shadow'
    >
      <div className='flex flex-col divide-y-0 space-y-4'>
        <span className='text-lg font-medium'>
          {order?.name}
          <span
            className="ml-2 badge badge-info"
          >
            {order?.quantity}
          </span>
        </span>
        <span className='text-sm text-slate-500'>
          Type de produit: {order?.type}
        </span>
        <Link
            href={
            order?.type === "consommable"
                ? `${singleLinks.consumables.href}/${order?.productId}`
                : `${singleLinks.materials.href}/${order?.productId}`
            }
            className='text-sm text-slate-500 link hover:link-info'>
          ID de produit: {order?.productId}
        </Link>
        <span className='text-sm text-slate-500'>
          Demande par: {order?.laboratory}
        </span>
        <span className='text-sm text-slate-500'>
          Demandé le: {order?.requestDate}
        </span>
      </div>
      <div className='flex flex-col gap-2'>
        <span
          className={`text-sm font-bold ${order.approvalStatus === 'PENDING'
            ? 'text-yellow-300'
            : order.approvalStatus === 'APPROVED'
              ? 'text-emerald-500'
              : 'text-rose-500'
            }`}
        >
          {order?.approvalStatus}
        </span>
      </div>
      <div className='flex items-center flex-wrap gap-2'>
        <button
          className='btn w-24 text-white btn-ghost bg-emerald-400'
          onClick={async () => await handleClick('APPROVED')}
        >
          Approve
        </button>
        <button
          className='btn w-24 btn-ghost text-white bg-rose-400'
          onClick={async () => await handleClick('REJECTED')}
        >
          Reject
        </button>
      </div>
    </div>
  )
}

export default OrderCard