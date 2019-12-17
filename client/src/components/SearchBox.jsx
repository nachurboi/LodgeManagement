import React from 'react'

const SearchBox = ({handleSearchChange,e} )=>{

  return (
    <div>
    <nav className="navbar navbar-light bg-info special-color-dark border-top border-white">
        <form className="form-inline">
          <input onChange={handleSearchChange} value={e} className="form-control mr-lg-4" type="search" placeholder="Search By Address" aria-label="Search" />
        </form>
      </nav>
   </div>
  );
}


 export default SearchBox;