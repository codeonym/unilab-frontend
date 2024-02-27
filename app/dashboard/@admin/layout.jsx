import React from 'react'
import Sidebar from "./components/Sidebar";
import Breadcrumbs from './components/Breadcrumbs';
import Navbar from "./components/Navbar";

const theme = "dark"
function layout({ children }) {
  return (
    <main
      data-theme={theme}
      className="
      flex w-full"
    >
      <Sidebar />
      <div className="
      w-full flex flex-col 
      ">
        <Navbar />
        <Breadcrumbs />
        {children}
      </div>
    </main>
  )
}

export default layout