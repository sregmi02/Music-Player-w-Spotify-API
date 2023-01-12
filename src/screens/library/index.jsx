import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import APIKit from '../../spotify';
import {AiFillPlayCircle} from 'react-icons/ai';
import "./library.css";
import { useNavigate } from "react-router-dom";
const Library = () => {
    const [playlists,setPlaylists] = useState(null);


 useEffect(() => {
        APIKit.get('me/playlists').then(function(response){
        setPlaylists(response.data.items);
        console.log(response.data.items);
    });
}, []);
const navigate = useNavigate();
const playPlaylist = (id) => {
    navigate('/player', {state: {id:id}});

};
    return (
        <div className = "screen-container">
            <div className = "page-title">
            <div className = "left-page-title flex">
                    <div className = "app-name">BebopMusic</div>
                <div>Library</div>
            </div>
            </div>

            <div className="library-body">
            {playlists?.map(playlist => (
                <div className='playlist-card' key = {playlist.id} onClick={() => playPlaylist(playlist.id)}>
                    <img src = {playlist.images[0].url} className = "playlist-image" alt = "Playlist-Art"/>
                    <p className = "playlist-name">{playlist.name}</p>
                    <p className = "playlist-tracks">{playlist.tracks.total} Songs</p>
                    <div className = "playlist-fade">
                      
                    </div>
                    </div>
            ))}
            </div>
        </div>
    );
};

export default Library;