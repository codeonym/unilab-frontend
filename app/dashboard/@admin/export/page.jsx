import SectionHeader from "../components/SectionHeader"
import { singleLinks } from "@config/admin/singleLinks"
import { exportLinks } from "@config/admin/exportLinks"

import ExportCard from "./ExportCard"

function page() {
  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={"Exporter"}
        description={'Exporter facilement vos données sous format PDF et CS'}
        icon={singleLinks.export.icon}
      />
      <div
        className="
        flex gap-4 flex-wrap items-center justify-center mt-12
        ">
        {exportLinks?.map((link, idx) => (
          <ExportCard
            key={idx}
            title={link.title}
            url={link.href}
            image={link.image}
          />  
        ))}
      </div>
    </section>
  )
}

export default page