import React, { useState } from 'react';
import { loops } from '../services/loop.service';
import { LoopList } from '../cmps/LoopList';

export const MainApp = () => {
    const [isPlay, setIsPlay] = useState(false);
    const [isTurnOn, SetIsTurnOn] = useState(false);
    const [activeLoops, setActiveLoops] = useState([]);
    const [activeLoopsName, setactiveLoopsName] = useState([]);

    const onActivate = (bool) => {
        SetIsTurnOn(bool);
        if (bool) {
            playLoops();
        } else {
            stopLoops();
        }
    }

    const playLoops = () => {
        activeLoops.forEach(activeLoop => {
            activeLoop.play();
            activeLoop.loop = true;
        })
    }

    const stopLoops = () => {
        activeLoops.forEach(activeLoop => {
            activeLoop.pause();
            activeLoop.currentTime = 0;

        })
    }


    const onPlay = (path, currName) => {
        const loop = new Audio(path);

        if (isPlay) {
            const isLoopPlaying = activeLoopsName.some(name => {
                return name === currName;
            })
            if (isLoopPlaying) return;
            const currentTime = activeLoops[0].currentTime * 1000;
            let time = 8000 - currentTime;
            setTimeout(() => {
                loop.play();
                loop.loop = true;
            }, time)
        } else {
            if (isTurnOn) {
                setIsPlay(true);
                loop.play();
                loop.loop = true;
            }
        }
        const newActiveLoops = [...activeLoops];
        newActiveLoops.push(loop);
        setActiveLoops(newActiveLoops);
        const newActiveLoopsName = [...activeLoopsName]
        newActiveLoopsName.push(currName)
        setactiveLoopsName(newActiveLoopsName)

    }

    const onStop = (currName) => {
        if (isPlay && (activeLoops.length === 1)) setIsPlay(false);
        const pathIdx = activeLoopsName.findIndex(name => {
            return name === currName;
        })
        if (pathIdx !== -1) {
            const newActiveLoops = [...activeLoops];
            newActiveLoops[pathIdx].pause();
            newActiveLoops.splice(pathIdx, 1);
            setActiveLoops(newActiveLoops);
            const newActiveLoopsName = [...activeLoopsName];
            newActiveLoopsName.splice(pathIdx, 1);
            setactiveLoopsName(newActiveLoopsName);
        }
    }

    return (
        <div className="main-app">
            <div className="actions-container">
                <input type="checkbox" id="toggle" onChange={() => onActivate(!isTurnOn)} />
                <label htmlFor="toggle"></label>
            </div>
            {loops && <LoopList isPlay={isPlay} loops={loops} onStop={onStop} onPlay={onPlay} />}

        </div>
    )
}