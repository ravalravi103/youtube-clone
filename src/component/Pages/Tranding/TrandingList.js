import React from 'react';
import TrandingVideoCard from './TrandingVideoCard';
import {trandingVideoData} from '../../Data/TrandingVideoData';
import './TrandingList.css'

function TrandingList() {
    return (
        <div className="tranding">
            {trandingVideoData.map(video =>  <TrandingVideoCard 
                trandingVideosrc={video.trandingVideosrc}
                videoName={video.videoName}
                chanelName={video.chanelName}
                videoViews={video.videoViews}
                timeStamp={video.startTime}
                videoDesc={video.videoDesc}
             /> )}    
        </div>
    )
}

export default TrandingList
