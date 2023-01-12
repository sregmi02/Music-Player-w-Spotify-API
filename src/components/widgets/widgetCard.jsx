import React from 'react';
import "./widgetCard.css"
import WidgetEntry from './widgetEntry';
const WidgetCard = ({title, similar, featured, newRelease, yourAlbum, topTracks, albums}) => {
    console.log(
        "similar",
        similar,
        "featured",
        featured,
        "newRelease",
        newRelease,
        "yourAlbum",
        yourAlbum,
        "topTracks",
        topTracks,
        "albums",
        albums

      );
    return (
        <div className = "widget-card-body">
            <p className='widget-title'>{title}</p>
            {similar
        ? similar.map((artist) => (
            <WidgetEntry
              title={artist?.name}
              subtitle={artist?.followers?.total + " Followers"}
              image={artist?.images[2]?.url}
            />
          ))
        : featured
        ? featured.map((playlist) => (
            <WidgetEntry
              title={playlist?.name}
              subtitle={playlist?.tracks?.total + " Songs"}
              image={playlist?.images[0]?.url}
            />
          ))
        : newRelease
        ? newRelease.map((album) => (
            <WidgetEntry
              title={album?.name}
              subtitle={album?.artists[0]?.name}
              image={album?.images[2]?.url}
            />
          ))
        : yourAlbum
        ? yourAlbum.map((album) => (
          <WidgetEntry
          title = {album?.name}
          subtitle = {album?.artists[0]?.name}
          image = {album?.images[2]?.url}
          />
        ))
        : topTracks
        ? topTracks.map((track) => (
          <WidgetEntry
          title = {track?.name}
          subtitle = {track?.album?.artists[0]?.name}
          image = {track?.album?.images[2]?.url}
          />
        ))
        : albums
        ? albums.map((album) => (
          <WidgetEntry
          title = {album?.album?.name}
          subtitle = {album?.album?.artists[0]?.name}
          image = {album?.album?.images[2]?.url}
          />
        ))
        :null}
            
        </div>
    );
};

export default WidgetCard;