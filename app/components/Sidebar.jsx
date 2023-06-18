'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsPeopleFill } from 'react-icons/bs'
import { HiOutlineLogout } from 'react-icons/hi'
import { FaUser } from 'react-icons/fa'


const Sidebar = () => {

    const [open, isOpen] = useState(true)


    return (
        <aside className={`flex flex-col h-full ${open ? 'w-[35vw] p-8' : 'w-fit p-4'} max-w-[400px] p-4 text-white bg-primarydarkbg rounded-xl transition ease-in-out duration-300`}>
            <div className='flex flex-row items-center justify-between mb-8'>
                <Link href="/" className={`text-xl font-semibold ${open ? 'block' : 'hidden'}`}>Vent</Link>
                <GiHamburgerMenu className={`text-2xl cursor-pointer ${open ? 'm-0' : 'm-4'}`} onClick={() => isOpen((p) => !p)} />
            </div>
            <ul className='flex flex-col gap-4'>
                <li className='bg- bg-secondarydarkbg text-white p-4 rounded-lg'>
                    <Link className='flex flex-row gap-4 items-center' href="/people">
                        <BsPeopleFill className='text-2xl' />
                        <span className={`text-xl ${open ? 'block' : 'hidden'}`}>People</span>
                    </Link>
                </li>
                <li className='text-white p-4 rounded-lg'>
                    <Link className='flex flex-row gap-4 items-center' href="/account">
                        <FaUser className='text-2xl' />
                        <span className={`text-xl ${open ? 'block' : 'hidden'}`}>Account</span>
                    </Link>
                </li>
            </ul>
            <Link className='flex flex-row gap-4 items-center p-4 rounded-lg mt-auto' href="/settings">
                <HiOutlineLogout className='text-2xl text-red-600' />
                <span className={`text-xl text-red-500 ${open ? 'block' : 'hidden'}`}>Log out</span>
            </Link>
        </aside>
    )
}

export default Sidebar