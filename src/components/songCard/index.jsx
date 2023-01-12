import React from 'react';
import AlbumImage from './albumImage';
import AlbumInfo from './albumInfo';
import "./songCard.css";

const SongCard = ({ song, total, currentIndex, setCurrentIndex}) => {
    return (
            <div className="songCard-body flex">
                <AlbumImage url = {song?.album?.images[0].url}/>
                <AlbumInfo song={song} total = {total} currentIndex = {currentIndex} setCurrentIndex = {setCurrentIndex} />
            </div>
    );
};

export default SongCard;