import React from 'react'
import Sidebar from '../components/Sidebar'

const DashboardLayout = ({children}) => {
  return (
    <div>
    <Sidebar />
    {children}</div>
  )
}

export default DashboardLayout