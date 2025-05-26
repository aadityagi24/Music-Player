import React from 'react';
import { IoIosPlayCircle } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const ExploreCard = () => {
  const songs = [
    {
      id: 1,
      name: "Level",
      singer: "Moose Wala",
      duration: "4:15",
      imageSrc: "level.jpg",
      song: "Level.mp3",
    },
    {
      id: 2,
      name: "Angreji Beat",
      singer: "Honey Singh",
      duration: "4:15",
      imageSrc: "angrezi beat.jpg",
      song: "angreji beat.mp3",
    },
    {
      id: 3,
      name: "Uud Gya",
      singer: "B Prak",
      duration: "4:15",
      imageSrc: "udd gaya.jpg",
      song: "uud gya.mp3",
    },
    {
      id: 4,
      name: "Time Table",
      singer: "Kulwinder Billa",
      duration: "4:15",
      imageSrc: "Time table.jpg",
      song: "Time table.mp3",
    },
    {
      id: 5,
      name: "Viah",
      singer: "Jass Manak",
      duration: "4:15",
      imageSrc: "viah.jpg",
      song: "viah.mp3",
    },
    {
      id: 6,
      name: "Step Cut",
      singer: "Sandeep Brar",
      duration: "4:15",
      imageSrc: "step cut.jpg",
      song: "step cut.mp3",
    }
  ];

  return (
    <>
      {songs.map((song) => (
        <div key={song.id} className='flex justify-between items-center bg-gray-800 text-white rounded-lg p-1 mb-3 mt-3 gap-2.2 '>
          <div className="logo w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-gray-700">
            <img className='w-full h-full object-fill' src={song.imageSrc} alt={song.name} />
          </div>
          <div className="title flex-1 ml-4">
          <div className="song_name text-xs  font-semibold">
              {song.name}
            </div>
            <div className="singer text-xs text-gray-400 truncate">
              {song.singer}
            </div>
            
          </div>
          <div className="duration text-xs text-gray-400">
            <p>{song.duration}</p>
          </div>
          <button onClick={() => handleSong(song.song)} className="ml-4 w-[60px] h-[60px] flex justify-center items-center text-green-500 hover:text-green-400">
            <NavLink to={`/songDetails/${song.id}`}>
              <IoIosPlayCircle size={36} />
            </NavLink>
          </button>
        </div>
      ))}
    </>
  );
}

export default ExploreCard;
