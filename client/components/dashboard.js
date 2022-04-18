import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div className = "flex justify-center border rounded font-semibold mb-2 p-2" id = "title" > 
          Dashboard 
          </div>
          <div className = "flex flex-col items-center">
            <Link to = "/dashboard/profile/34e8763c-b4a8-471a-93e8-5ee7b4bf2b92"> Go To Profile </Link>
            <Link to = "/dashboard/main"> Go To Main </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
