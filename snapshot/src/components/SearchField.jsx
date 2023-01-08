import React, { useContext, useState } from 'react'
import { ImageContext } from '../App';

const SearchField = () => {
  const [searchValue , setSearchValue] = useState("");

  const { fetchData, setSearchImage } = useContext(ImageContext);


const  handleInputChange = (e) =>{
  setSearchValue(e.target.value)
}
const handleButtonSearch = () =>{
  fetchData(`search/photos?page=1&query=${searchValue}&client_id=qVxHblnZCXiaFjTgMkAstQ12Oxd88yLXqp3CALrsknk`)
  setSearchValue("");
}
const handleEnterSearch = (e) =>{
  if(e.key === 'Enter'){
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=qVxHblnZCXiaFjTgMkAstQ12Oxd88yLXqp3CALrsknk`)
    setSearchValue("");
    setSearchImage(searchValue)
  }
}
  return (
    <div className='input-group '>
        <input type="search" className='bg-light border border-light outline-none form-control' placeholder='Search Anything...' value={searchValue} onChange={handleInputChange} onKeyDown={handleEnterSearch}/>
        <button disabled={!searchValue} className='btn btn-primary' onClick={handleButtonSearch}>Search</button>
    </div>
  )
}

export default SearchField