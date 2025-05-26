import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaPlay, FaPause } from "react-icons/fa"; // Import Play and Pause icons
import { FiMusic } from "react-icons/fi"; // Import a music icon

const SongDetails = () => {
  const { id } = useParams();
  const songsData = useSelector((state) => state.music.items);
  const [songDuration, setSongDuration] = useState(null);

  // Find the song with the given id
  const findSong = songsData.find((song) => song.id === parseInt(id));

  useEffect(() => {
    if (findSong) {
      const audio = new Audio(`/${findSong.song}`);
      audio.addEventListener("loadedmetadata", () => {
        setSongDuration(audio.duration);
      });
    }
  }, [findSong]);

  if (!findSong) {
    return <div className="text-center text-2xl text-white">Song not found</div>;
  }

  return (
    <div className="relative max-w-4xl mx-auto p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-xl shadow-2xl overflow-hidden mt-12">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-transparent to-purple-600 opacity-25 blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center mb-10 space-x-8">
          <div className="relative">
            <img
              src={`/${findSong.imageSrc}`}
              alt={findSong.name}
              className="w-64 h-64 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
          <div>
            <h2 className="text-5xl font-extrabold uppercase mb-2 leading-tight">
              {findSong.name}
            </h2>
            <p className="text-2xl text-gray-300 capitalize">{findSong.singer}</p>
            <p className="text-lg text-gray-400">{findSong.album}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 mt-8">
           

            <div className="w-full mx-auto mt-5 p-4  rounded-lg bg-gray-800">
              <audio
                className="w-full custom-audio-player"
                src={`/${findSong.song}`}
                controls
              >
                Your browser does not support the audio element.
              </audio>
            </div>
        </div>

        <div className="mt-10 text-center space-y-2">
          <p className="text-lg text-gray-400">
            Duration: {songDuration ? new Date(songDuration * 1000).toISOString().substr(14, 5) : "Loading..."}
          </p>
        </div>

        <div className="mt-4 flex justify-center items-center space-x-3 text-gray-500">
          <FiMusic className="text-xl" />
          <p className="text-lg">Enjoy your favorite songs</p>
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
