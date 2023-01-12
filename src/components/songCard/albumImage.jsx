import React from 'react';
import "./albumImage.css";

const AlbumImage = ({url}) => {
    return (
        <div className='albumImage flex'>
            <img src= {url} alt = "album-art" className = "album-art"/>
            </div>
        
    );
};

export default AlbumImage;