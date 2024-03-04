'use client'
import React, { useState } from 'react';

import OrdersTable from './OrdersTable';
import AddCunsumableCmnd from './AddCunsumableCmnd';

const ConsumablesOrders = ({orders,consumables,formActionHandler,userId}) => {
    const tableHeader = ["Date de commande","Id de commande","Id de Produit","Type","Fournisseur","Status"];
    const [openModal, setOpenModal] = useState(false)


    
    return (
        <div>
            
            <div className="w-screen bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-2 py-10 flex flex-col items-center">
                    <div className="w-full flex flex-col">
                        <h1 className="text-3xl font-medium">Commandes De Consommables</h1>
                        <span className="bg-slate-400 w-2/12 h-1 rounded-sm"></span>
                    </div>
                    
                    
                    <OrdersTable tableHeader={tableHeader} orders={orders} openAddCons={()=>setOpenModal(true)} tableType={"consumabls"}/>
                    
                </div>
            </div>
            <AddCunsumableCmnd isVisible={openModal} onClose={()=>setOpenModal(false)} consumables={consumables} formActionHandler={formActionHandler} userId={userId}/>
        </div>
    );
};

export default ConsumablesOrders;
