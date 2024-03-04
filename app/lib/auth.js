// This handles the authentication related logic for the user
import { redirect } from 'next/navigation'
import { authOptions } from "@config/authOptions"
import { getServerSession } from 'next-auth'

export const checkUserRole = async () => {
  /**
   * This function gets the user role
   */
  const session = await getServerSession(authOptions)
  if(session) {
    console.log(JSON.stringify(session))
    const role = session?.user?.role?.toLowerCase()
    console.log("role: -----------------------" + role)
        return role
  }else {
    redirect('/login', 'replace')
  }
}

export const withAuth = async ()=> {
  try {
    const session = await getServerSession(authOptions)
    if(!session)
      redirect('/login', "replace")
    return {
      isAuthenticated: !!session?.user,
      user: session?.user,
      accessToken: session?.user.accessToken
    }
    }catch(err) {
      console.error(err)

    return {
        isAuthenticated: false,
        user: null,
        accessToken: null
      }

  }
}