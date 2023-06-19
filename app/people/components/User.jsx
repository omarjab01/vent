
const User = ({ user }) => {

    return (
        <div className="p-4 rounded-xl bg-secondarydarkbg w-fit h-fit">
            <img src="https://as2.ftcdn.net/v2/jpg/02/00/20/01/1000_F_200200151_Kff2OXKvOPP1q6KOtLSG7YSFRVbiwhb7.jpg" className='w-48 h-48 rounded-2xl' />
            <div className='flex flex-col items-center justify-center'>
                <h5 className='text-center my-4 font-semibold'>@{user?.name}</h5>
                <button className="text-purple-500 text-center mt-1 mx-auto">Message</button>
            </div>
        </div>
    )
}

export default User