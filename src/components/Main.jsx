import React from 'react'
import Categories from './Categories/Categories'
import Songs from './Songs/Songs'

const Main = () => {
  return (
   <>
   <h2 className='text-3xl font-medium  mt-1 mb-4 p-2'>Trending Playlist</h2>
   <Categories  />
   <h2 className='text-3xl font-medium mt-1 mb-5 p-2'>Recent Played</h2>
   <div className="song_container flex flex-col gap-5 w-[98%] mx-auto">
    <Songs/>
   </div>
   </>
  )
}

export default Main