import React from 'react'
import Recommended from './Recommended';
import {videoData} from '../Data/VideoCardData';
import './RecommendedList.css';

function RecommendedList() {
    return (
        <div className="recommended">
            {videoData.map(video => <Recommended 
                 imageSrc={video.imageSrc}
                 videoTitle={video.videoTitle}
                 chanelIcon={video.chanelIcon}
                 viewsAndTime={video.viewsAndTime}
            /> )}
        </div>
    )
}

export default RecommendedList;
