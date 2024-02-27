import React from 'react'
import DeleteResource from '@dashboard/@admin/components/DeleteResource'
import {deleteConsumableAction} from "@actions/consumablesActions"
import { faker } from "@faker-js/faker"

function page({ params }) {
  const confirmationWord = faker.lorem.word()
  return (
    <DeleteResource
      confirmationWord={confirmationWord}
      resourceId={params.id}
      resourceDeleteHandler={deleteConsumableAction}
    />
  )
}

export default page