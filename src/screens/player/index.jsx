import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./player.css";
import "../../shared/globalStyles.css";
import apiClient from "../../spotify";
import SongCard from '../../components/songCard';
import Queue from '../../components/queue';
import AudioPlayer from '../../components/audioPlayer';
import Widgets from '../../components/widgets';
import { IconContext } from "react-icons";
import { AiFillHome } from 'react-icons/ai';


const Player = () => {
    const location = useLocation();
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState([]);
    const [currentIndex, setCurrentIndex] = useState([]);
    useEffect(() => {
        if (location.state){
        apiClient.get("playlists/" + location.state?.id + "/tracks")
        .then (res=>{
            setTracks(res.data.items);
            setCurrentTrack(res.data.items[0].track);
        });
        } else 
        console.log(currentTrack);
    },[location.state]);

    // useEffect(() => {
    //     if (location.state){
    //     apiClient.get("albums/" + location.state?.id + "/tracks")
    //     .then (res=>{
    //         setTracks(res.data.items);
    //         setCurrentTrack(res.data.items[0].track);
    //     });
    //     } else 
    //     console.log(currentTrack);
    // },[location.state]);



    useEffect(() => {
        setCurrentTrack(tracks[currentIndex]?.track);
      }, [currentIndex, tracks]);
    
    return (
        
        <div className='screen-container flex'>
            <div className = "left-player-body">

                <div className = "feed-page-title">
                    <div className = "left-feed-page-title flex">
                    <div className = "app-name">BebopMusic</div>
                    <div className='feed'>Feed</div>
                   
                   </div>
                    </div>

                <Widgets artistId = {currentTrack?.album?.artists[0]?.id} artistName = {currentTrack?.album?.artists[0]?.name}/>

            </div>
            <div className="right-player-body">
                <div className='library-page-title'>
                <div className='library'>
                        <Link to ="/" className = "library-btn">
                        <IconContext.Provider value={{ size: "35px", color: "#c8c2d3" }}>
                        <AiFillHome className='library-btn'/>
                        </IconContext.Provider>
                        </Link>
                    </div>
                </div>
            <SongCard song = {currentTrack} total={tracks} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
            <Queue tracks = {tracks} setCurrentIndex = {setCurrentIndex}/>
            </div> 
        </div>
    );
};

export default Player;