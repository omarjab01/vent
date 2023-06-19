import React from 'react'

const AccountPage = () => {
  return (
    <div className="bg-secondarydarkbg p-4 rounded-lg">
        <h4 className="mb-8 text-xl">Account Page</h4>
        <div className='grid grid-cols-1 gap-8'>
            <div className='flex flex-col gap-2'>
                <label>Name</label>
                <input type="text" placeholder="omar" className='p-3 rounded-lg bg-primarydarkbg'/>
            </div>
            <div className='flex flex-col gap-2'>
                <label>Date of Birth</label>
                <input type="date" className='p-3 rounded-lg bg-primarydarkbg'/>
            </div>
        </div>
    </div>
  )
}

export default AccountPage