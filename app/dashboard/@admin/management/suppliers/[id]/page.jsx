import React from 'react'
import SectionHeader from '@dashboard/@admin/components/SectionHeader'
import { singleLinks } from '@config/admin/singleLinks'
import ProfileSupplier from '@dashboard/@admin/components/ProfileSupplier'

const getSupplierById = async (id) => ({
  "id": id,
  "name": "Sell Inc.",
  "responsiblePersonId": "4257",
  "address": "123 anywhere",
  "email": "supplier@sell.org.co",
  "phone": "0569856985",
  "fax": "0567856985",
  "website": "https://www.store.sell.org",
  "rib": "457865932658965845786953",
  "bankName": "Atlas Bank",
})
async function page({ params }) {

  const supplierData = await getSupplierById(params.id)
  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={"Fournisseur"}
        icon={singleLinks.suppliers.icon}
        description={"Bienvenue dans la page du fournisseur."}
      />
      <ProfileSupplier
        supplierData={supplierData}
      />
    </section>
  )
}

export default page