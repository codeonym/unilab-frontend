import React from 'react'
import LoginForm from './LoginForm'
import { loginAction } from '@actions/loginActions'
import { redirect } from 'next/navigation'
import { authOptions } from "@config/authOptions"
import { getServerSession } from 'next-auth'

async function page() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return (
        <section
            className='
      w-full min-h-screen gap-6
      p-4 container mx-auto
      flex flex-col items-center
      justify-center'
        >
          <LoginForm
              loginAction={loginAction}
          />
        </section>
    );
  } else {
    redirect('/dashboard', 'replace')
  }
}

export default page