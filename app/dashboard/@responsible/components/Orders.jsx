import React from 'react'
import MaterialsOrders from './MaterialsOrders'
import ConsumablsOrders from './ConsumablsOrders'
import AddCunsumableCmnd from './AddCunsumableCmnd'
import AddMaterialCmnd from './AddMaterialCmnd'

const Orders = () => {
  return (
    <div>

        <MaterialsOrders/>
  
        <ConsumablsOrders/>
        
    </div>
  )
}

export default Orders