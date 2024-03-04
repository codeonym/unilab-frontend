import CredentialsProvider from "next-auth/providers/credentials";
import {loginEndpoint} from "@config/endpoints/loginEndpoints";
import jwt from "jsonwebtoken";

export const authOptions = {
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            id: "unilab",
            name: "unilab",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Mot de passe", type: "password" },
            },
            async authorize(credentials) {
                try {

                    const credentialDetails = {
                        email: credentials.email,
                        password: credentials.password,
                    }

                    const res = await fetch(loginEndpoint, {
                        method: "POST",
                        body: JSON.stringify(credentialDetails),
                        headers: { "Content-Type": "application/json" },
                    });

                    if (!res.ok) {
                        // Handle API error responses (e.g., invalid credentials)
                        throw new Error("Authentication failed");
                    }

                    const data = await res.json();
                    // Decode the JWT token
                    const decodedToken = jwt.decode(data.token);
                    console.log(decodedToken)
                    // Return user data
                    const user = {
                        id: decodedToken?.id,
                        email: decodedToken?.sub,
                        name: data?.name,
                        image: data?.image,
                        role: decodedToken?.role,
                        accessToken: data?.token,
                        refreshToken: data?.refreshToken,
                    }
                    return user

                } catch (error) {
                    console.error("Error during authentication:", error.message);
                    return null
                }
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.email = user.email;
                token.name = user.name;
                token.image = user.image;
                token.accessToken = user.accessToken;
                token.refreshToken = user.refreshToken;
            }
            return token;
        },

        session: ({ session, token, user }) => {
            if (token) {
                session.user.accessToken = token.accessToken;
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.image = token.image;
                session.user.role = token.role;
                session.user.refreshToken = token.refreshToken;
                session.user.email = token.email;

            }
            return session;
        }
    },
    /*pages: {
        signIn: "/login"
    }*/
};