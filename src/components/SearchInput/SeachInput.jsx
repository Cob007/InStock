import './SearchInput.scss'
import SearchIcon from '../../assets/Icons/search-24px.svg'
import { useState } from 'react'
const SearchInput = () => {

   

    return (
        <div className='search'>
            <input
                className="search__input"
                placeholder='Search...'
                type="text"
                name='search'
            />
            <img
                className='search__icon'
                src={SearchIcon}
                alt='search icon'
            />
        </div>
    )
}

export default SearchInput