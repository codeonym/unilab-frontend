import React from 'react'
import Sidebar from "./components/Sidebar";

const theme = "winter"
function layout({ children }) {
  return (
    <main
      className='flex min-h-screen w-full'
      data-theme={theme}
    >
      <Sidebar />
      <div>
        <input type="checkbox" value="sunset" className="toggle theme-controller" />
        {children}
      </div>
    </main>
  )
}

export default layout