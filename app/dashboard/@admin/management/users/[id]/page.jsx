import React from 'react'
import SectionHeader from '@dashboard/@admin/components/SectionHeader'
import { FaUserCircle } from "react-icons/fa"
import ProfileUser from '@dashboard/@admin/components/ProfileUser'

const getUserById = async (id) => ({
  "id": id,
  "firstName": "aaaa",
  "lastName": "aaaa",
  "email": "admin@gmail.com",
  "password": "aaaaaaaaaaa",
  "cin": "aaaaaa444",
  "somNumber": "1234567",
  "address": "dererfer",
  "dateOfBirth": "2024-02-01",
  "phone": "0658965896",
  "grade": "dddd",
  "responsibility": "user",
  "bankName": "dddd",
  "bankAccountNumber": "065896589606589658967894",
  "city": "dddd",
  "postalCode": "7845",
  "submit": "Ajouter"
})
async function page({ params }) {

  const userData = await getUserById(params.id)
  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={"Profile"}
        icon={<FaUserCircle />}
        description={"Bienvenue dans la page du profile."}
      />
      <ProfileUser
        userData={userData}
      />
    </section>
  )
}

export default page