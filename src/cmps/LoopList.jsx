import React from 'react'

import { LoopPreview } from './LoopPreview'

export const LoopList = ({loops, onPlay, onStop})=> {
        return (
            <div className='loops-container flex'>
               {loops.map(loop=>{
                   return(
                       <LoopPreview key={loop.name} loop={loop} onStop={onStop} onPlay={onPlay}/>
                       )
               })}
            </div>
        )

}