import React from 'react'
import ExploreCard from './ExploreCard'

const ExploreInfo = () => {
  return (
    <div>
    <div className="artist_head flex justify-between px-2 mt-10 ">
    <h2 className='text-2xl font-semibold px-2 py-1 text-black text-lg'>More Songs</h2>
    <p className='text-base px-3 py-2 bg-black text-white rounded-xl text-xs'>See All</p>
    </div>
    <div>
    <ExploreCard/>
    
    </div>
    
    </div>
    
        
    
  )
}

export default ExploreInfo