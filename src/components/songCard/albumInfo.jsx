import React, { useEffect, useRef, useState } from 'react';
import "./albumInfo.css";
import Controls from './controls';
const AlbumInfo = ({song,   currentIndex, setCurrentIndex, total}) => {
    // console.log(album);
    // console.log(releaseDate);
    // console.log(artist);
    // console.log(totalTracks);
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackProgress, setTrackProgress] = useState(0);
    var audioSrc = total[currentIndex]?.track?.preview_url;
    const audioRef = useRef(new Audio(total[0]?.track.preview_url));

    const intervalRef = useRef();
  
    const isReady = useRef(false);
  
    const { duration } = audioRef.current;
  
    const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;
    
  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };
  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isPlaying) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < total.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else setCurrentIndex(0);
  };

  const handlePrev = () => {
    if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };

  const addZero = (n) => {
    return n > 9 ? "" + n : "0" + n;
  };
    const artists = [];
  song?.album?.artists?.forEach((element) => {
    artists.push(element.name);
  });
    

    return (
        <div className='album-info-card'>
          <div className = 'song-title-container'>
            <p className='song-title'>{song?.name}</p> 
            </div>
            {/* <div className="album-name-container">
            <p>{song?.album?.name}</p>
            </div> */}
            <div className = "album-info">
            <p>{artists?.join(", ")}</p>
            </div>
            <div className='flex'>
            <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total}
          />
          </div>
            

        </div>
    );
};

export default AlbumInfo;
