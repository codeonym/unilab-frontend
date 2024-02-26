import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Credentials({
      id: "springboot",
      name: "Spring Boot",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Call your Spring Boot API to get the JWT token
        const res = await fetch("https://your-spring-boot-app.com/auth", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        // Check if the token is valid
        if (data && data.token) {
          // Return the token and the user data
          return { token: data.token, user: data.user };
        } else {
          // Return null to reject the login
          return null;
        }
      },
    }),
  ],
  // Enable JSON Web Token as the session storage mechanism
  session: {
    jwt: true,
  },
  // Use the token returned by the authorize function as the JWT payload
  jwt: {
    secret: process.env.JWT_SECRET,
    encryption: true,
  },
  callbacks: {
    // Set the token as a cookie for the session
    async session(session, token) {
      session.accessToken = token.token;
      return session;
    },
    // Set the token as a property of the user object
    async jwt(token, user) {
      if (user) {
        token.token = user.token;
      }
      return token;
    },
  },
});


// // pages/index.js
// import { useSession, signIn, signOut } from "next-auth/client";

// export default function Home() {
//   const [session, loading] = useSession();

//   return (
//     <div>
//       {!session && (
//         <>
//           <p>Not signed in</p>
//           <button onClick={() => signIn("springboot")}>Sign in</button>
//         </>
//       )}
//       {session && (
//         <>
//           <p>Signed in as {session.user.email}</p>
//           <p>Access token: {session.accessToken}</p>
//           <button onClick={() => signOut()}>Sign out</button>
//         </>
//       )}
//     </div>
//   );
// }
