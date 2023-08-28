import { Error, Loader, SongCard } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";

import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { genres } from "../assets/constants";
import { data } from "../assets/api";
import Searchbar from "../components/Searchbar";
import { useState } from "react";

const Discover = (props) => {
 

  const generTitle = "pop";
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // const filterData = (e) => {
  //   const filteredData = data.filter((curr) => {
  //     return curr.title.toLowerCase().includes(e.target.value.toLowerCase());
  //   });
  //   setFilter(filteredData);
  // };
const filter = props.finalData



  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover Songs{" "}
        </h2>
      </div>

      {/* <form autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
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
      </form> */}
      

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {filter?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
