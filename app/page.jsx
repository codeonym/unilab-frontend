import Image from "next/image";
import { getServerSession } from "next-auth"
import { authOptions } from "@api/auth/[...nextauth]/route"

import Test from "./Test"
export default function Home() {
  return (
    <main>

      main page
        <Test />
    </main>
  );
}
