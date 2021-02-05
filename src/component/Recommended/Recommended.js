import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import './Recommended.css'

function Recommended({imageSrc,videoTitle, chanelIcon,chanelName,viewsAndTime}) {
    return (
       <div className="video__card">
             <img src={imageSrc} className='video__card-image' alt={videoTitle}/>
             <div className="video__card-details">
                <div><Avatar 
                    alt="Raval ravi"
                    src={chanelIcon}/></div>
                    <div><p>{videoTitle}</p><p>{chanelName}</p><p>{viewsAndTime}</p></div>
            </div>
       </div>
    )
}

export default Recommended
