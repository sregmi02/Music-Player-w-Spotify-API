import React from 'react';
import "./controls.css";
import { IconContext } from "react-icons";
import { FaPause, FaPlay, FaForward, FaBackward } from "react-icons/fa";

const Controls = ({
    isPlaying,
    setIsPlaying,
    handleNext,
    handlePrev,
}) => {
    return (
    <IconContext.Provider value={{ size: "35px", color: "#c8c2d3" }}>
      <div className="controls-wrapper flex">
        <div className="action-btn flex" onClick={handlePrev}>
          <FaBackward />
        </div>
        <div
          className={
            isPlaying ? "play-pause-btn flex active" : "play-pause-btn flex"
          }
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <FaPause /> : <FaPlay/>}
        </div>
        <div className="action-btn flex" onClick={handleNext}>
          <FaForward/>
        </div>
      </div>
    </IconContext.Provider>
    );
};

export default Controls;