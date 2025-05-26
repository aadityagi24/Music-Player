import React from 'react'
import SongCard from './SongCard';
import { useSelector } from 'react-redux';


const Songs = () => {

const songsData = useSelector(state => state.music.items);
// console.log(songsData);


  return (
    <div className='space-y-3'>
      {/* <h2 className='my-4 px-2 text-xl text-black'>My Playlist</h2> */}
      {songsData.map((song,index)=>{
         return <SongCard key={song.id} song={song}/>
      })}
    </div>
  )
}

export default Songs;