import React from 'react';
import './TrandingVideoCard.css'

function TrandingVideoCard({trandingVideosrc, videoName, chanelName, videoViews,timeStamp,videoDesc}) {
    return (
        <div className="tranding_video_card">
             <div><img src={trandingVideosrc} alt={videoName}/></div>
             <div className="video__details">
                 <p>{videoName}</p>
                 <div className="video__details-basic">
                    <small className="channelName">{chanelName}</small>
                    <small className="videoViews">{videoViews}</small>
                    <small className="timeStapm">{timeStamp}</small>
                 </div>
                 <small className="videoDesc">{videoDesc}</small>
             </div>
        </div>
    )
}

export default TrandingVideoCard
