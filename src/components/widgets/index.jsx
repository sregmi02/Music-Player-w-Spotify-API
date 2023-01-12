import React, { useEffect, useState } from 'react';
import apiClient from '../../spotify';
import WidgetCard from './widgetCard';
import "./widgets.css"

const Widgets = ({artistId, artistName}) => {
    const [similar, setSimilar] = useState([]);
    const [featured, setFeatured] = useState([]);
    const[newRelease, setNewRelease] = useState([]);
    const[albums, setAlbums] = useState([]);
    const[yourAlbum, setYourAlbum] = useState([]);

    useEffect(() => {
        if (artistId) {
          apiClient
            .get(`/artists/${artistId}/related-artists`)
            .then((res) => {
              const a = res.data?.artists.slice(0, 7);
              setSimilar(a);
            })
            .catch((err) => console.error(err));
    
          apiClient
            .get(`/artists/${artistId}/albums`)
            .then((res) => {
              const a = res.data?.items.slice(0, 7);
              setYourAlbum(a);
            })
            .catch((err) => console.error(err));
    
          apiClient
            .get(`/browse/new-releases`)
            .then((res) => {
              const a = res.data?.albums.items.slice(5, 12);
              setNewRelease(a);
            })
            .catch((err) => console.error(err));
            apiClient
            .get(`/me/albums`)
            .then((res) => {
              const a = res.data?.items.slice(0, 7);
              setAlbums(a);
            })
            .catch((err) => console.error(err));
        }
      }, [artistId]);
    return (
        <div className='widgets-body flex '>
            <WidgetCard title = "Saved Albums" albums = {albums}/>
            <WidgetCard title = "New Releases" newRelease = {newRelease}/>
            <WidgetCard title = "Similar Artists" similar = {similar}/>
            <WidgetCard title = "Related Albums" yourAlbum= {yourAlbum}/>

            
            
        </div>
    );
};

export default Widgets;