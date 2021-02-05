import React from 'react';
import SidebarMenu from '../ReusableComponent/SidebarMenu/SidebarMenu';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import VideocamIcon from '@material-ui/icons/Videocam';
import HdIcon from '@material-ui/icons/Hd';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarMenu title="Home" Icon={HomeIcon}/>
            <SidebarMenu title="Tranding" Icon={WhatshotSharpIcon}/>
            <SidebarMenu title="Subscription" Icon={SubscriptionsSharpIcon}/>
            <SidebarMenu title="Library" Icon={VideoLibrarySharpIcon}/>
            <SidebarMenu title="History" Icon={HistorySharpIcon}/>
            <SidebarMenu title="Your Video" Icon={VideocamIcon}/>
            <SidebarMenu title="Your Movies" Icon={HdIcon}/>
            <SidebarMenu title="Watch Later" Icon={QueryBuilderIcon}/>
        </div>
    )
}

export default Sidebar
