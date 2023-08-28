import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { DetailsHeader, Error, RelatedSongs } from "../components";
import {data} from '../assets/api'

const SongDetails = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { songid } = useParams();
  const [songDetails, setSongDetails] = useState([]);

  // const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });

  const [lyrics, setLyrics] = useState([]);
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song,i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };


  let songData;
  async function fetchData() {
    const url = `https://shazam.p.rapidapi.com/shazam-songs/get-details?id=${songid}&locale=en-US`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key":'8be28eda27msh4a03fa5810f77a1p1dbc41jsn41c44d720894',
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      songData = await response.json();

      const keys = Object.keys(songData.resources.lyrics);

      const lyricsArr = songData.resources.lyrics[keys[0]].attributes.text;
      // console.log(lyricsArr)

      setLyrics(lyricsArr);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchDetails() {
    const url =
      `https://shazam.p.rapidapi.com/songs/get-details?key=${songid}&locale=en-US`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": '8be28eda27msh4a03fa5810f77a1p1dbc41jsn41c44d720894',
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const song = await response.json();
      console.log(song);
      setSongDetails(song);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
    fetchDetails();
  }, [songid]);

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songDetails} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {lyrics.map((lines, i) => (
            <p className="text-gray-400 text-base my-1" key={i}>
              {lines}
            </p>
          ))}
        </div>
      </div>
      <RelatedSongs
      data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;
