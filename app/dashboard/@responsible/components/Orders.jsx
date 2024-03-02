import React from 'react'
import MaterialsOrders from './MaterialsOrders'
import ConsumablsOrders from './ConsumablsOrders'
import AddCunsumableCmnd from './AddCunsumableCmnd'
import AddMaterialCmnd from './AddMaterialCmnd'
import { withAuth } from '@lib/auth';
import { laboratoryMaterialsOrdersWrapper, laboratoryConsumablesOrdersWrapper } from '@config/data-control/laboratoryOrders';
import { getLabConsumablesOrders, getLabMaterialsOrders, getUserDetails } from '@lib/fetchResponsibleData';



const Orders = async () => {
  const { user} = await withAuth()
  const userData = await getUserDetails(user?.id)
  const materialOrders = await laboratoryMaterialsOrdersWrapper(await getLabMaterialsOrders(userData?.laboratoryId))
  const consumableOrders = await laboratoryConsumablesOrdersWrapper(await getLabConsumablesOrders(userData?.laboratoryId))
  return (
    <div>

        <MaterialsOrders orders={materialOrders}/>
  
        <ConsumablsOrders orders={consumableOrders}/>
        
    </div>
  )
}

export default Orders