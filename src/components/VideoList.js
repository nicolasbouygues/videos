import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect, searcher}) => {
    if (searcher === 'youtube') {
        const renderedList = videos.map((video) => {
            return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} searcher={searcher} />
        })
        return <div className="ui relaxed divided list">{renderedList}</div>
    } else if (searcher === 'dailymotion') {
        const renderedList = videos.map((video) => {
            return <VideoItem key={video.id} video={video} onVideoSelect={onVideoSelect} searcher={searcher} />
        })
        return <div className="ui relaxed divided list">{renderedList}</div>
    }
        return <div></div>
};

export default VideoList
