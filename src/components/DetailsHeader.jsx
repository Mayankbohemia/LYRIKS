import React, {useState} from 'react';
import { Link } from 'react-router-dom';



const DetailsHeader = ({ artistId, artistData, songData }) => {
  console.log(songData)
 
//  const obj = songData
//  console.log(obj)
//  const adam = obj.artists[0].adamid
//  console.log(adam)

 

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

      <div className="absolute inset-0 flex items-center">
      <img
        alt="profile"
        src={
          artistId ? artistData?.attributes?.artwork?.url
            .replace('{w}', '500')
            .replace('{h}', '500')
            : songData?.images?.coverart
}
        className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
      />

      <div className="ml-5">
      <p className="font-bold sm:text-3xl text-xl text-white">
          {artistId ? artistData?.attributes?.name : songData?.title}
        </p>
        {!artistId && (
        
            <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
          
        )}
      </div>

      </div>
      

    </div>
  )
}
export default DetailsHeader;
