import React from 'react'

const Search = () => {
    return (
        <form className='mb-8'>
            <input type='text' placeholder='omarjab' className="p-3 rounded-lg bg-secondarydarkbg max-w-md w-full" />
            <input type="submit" value="Search" className='px-6 py-3 bg-white text-black rounded-lg ml-4' />
        </form>
    )
}

export default Search