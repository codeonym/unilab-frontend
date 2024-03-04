import NavBar from "./components/NavBar";
export const metadata = {
  title: "Responsible",
  description: "Responsible Dashboard",
};

export default function RootLayout({ children }) {
  return (
        <main className="flex flex-col">
            <NavBar/>
            <div className="flex-grow bg-gray-50">
                {children}
            </div>
            
        </main>
  );
}
