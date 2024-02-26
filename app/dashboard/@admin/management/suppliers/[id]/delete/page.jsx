import React from 'react'
import DeleteResource from '@dashboard/@admin/components/DeleteResource'
import {deleteSupplierAction} from "@actions/suppliersActions"
import { faker } from "@faker-js/faker"

function page({ params }) {
  const confirmationWord = faker.lorem.word()
  return (
    <DeleteResource
      confirmationWord={confirmationWord}
      resourceId={params.id}
      resourceDeleteHandler={deleteSupplierAction}
    />
  )
}

export default page