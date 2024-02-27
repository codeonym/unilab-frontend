import React from 'react'
import DataText from '@components/ui/DataText'
import DataAddress from '@components/ui/DataAddress'
import DataPhone from "@components/ui/DataPhone"
import DataBank from "@components/ui/DataBank"
import DataRIB from "@components/ui/DataRIB"
import DataEmail from "@components/ui/DataEmail"
import DataWebsite from "@components/ui/DataWebsite"
import DataActions from '@components/ui/DataActions'
import DataUser from "@components/ui/DataUser"

function ProfileSupplier({ supplierData }) {
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
          title={'Nom'}
          value={supplierData?.name}
        />
        <DataUser
          title={'Responsable'}
          id={supplierData?.responsiblePersonId}
        />
      </div>
      <div
        className="
        grid grid-cols-1 items-center
        justify-center gap-4
        sm:grid-cols-2
        ">
        <DataAddress
          title={'Adresse'}
          value={supplierData?.address}
        />
      </div>
      <div
        className="
        grid grid-cols-1 items-center
        justify-center gap-4
        sm:grid-cols-2
        ">
        <DataEmail
          title={'Email'}
          value={supplierData?.email}
        />
        <DataWebsite
          title={'Siteweb'}
          value={supplierData?.website}
        />
      </div>
      <div
        className="
        grid grid-cols-1 items-center
        justify-center gap-4
        sm:grid-cols-2
        ">
        <DataPhone
          title={'Tél'}
          value={supplierData?.phone}
        />
        <DataPhone
          title={'Fax'}
          value={supplierData?.fax}
        />
      </div>
      <div
        className="
        grid grid-cols-1 items-center
        justify-center gap-4
        sm:grid-cols-2
        ">
        <DataBank
          title={'Banque'}
          value={supplierData?.bankName}
        />
        <DataRIB
          title={'RIB'}
          value={supplierData?.rib}
        />
      </div>
    </div>
  )
}

export default ProfileSupplier