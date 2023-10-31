import React, { useContext, useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import DataContext from '../context/dataContext'
const SearchSec = () => {

    const {handleSearchProducts} = useContext(DataContext)
    const [searchQuery,setSearchQuery] = useState('')

    return (
        <form onSubmit={(e)=>handleSearchProducts(e,searchQuery)} className='searchdiv w-52 sm:w-64 md:w-72 lg:w-96 h-10 p-1 flex justify-center items-center rounded-full overflow-hidden transition-all bg-gray-100 border-pink-2000 '>

            <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} type="text" placeholder='Search items' className='w-full h-full px-3 text-xs font-semibold text-gray-700 sm:text-sm bg-transparent outline-none border-0 placeholder:select-none placeholder:text-xs placeholder:text-gray-500'/>

            <button type="submit" className='w-10 h-full flex justify-center items-center'>
             <BiSearch className=' h-5 md:h-6 w-5 md:w-6 text-pink-700'/>
            </button>

        </form>
    )
}

export default SearchSec