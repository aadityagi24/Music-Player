import React, { useState } from 'react';
import { IoIosPlayCircle } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { likedMusic } from '../../store/slices/musicSlice';
import {useDispatch} from 'react-redux'

const SongCard = ({ song }) => {
  const [isLiked, setIsLiked] = useState(false); // State to track if the heart icon is clicked
  const dispatch = useDispatch()

  const toggleLike = (id) => {
    setIsLiked(!isLiked); // Toggle the like state
    dispatch(likedMusic(id));
  };

  return (
    <div className='flex justify-between items-center bg-gray-800 text-white rounded-lg p-4 mb-3 shadow-2xl shadow-black'>
      {/* Image */}
      <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full overflow-hidden border-2 border-gray-700">
        <img className='w-full h-full object-fill' src={`/${song.imageSrc}`} alt={song.name} />
      </div>

      {/* Title and Singer */}
      <div className="flex flex-col w-[200px] h-[60px] justify-center ml-4">
      <div className="song_name uppercase font-semibold text-white truncate">
          {song.name}
        </div>
        <div className="singer text-sm font-semibold text-gray-300">
          {song.singer}
        </div>
        
      </div>

      {/* Albums */}
      <div className="w-[100px] h-[60px] flex flex-col justify-center items-center text-gray-400">
        <p className="text-xs">Album</p>
        <p className="text-sm">{song.albums}</p>
      </div>

      {/* Duration */}
      <div className="w-[100px] h-[60px] flex flex-col justify-center items-center text-gray-400">
        <p className="text-xs">Duration</p>
        <p className="text-sm">{song.duration}</p>
      </div>

      {/* Play Button */}
      <button onClick={() => handleSong(song.song)} className="ml-4 w-[60px] h-[60px] flex justify-center items-center text-green-500 hover:text-green-400">
        <NavLink to={`/songDetails/${song.id}`}>
          <IoIosPlayCircle size={36} />
        </NavLink>
      </button>

      {/* Like Icon */}
      <div className="ml-4 w-[60px] h-[60px] flex justify-center items-center">
        <button onClick={()=>toggleLike(song.id)}>
          {isLiked ? <FaHeart color="red" size={22} /> : <FaRegHeart size={20} className="text-gray-300" />}
        </button>
      </div>
    </div>
  );
};

export default SongCard;
