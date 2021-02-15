import React, { useState } from 'react'
//import 'tachyons';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="tc">
      <label htmlFor="name" className="tc f6 b w-25 pa2 mb2">Cat Name:</label>
      <input 
        className='input-reset ba b--dark-pink  pa2 mb2 w-25'
        type="search" 
        placeholder="search cats" 
        name="searchField"
        onChange={searchChange}/>
      
    </div>
  )
}



export default SearchBox
