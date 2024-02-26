import React from 'react'
import DataText from '@components/ui/DataText'
import DataActions from '@components/ui/DataActions'
import DataConsumption from '@components/ui/DataConsumption'
import DataMoney from '@components/ui/DataMoney'

function ProfileRubric({ rubricData }) {
  return (
    <div
      className="
      mt-12
      flex flex-col items-center 
      justify-center gap-4
      sm:grid-cols-2
      ">

      <DataActions
      />
      <div
        className="
        grid grid-cols-1 items-center
        justify-center gap-4
        sm:grid-cols-2
        ">
        <DataText
          title={'Code'}
          value={rubricData?.code}
        />
        <DataText
          title={'Désignation'}
          value={rubricData?.designation}
        />
      </div>
      <div
        className="
        grid grid-cols-1 items-center
        justify-center gap-4
        sm:grid-cols-2
        ">
        <DataMoney
          title={'Montant alloué'}
          value={rubricData?.allocatedAmount}
        />
        <DataMoney
          title={'Montant engagé'}
          value={rubricData?.engagedAmount}
        />
      </div>
      <DataConsumption
        title={"Vous avez consommé"}
        value={rubricData?.engagedAmount}
        max={rubricData?.allocatedAmount}
      />
      
    </div>
  )
}

export default ProfileRubric