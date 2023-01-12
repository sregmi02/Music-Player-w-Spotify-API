import React from 'react';
import "./queue.css";

const Queue = ({tracks, setCurrentIndex}) => {
    console.log(tracks);
    return (
        <div className = "queue-container">
            <div className = "queue flex">
                <p className = "up-next">Queue</p>
                <div className = "queue-list">
                  {
                    tracks?.map((track, index) => (
                            <div key={index + "key"} className='queue-item flex' onClick={() => setCurrentIndex(index)}>
                            <p>
                                {track?.track?.name}
                            </p>
                            </div>
                    ))
                  }  
                </div>
            </div>
        </div>
    );
};

export default Queue;