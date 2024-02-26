'use client'
import React, { useState } from 'react';

import OrdersTable from './OrdersTable';
import AddCunsumableCmnd from './AddCunsumableCmnd';

const ConsumablesOrders = () => {
    const tableHeader = ["Date de commande","Id de commande","Description","Type","Numéro d’inventaire","Status"];
    const [openModal, setOpenModal] = useState(false)
    const orders = [
        {
            "orderId":1,
            "orderDate":"07-08-2001",
            "description":"Ordinateur de bureau standard avec accessoires.",
            "materialType":"PC bureau",
            "invNum":"inv5226",
            "approvalStatus":"Rejeté"
        },
        {
            "orderId": 2,
            "orderDate": "15-09-2001",
            "description": "Portable léger pour les déplacements professionnels.",
            "materialType": "Ordinateur portable",
            "invNum": "inv7853",
            "approvalStatus": "Approuvé"
        },
        {
            "orderId": 3,
            "orderDate": "03-11-2001",
            "description": "Écran haute résolution pour des graphismes professionnels.",
            "materialType": "Écran",
            "invNum": "inv3742",
            "approvalStatus": "En attente"
        },
        {
            "orderId":4,
            "orderDate":"07-08-2001",
            "description":"Ordinateur de bureau standard avec accessoires.",
            "materialType":"PC bureau",
            "invNum":"inv5226",
            "approvalStatus":"Rejeté"
        },
        {
            "orderId": 5,
            "orderDate": "15-09-2001",
            "description": "Portable léger pour les déplacements professionnels.",
            "materialType": "Ordinateur portable",
            "invNum": "inv7853",
            "approvalStatus": "Approuvé"
        },
        {
            "orderId": 6,
            "orderDate": "03-11-2001",
            "description": "Écran haute résolution pour des graphismes professionnels.",
            "materialType": "Écran",
            "invNum": "inv3742",
            "approvalStatus": "En attente"
        },{
            "orderId":7,
            "orderDate":"07-08-2001",
            "description":"Ordinateur de bureau standard avec accessoires.",
            "materialType":"PC bureau",
            "invNum":"inv5226",
            "approvalStatus":"Rejeté"
        },
        {
            "orderId": 2,
            "orderDate": "15-09-2001",
            "description": "Portable léger pour les déplacements professionnels.",
            "materialType": "Ordinateur portable",
            "invNum": "inv7853",
            "approvalStatus": "Approuvé"
        },
        {
            "orderId": 8,
            "orderDate": "03-11-2001",
            "description": "Écran haute résolution pour des graphismes professionnels.",
            "materialType": "Écran",
            "invNum": "inv3742",
            "approvalStatus": "En attente"
        },
        {
            "orderId":9,
            "orderDate":"07-08-2001",
            "description":"Ordinateur de bureau standard avec accessoires.",
            "materialType":"PC bureau",
            "invNum":"inv5226",
            "approvalStatus":"Rejeté"
        },
        {
            "orderId": 10,
            "orderDate": "15-09-2001",
            "description": "Portable léger pour les déplacements professionnels.",
            "materialType": "Ordinateur portable",
            "invNum": "inv7853",
            "approvalStatus": "Approuvé"
        },
        {
            "orderId": 11,
            "orderDate": "03-11-2001",
            "description": "Écran haute résolution pour des graphismes professionnels.",
            "materialType": "Écran",
            "invNum": "inv3742",
            "approvalStatus": "En attente"
        },
        {
            "orderId":12,
            "orderDate":"07-08-2001",
            "description":"Ordinateur de bureau standard avec accessoires.",
            "materialType":"PC bureau",
            "invNum":"inv5226",
            "approvalStatus":"Rejeté"
        },
        {
            "orderId": 13,
            "orderDate": "15-09-2001",
            "description": "Portable léger pour les déplacements professionnels.",
            "materialType": "Ordinateur portable",
            "invNum": "inv7853",
            "approvalStatus": "Approuvé"
        },
        {
            "orderId": 3,
            "orderDate": "03-11-2001",
            "description": "Écran haute résolution pour des graphismes professionnels.",
            "materialType": "Écran",
            "invNum": "inv3742",
            "approvalStatus": "En attente"
        },
        {
            "orderId":1,
            "orderDate":"07-08-2001",
            "description":"Ordinateur de bureau standard avec accessoires.",
            "materialType":"PC bureau",
            "invNum":"inv5226",
            "approvalStatus":"Rejeté"
        },
        {
            "orderId": 2,
            "orderDate": "15-09-2001",
            "description": "Portable léger pour les déplacements professionnels.",
            "materialType": "Ordinateur portable",
            "invNum": "inv7853",
            "approvalStatus": "Approuvé"
        },
        {
            "orderId": 3,
            "orderDate": "03-11-2001",
            "description": "Écran haute résolution pour des graphismes professionnels.",
            "materialType": "Écran",
            "invNum": "inv3742",
            "approvalStatus": "En attente"
        },
        {
            "orderId":1,
            "orderDate":"07-08-2001",
            "description":"Ordinateur de bureau standard avec accessoires.",
            "materialType":"PC bureau",
            "invNum":"inv5226",
            "approvalStatus":"Rejeté"
        },
        {
            "orderId": 2,
            "orderDate": "15-09-2001",
            "description": "Portable léger pour les déplacements professionnels.",
            "materialType": "Ordinateur portable",
            "invNum": "inv7853",
            "approvalStatus": "Approuvé"
        },
        {
            "orderId": 3,
            "orderDate": "03-11-2001",
            "description": "Écran haute résolution pour des graphismes professionnels.",
            "materialType": "Écran",
            "invNum": "inv3742",
            "approvalStatus": "En attente"
        },
        {
            "orderId":1,
            "orderDate":"07-08-2001",
            "description":"Ordinateur de bureau standard avec accessoires.",
            "materialType":"PC bureau",
            "invNum":"inv5226",
            "approvalStatus":"Rejeté"
        },
        {
            "orderId": 2,
            "orderDate": "15-09-2001",
            "description": "Portable léger pour les déplacements professionnels.",
            "materialType": "Ordinateur portable",
            "invNum": "inv7853",
            "approvalStatus": "Approuvé"
        },
        {
            "orderId": 3,
            "orderDate": "03-11-2001",
            "description": "Écran haute résolution pour des graphismes professionnels.",
            "materialType": "Écran",
            "invNum": "inv3742",
            "approvalStatus": "En attente"
        }
    ];

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
    
    return (
        <div>
            
            <div className="w-screen bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-2 py-10 flex flex-col items-center">
                    <div className="w-full flex flex-col">
                        <h1 className="text-3xl font-medium">Commandes De Consommables</h1>
                        <span className="bg-slate-400 w-2/12 h-1 rounded-sm"></span>
                    </div>
                    
                    
                    <OrdersTable tableHeader={tableHeader} orders={orders} getStatusColor={getStatusColor} openAddCons={()=>setOpenModal(true)} tableType={"consumabls"}/>
                    
                </div>
            </div>
            <AddCunsumableCmnd isVisible={openModal} onClose={()=>setOpenModal(false)}/>
        </div>
    );
};

export default ConsumablesOrders;
