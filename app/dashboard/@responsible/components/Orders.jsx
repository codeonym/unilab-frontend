import React from 'react'
import MaterialsOrders from './MaterialsOrders'
import ConsumablsOrders from './ConsumablsOrders'
import AddCunsumableCmnd from './AddCunsumableCmnd'
import AddMaterialCmnd from './AddMaterialCmnd'
import { withAuth } from '@lib/auth';
import { laboratoryMaterialsOrdersWrapper, laboratoryConsumablesOrdersWrapper } from '@config/data-control/laboratoryOrders';
import {
    getAllConsumables,
    getAllMaterials,
    getLabConsumablesOrders,
    getLabMaterialsOrders,
    getUserDetails
} from '@lib/fetchResponsibleData';
import {materialsNickNameWrapper} from "@config/data-control/labMaterial";
import {addNewLabMaterialOrder,addNewLabConsumableOrder} from "@actions/responsible/ordersActions";
import {consumablesNickNameWrapper} from "@config/data-control/labConsumable";

const Orders = async () => {
  const { user} = await withAuth()
  const userData = await getUserDetails(user?.id)
  const materialOrders = await laboratoryMaterialsOrdersWrapper(await getLabMaterialsOrders(userData?.laboratoryId))
  const consumableOrders = await laboratoryConsumablesOrdersWrapper(await getLabConsumablesOrders(userData?.laboratoryId))
    const materials = await  materialsNickNameWrapper(await getAllMaterials())
    const consumables = await consumablesNickNameWrapper(await getAllConsumables())

  return (
    <div>

        <MaterialsOrders orders={materialOrders} materials={materials} formActionHandler={addNewLabMaterialOrder} labId={userData?.laboratoryId}/>
  
        <ConsumablsOrders orders={consumableOrders} consumables={consumables} formActionHandler={addNewLabConsumableOrder} labId={userData?.laboratoryId}/>
        
    </div>
  )
}

export default Orders