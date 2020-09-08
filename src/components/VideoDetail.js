import React from 'react'

const VideoDetail = ({ video, searcher }) => {
    if (!video && searcher) {
        return <div>Please select a video !</div>
    }
    if (!searcher) {
        return <div>Please search for a video!</div>
    } else if (searcher === 'youtube') {
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
        return (
            <div>
                <div className="ui embed">
                    <iframe title="video player" src={videoSrc} frameBorder="0"></iframe>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    } else if (searcher === 'dailymotion') {
        const videoSrc = `https://www.dailymotion.com/embed/video/${video.id}`
        return (
            <div>
                <div className="ui embed">
                    <iframe title="video player" src={videoSrc} frameBorder="0"></iframe>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.title}</h4>
                    <p>{video.description}</p>
                </div>
            </div>
        );
    }
};

export default VideoDetail



