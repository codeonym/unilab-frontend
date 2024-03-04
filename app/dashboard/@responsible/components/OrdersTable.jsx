import React, { useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import AddMaterialCmnd from './AddMaterialCmnd';
const OrderTable = ({ tableHeader, orders, openAddMat ,openAddCons, tableType}) => {
    const getStatusColor = (status) => {
        switch (status) {
            case "Approuvé":
                return "bg-green-100 text-green-800";
            case "Rejeté":
                return "bg-red-100 text-red-600";
            default:
                return "bg-blue-100 text-blue-800";
        }
    };
    const ordersPerPage = 5; // Number of orders per page
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(orders.length / ordersPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="mt-4 w-full">
                <div className="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
                    <form className="relative flex w-full max-w-2xl items-center">
                        <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" className=""></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
                        </svg>
                        <input type="name" name="search" className="h-12 w-full border-b-gray-400 bg-transparent py-4 pl-12 text-sm outline-none focus:border-b-2" placeholder="Recherche par Numéro de Commande, Date, Type" />
                    </form>
                    <div className="flex gap-3">
                    <button type="button" className="relative mr-auto inline-flex cursor-pointer items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 focus:shadow sm:mr-0">
                        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                        <svg className="mr-2 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                        Filtrer
                    </button>
                    <button type="button" className="relative mr-auto inline-flex cursor-pointer items-center rounded-full border border-blue-400 bg-white px-5 py-2 text-center text-sm font-medium text-blue-700 hover:bg-blue-100 focus:shadow sm:mr-0" onClick={()=>tableType === "materials" ? openAddMat(): openAddCons()}>
                        <IoMdAddCircleOutline className="mr-1"/>
                        Ajouter
                    </button>
                    </div>
                </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4 w-full overflow-x-auto">
                <table className="min-w-full w-full border-collapse border-spacing-y-2 border-spacing-x-2">
                    <thead className="border-b lg:table-header-group">
                        <tr>
                            {tableHeader.map((header, index) => (
                                <th key={index} className="whitespace-normal min-w-36 py-4 text-sm font-semibold text-gray-800 sm:px-3">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white lg:border-gray-300 text-center">
                        {orders?.slice((currentPage - 1) * ordersPerPage, Math.min(currentPage * ordersPerPage, orders?.length)).map(order => (
                            <tr key={order?.name + order?.id} className="gap-5">
                                <td className="whitespace-no-wrap min-w-36  py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{order?.requestDate}</td>
                                <td className="whitespace-no-wrap min-w-36 py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{order?.id}</td>
                                <td className="whitespace-no-wrap min-w-36 py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{order?.productId}</td>
                                <td className="whitespace-no-wrap min-w-36 py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">{order?.name}</td>
                                <td className="whitespace-no-wrap min-w-36 py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">{order?.supplier}</td>
                                <td className="whitespace-no-wrap min-w-36 py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
                                    <span className={`ml-2 mr-3 whitespace-nowrap rounded-full px-2 py-0.5 ${getStatusColor(order?.approvalStatus)}`}>
                                        {order?.approvalStatus}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            <div className="join mt-5 shadow">
                <button className="join-item btn bg-white hover:bg-gray-200" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>«</button>
                <button className="join-item btn bg-white cursor-default">Page {currentPage}</button>
                <button className="join-item btn bg-white hover:bg-gray-200" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>»</button>
            </div>
            
        </>
    );
};

export default OrderTable;
