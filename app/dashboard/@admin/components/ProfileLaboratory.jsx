import React from 'react'
import DataText from '@components/ui/DataText'
import DataUser from '@components/ui/DataUser'

function ProfileLaboratory({ laboratoryData }) {
  return (
    <div
      className="
      mt-12
      flex flex-col items-center 
      justify-center gap-4
      sm:grid-cols-2
      ">
      <DataText
        title={'Nom'}
        value={laboratoryData?.name}
      />
      <div
        className="
        grid grid-cols-1 items-center
        justify-center gap-4
        sm:grid-cols-2
        ">
        <DataUser
          title={'Directeur'}
          id={laboratoryData?.responsiblePersonId}
        />
        <DataUser
          title={'Adjoint'}
          id={laboratoryData?.deputyPersonId}
        />
      </div>
    </div>
  )
}

export default ProfileLaboratory