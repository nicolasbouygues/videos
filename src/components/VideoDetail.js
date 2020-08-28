import React from 'react'

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading</div>
    } else {
        return <div className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="VideoImage" />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
            </div>
        } 
};

export default VideoDetail
