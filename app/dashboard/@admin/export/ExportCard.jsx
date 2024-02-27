import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ExportCard({title, image, url}) {
  return (
    <div
      className="
          card card-compact w-80 sm:w-96
          bg-base-100 shadow-xl shadow-base-300
          ">
      <figure>
        <Image
          width={400}
          height={400}
          src={image}
          alt={title}
        />
      </figure>
      <div
        className="
        card-body
        ">
        <h2
          className="card-title">
          {title}
        </h2>
        <p>
          Cliquez sur le bouton pour télécharger vos fichiers,
          puis sélectionnez le format souhaité.
        </p>
        <div
          className="
          card-actions justify-end
          ">
          <Link
            href={url}
            className="
            btn btn-neutral
            ">
            Télécharger
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ExportCard