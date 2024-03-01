import React from 'react'
import SectionHeader from '@dashboard/@admin/components/SectionHeader'
import { singleLinks } from '@config/admin/singleLinks'
import ProfileSupplier from '@dashboard/@admin/components/ProfileSupplier'
import {getSupplierById} from "@lib/fetchData";
import {supplierWrapper} from "@config/data-control/supplier";

async function page({ params }) {

  const supplierData = await supplierWrapper(await getSupplierById(params.id))
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