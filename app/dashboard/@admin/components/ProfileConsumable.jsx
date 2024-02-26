import DataText from '@components/ui/DataText'
import DataActions from '@components/ui/DataActions'
import DataSupplier from '@components/ui/DataSupplier'
import DataLaboratory from "@components/ui/DataLaboratory"

function ProfileConsumable({ consumableData }) {
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
          title={'Type'}
          value={consumableData?.type}
        />
        <DataText
          title={'Quantité'}
          value={consumableData?.quantity}
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
          id={consumableData?.supplierId}
        />
        <DataLaboratory
          title={'Laboratoire'}
          id={consumableData?.laboratoryId}
        />
      </div>
    </div>
  )
}

export default ProfileConsumable