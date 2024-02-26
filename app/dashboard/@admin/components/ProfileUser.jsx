import React from 'react'
import DataText from '@components/ui/DataText'
import DataAddress from '@components/ui/DataAddress'
import DataDate from '@components/ui/DataDate'
import DataPhone from "@components/ui/DataPhone"
import DataBank from "@components/ui/DataBank"
import DataRIB from "@components/ui/DataRIB"
import DataEmail from "@components/ui/DataEmail"
import DataPassword from "@components/ui/DataPassword"
import DataActions from '@components/ui/DataActions'
import DataAvatar from "@components/ui/DataAvatar"

function ProfileUser({ userData }) {
  return (
    <div
      className="
      mt-12
      flex flex-col items-center 
      justify-center gap-4
      sm:grid-cols-2
      ">
      <DataAvatar
        ancName={userData?.lastName[0] + userData?.firstName[0]}
      />
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
          value={userData?.lastName}
        />
        <DataText
          title={'Prenom'}
          value={userData?.firstName}
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
          value={userData?.email}
        />
        <DataDate
          title={'Date de naissance'}
          value={userData?.dateOfBirth}
        />
      </div>
      <div
        className="
        grid grid-cols-1 items-center
        justify-center gap-4
        sm:grid-cols-2
        ">
        <DataPassword
          title={'Mot de passe'}
          value={userData?.password}
        />
      </div>
      <div
        className="
        grid grid-cols-1 items-center
        justify-center gap-4
        sm:grid-cols-2
        ">
        <DataText
          title={'Cin'}
          value={userData?.cin}
        />
        <DataText
          title={'SOM'}
          value={userData?.somNumber}
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
          value={userData?.address}
        />
        <DataPhone
          title={'Tél'}
          value={userData?.phone}
        />
      </div>
      <div
        className="
        grid grid-cols-1 items-center
        justify-center gap-4
        sm:grid-cols-2
        ">
        <DataText
          title={'Grade'}
          value={userData?.grade}
        />
        <DataText
          title={'Responsabilité'}
          value={userData?.responsibility}
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
          value={userData?.bankName}
        />
        <DataRIB
          title={'RIB'}
          value={userData?.bankAccountNumber}
        />
      </div>
      <div
        className="
        grid grid-cols-1 items-center
        justify-center gap-4
        sm:grid-cols-2
        ">
        <DataText
          title={'Ville'}
          value={userData?.city}
        />
        <DataText
          title={'Code postal'}
          value={userData?.postalCode}
        />
      </div>
    </div>
  )
}

export default ProfileUser