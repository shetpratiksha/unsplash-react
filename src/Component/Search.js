import React, { Component, useState } from 'react'
import serachIcon from '../search-icon.png';


function Search(props) {

    const [searchTerm, setSearch] = useState()

    const onInputChange = (event) =>{
        props.onSearchTermChange(event.target.value)
    }

    return (
        <div className="search-bar">
            <input type="text" value={searchTerm} 
            onChange={onInputChange} placeholder="Search for images here..."/>
            <img src={serachIcon} alt="serach icon"/>
        </div>
    )
}


export default Search
