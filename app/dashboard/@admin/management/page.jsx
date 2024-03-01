import React from 'react'
import SectionHeader from '../components/SectionHeader'
import { managementLinks } from '@config/admin/managementLinks'
import { MdApps } from "react-icons/md"
import Link from 'next/link'
import Image from 'next/image'

function page() {
  return (
    <section
      className="p-4">
      <SectionHeader
        title={"Gestion"}
        description={"Bienvenue dans la section de gestion"}
        icon={<MdApps />}
      />
      <div
        className="flex mt-8 flex-wrap items-center justify-center gap-2">
        {managementLinks?.map((link, idx) => (
          <div
            key={idx}
            className="group card w-96 bg-base-100 shadow-xl image-full"
          >
            <figure>
              <Image
                className="
                group-hover:scale-125 duration-300 transition-transform
                "
                width={400}
                height={400}
                alt={link.title}
                src={link.image}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{link.title}</h2>
              <p>Cliquer sur le lien pour gérer votre {link.title}</p>
              <div className="card-actions justify-end">
                <Link
                  href={link.href}
                  className="btn btn-primary"
                >
                  Aller à la page
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default page