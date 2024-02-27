import React from 'react'
import ExportModal from '@dashboard/@admin/components/ExportModal'
import { exportResources } from '@config/export/exportResources'

async function page() {
  return (
    <ExportModal
      resource={exportResources.laboratories}
    />
  )
}

export default page