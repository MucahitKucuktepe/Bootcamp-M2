import React from 'react'

const Sidebar = () => {
  return (
    <div className=' w-40 h-screen bg-cyan-300 float-left text-black pt-10 pl-3'>
        <nav className='flex flex-col'>
            <a href="/dashboard/projects" className='underline'>Projects</a>
            <a href="" className='underline'>Team</a>
            <a href="" className='underline'>Users</a>
        </nav>
    </div>
  )
}

export default Sidebar