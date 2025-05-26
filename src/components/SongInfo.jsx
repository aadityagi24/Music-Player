import React from 'react'
import Artist from './Artist/Artist'

const SongInfo = () => {
  return (
    <div>
      <div className="artist_head flex justify-between px-2 mt-3">
      <h2 className='text-2xl font-semibold px-2 py-1 text-white'>Artist</h2>
      <p className='text-base px-3 py-2 bg-black text-white rounded-xl'>See All</p>
      </div>

      <div className="artist_detail flex gap-4 overflow-x-scroll">
         <Artist/>
      </div>
      
    </div>
  )
}

export default SongInfo