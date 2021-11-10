import React, { useState } from 'react';
import { MdOutlineMusicNote } from "react-icons/md";
import { MdOutlineMusicOff } from "react-icons/md";

export const LoopPreview = ({loop, onPlay,onStop}) => {
    const [isOn,setIsOn] = useState(false)
        return (
            <div className={`loop-card ${isOn ? 'isOn' : ''} flex column align-center`} >
            <div className='loop-actions flex'>
                {!isOn && <div className='btn flex align-center' onClick={()=>{
                    setIsOn(true);
                    onPlay(loop.path)
                }}>
                   Turn on <MdOutlineMusicNote /> </div>}
                {isOn && <div className='btn flex align-center' onClick={()=>{
                    setIsOn(false);
                    onStop(loop.path)
                }}>
                    Turn off <MdOutlineMusicOff /> </div>}
            </div>
                    <div><img className="instrumental-img" src={loop.img} alt=''/></div>
            </div>

        )

}