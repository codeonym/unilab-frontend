import {GoBellFill} from "react-icons/go";
import Link from "next/link";
import React from "react";
import {singleLinks} from "@config/admin/singleLinks";
import {getAdminPendingOrders} from "@lib/fetchData";
import {withAuth} from "@lib/auth";

const Notifications = async(props) => {
    const {user} = await withAuth()
    if (user.role !== "ADMIN")
        return (<>NotFound</>)
    const orders = await getAdminPendingOrders()

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle  hover:bg-base-200">
                <div className="indicator">
                    <GoBellFill className='text-xl' />
                    {orders?.length > 0 &&(<span className="badge badge-primary w-5 h-5 rounded-full badge-sm indicator-item">{orders?.length}</span>)}
                </div>
            </div>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                    <span className="font-bold text-lg">{orders?.length} Notifications</span>
                    <span className="text-info">Vous avez {orders?.length} demandes encours d&apos;attende</span>
                    <div className="card-actions">
                        <Link
                            href={singleLinks.orders.href}
                            className="btn btn-primary btn-block">View More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Notifications;