'use client'

import React, { useRef, useState } from 'react'

const SignInForm = () => {
    
    const name = useRef('')
    const email = useRef('')
    const password = useRef('')

    const [registerOrLogin, setRegisterOrLogin] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch('http://localhost:3000/api/create-user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name.current,
                email: email.current,
                password: password.current
            })
        })

        console.log(await res.json())
    }

    return (
        <div className='bg-primarydarkbg p-8 rounded-2xl max-w-[420px] w-full'>
            <h4 className='text-2xl mb-8 font-semibold'>{registerOrLogin ? 'Sign In' : 'Create Account'}</h4>

            {registerOrLogin ? (
                <form>
                    <div className='flex flex-col gap-8 mb-8'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-lg text-gray-400'>Email</label>
                            <input type="email" onChange={(e) => email.current = e.target.value} className='p-3 rounded-md bg-secondarydarkbg' required/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-lg text-gray-400'>Password</label>
                            <input type="password" onChange={(e) => password.current = e.target.value} className='p-3 rounded-md bg-secondarydarkbg' required/>
                        </div>
                    </div>
                    <p className='mt-4 mb-8 text-gray-500'>Don't have an account yet? <span className='cursor-pointer text-blue-500 font-semibold' onClick={() => setRegisterOrLogin(false)}>Create One</span></p>
                    <input type="submit" className='p-3 rounded-full w-full bg-purple-600 cursor-pointer hover:bg-purple-700' value="Sign Up" />
                </form>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-8 mb-8'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-lg text-gray-400'>Name</label>
                            <input type="text" onChange={(e) => name.current = e.target.value} className='p-3 rounded-md bg-secondarydarkbg' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-lg text-gray-400'>Email</label>
                            <input type="email" onChange={(e) => email.current = e.target.value} className='p-3 rounded-md bg-secondarydarkbg' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-lg text-gray-400'>Password</label>
                            <input type="password" onChange={(e) => password.current = e.target.value} className='p-3 rounded-md bg-secondarydarkbg' />
                        </div>
                    </div>
                    <p className='mt-4 mb-8 text-gray-500'>Already have an account? <span className='cursor-pointer text-blue-500 font-semibold' onClick={() => setRegisterOrLogin(true)}>Login</span></p>
                    <input type="submit" className='p-3 rounded-full w-full bg-purple-600 cursor-pointer hover:bg-purple-700' value="Sign In" />
                </form>
            )
        }
            
        </div>
    )
}

export default SignInForm