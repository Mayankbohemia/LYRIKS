import React, { useState } from 'react';


import { FiSearch } from 'react-icons/fi';
import {data} from '../assets/api'



const Searchbar = (props) => {
  const [filter, setFilter] = useState(data);

 
 
  const filterData = (e) => {
    const filteredData = data.filter((curr) => {
      return curr.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilter(filteredData);
    props.onDetails(filteredData)
  };
  // console.log(filter)

 


  

  return (
    <form  autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
        <input
          onChange={filterData}
          type="text"
          placeholder="Search"
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
        />
      </div>
    </form>
  );
};



export default Searchbar;