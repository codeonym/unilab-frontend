import React from 'react'
import { checkUserRole } from "@lib/auth"

async function layout({ admin, user, responsible }) {
  const role = await checkUserRole()
  return <>{
    role === 'admin'
      ? admin
      : role === 'responsible'
        ? responsible
        : user
  }
  </>
}

export default layout