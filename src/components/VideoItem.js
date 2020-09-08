import './VideoItem.css';
import React from 'react'

const VideoItem = ({ video, onVideoSelect, searcher }) => {
    console.log(searcher);
    if (searcher === 'youtube') {
        return <div onClick={() => onVideoSelect(video, searcher)} className="video-item item">
        <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} id={video.id.videoId} />
        <div className="content">
            <div className="header">
                {video.snippet.title}
            </div>
        </div>
        </div>
    } else if (searcher === 'dailymotion') {
        return <div onClick={() => onVideoSelect(video, searcher )} className="video-item item">
        <img className="ui image" src={video.thumbnail_240_url} alt={video.title} id={video.id} />
        <div className="content">
            <div className="header">
                {video.title}
            </div>
        </div>
        </div>
    } else if (searcher === 'both') {
        return <div onClick={() => onVideoSelect(video, searcher)} className="video-item item">
        <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} id={video.id.videoId} />
        <div className="content">
            <div className="header">
                {video.snippet.title}
            </div>
        </div>
        </div>
    };
    return <div>ok</div>
};

export default VideoItem
    