import React from 'react'
import DataText from '@components/ui/DataText'
import DataDate from '@components/ui/DataDate'
import DataActions from '@components/ui/DataActions'
import DataSupplier from '@components/ui/DataSupplier'
import DataLaboratory from "@components/ui/DataLaboratory"
import DataUser from '@components/ui/DataUser'

function ProfileMaterial({ materialData }) {
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
          title={'Nombre d\'inventaire'}
          value={materialData?.inventoryNumber}
        />
        <DataText
          title={'Type'}
          value={materialData?.type}
        />
      </div>
      <div
        className="
        grid grid-cols-1 items-center
        justify-center gap-4
        sm:grid-cols-2
        ">
        <DataDate
          title={'Acquis le'}
          value={materialData?.acquisitionDate}
        />
      </div>
      <div
        className="
        grid grid-cols-1 items-center
        justify-center gap-4
        sm:grid-cols-2
        ">
        <DataSupplier
          title={'Fournisseur'}
          id={materialData?.supplierId}
        />
        <DataLaboratory
          title={'Laboratoire'}
          id={materialData?.laboratoryId}
        />
      </div>
      <div
        className="
        grid grid-cols-1 items-center
        justify-center gap-4
        sm:grid-cols-2
        ">
        <DataUser
          title={'Responsable'}
          id={materialData.responsiblePersonId}
        />
        <DataDate
          title={'Affecter le'}
          value={materialData?.assignmentDate}
        />
      </div>
    </div>
  )
}

export default ProfileMaterial