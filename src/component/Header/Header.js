import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'
import './Header.css';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon/>
                <img
                alt="logo"
                className="header__logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsuQY-DjveLgovQk7ACrwWyqZz5h0vlZdltw&usqp=CAU"/>
            </div>

            <div className="header__input">
                 <input type="text" placeholder="Search"/>
                 <SearchIcon className="header__input-btn"/>
            </div>

            <div className="header__icon">
               <VideoCallIcon/>
               <AppsIcon/>
               <NotificationsIcon/>
               <Avatar 
                  alt="Raval ravi"
                  src="https://yt3.ggpht.com/yti/ANoDKi5f1NVuZSC97swkW4CaF736lQhsCoJjV7VmlyAML0Q=s88-c-k-c0x00ffffff-no-rj-mo"/>
            </div>    
        </div>
    )
}

export default Header
