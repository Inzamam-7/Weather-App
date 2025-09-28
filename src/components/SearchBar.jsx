import React,{useState} from 'react'
import { FaSearch } from "react-icons/fa";
const SearchBar = ({city, setCity, onSearch}) =>{
    return (
        <div className='flex justify-center p-10 w-full'>
            <input 
        type='text'
        placeholder='Enter city name'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className='p-2 border-2 border-white outline-none rounded-full flex min-w-md shadow-lg'
        />

        <button className='mx-3 bg-white rounded-full outline-none p-3 hover:bg-blue-700 shadow-lg' 
        type='button' 
        onClick={onSearch}
        >
            <FaSearch size={20} className="text-black hover:text-white cursor-pointer"/>
        </button>

        </div>
    )
}

export default SearchBar