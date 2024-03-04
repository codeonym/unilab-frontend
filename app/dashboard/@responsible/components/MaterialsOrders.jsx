'use client'
import React, { Fragment, useState } from 'react';

import OrdersTable from './OrdersTable';
import AddMaterialCmnd from './AddMaterialCmnd';

const MaterialsOrders =  ({orders,materials,formActionHandler,labId}) => {
    const tableHeader = ["Date de commande","Id de commande","Id de Produit","Type","Fournisseur","Status"];
    const [openModal, setOpenModal] = useState(false);


    
    return (
        <Fragment>
            <div>
                <div className="w-screen bg-gray-50">
                    <div className="mx-auto max-w-screen-xl px-2 py-10 flex flex-col items-center">
                        <div className="w-full flex flex-col ">
                            <h1 className=" relative text-3xl font-medium">Commandes de Matériel</h1>
                            <span className="bg-slate-400 w-2/12 h-1 rounded-sm"></span>
                            
                        </div>
                        
                        
                        <OrdersTable tableHeader={tableHeader} orders={orders} openAddMat={()=>setOpenModal(true)} tableType={"materials"}/>
                        
                    </div>
                </div>
            </div>
            <AddMaterialCmnd isVisible={openModal} onClose={()=>setOpenModal(false)} materials={materials} formActionHandler={formActionHandler} labId={labId}/>
        </Fragment >
    );
};

export default MaterialsOrders;
