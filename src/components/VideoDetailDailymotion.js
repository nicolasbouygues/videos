import React from 'react'

const VideoDetailDailymotion = ({ video }) => {
    if (!video) {
        return <div>Please search for a video !</div>
    }

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
};

export default VideoDetailDailymotion


