'use client'

import React , { useRef, useState, useEffect } from 'react'
import User from './components/User'
import Search from './components/Search'

const PeoplePage = () => {

  const search = useRef('')
  const [users, setUsers] = useState([])


  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('http://localhost:3000/api/users', {
          method: 'GET'
      })

      setUsers(await res.json())
    }
    getUsers()
  }, [users])
    

    
  return (
    <div className='bg-primarydarkbg h-full flex flex-col gap-8 w-full p-8 rounded-xl'>
        <h4 className='text-xl font-semibold'>People</h4>
        <div>
          <Search />
          <div className='flex flex-row gap-4 items-center flex-wrap'>
            {
              users.map((user) => (
                <User key={user.id} user={user} />
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default PeoplePage