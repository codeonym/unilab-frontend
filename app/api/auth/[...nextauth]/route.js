import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginEndpoint } from "@config/endpoints/loginEndpoints";
import { authOptions} from "@config/authOptions";


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
