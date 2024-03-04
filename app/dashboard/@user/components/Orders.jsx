import React from 'react'
import MaterialsOrders from './MaterialsOrders'
import ConsumablesOrders from './ConsumablesOrders'

import { withAuth } from '@lib/auth';
import { laboratoryMaterialsOrdersWrapper, laboratoryConsumablesOrdersWrapper } from '@config/data-control/laboratoryOrders';
import {
    getUserConsumablesOrders,
    getUserDetails, getUserLaboratoryConsumables
} from '@lib/fetchUserData';
import {materialsNickNameWrapper} from "@config/data-control/labMaterial";
import {addNewUserMaterialOrder,addNewUserConsumableOrder} from "@actions/user/ordersActions";
import {consumablesNickNameWrapper} from "@config/data-control/labConsumable";
import {getUserLaboratoryMaterials, getUserMaterialsOrders} from "@lib/fetchUserData";

const Orders = async () => {
  const { user} = await withAuth()
  const userData = await getUserDetails(user?.id)
  const materialOrders = await laboratoryMaterialsOrdersWrapper(await getUserMaterialsOrders(userData?.userId))
  const consumableOrders = await laboratoryConsumablesOrdersWrapper(await getUserConsumablesOrders(userData?.userId))
  const materials = await  materialsNickNameWrapper(await getUserLaboratoryMaterials(userData?.laboratoryId))

  const consumables = await consumablesNickNameWrapper(await getUserLaboratoryConsumables(userData?.laboratoryId))

  return (
    <div>

        <MaterialsOrders orders={materialOrders} materials={materials} formActionHandler={addNewUserMaterialOrder} userId={userData?.userId}/>
  
        <ConsumablesOrders orders={consumableOrders} consumables={consumables} formActionHandler={addNewUserConsumableOrder} userId={userData?.userId}/>
        
    </div>
  )
}

export default Orders