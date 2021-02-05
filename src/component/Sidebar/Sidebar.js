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
import {BrowserRouter as Router,Link} from "react-router-dom";
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <Link to='/' exact><SidebarMenu title="Home" Icon={HomeIcon}/></Link>
             <Link to='/tranding'><SidebarMenu title="Tranding" Icon={WhatshotSharpIcon}/></Link>
             <Link to='/subscription'><SidebarMenu title="Subscription" Icon={SubscriptionsSharpIcon}/></Link>
             <Link to='/library'><SidebarMenu title="Library" Icon={VideoLibrarySharpIcon}/></Link>
             <Link to='/history'><SidebarMenu title="History" Icon={HistorySharpIcon}/></Link>
             <Link to='/yourVideo'><SidebarMenu title="Your Video" Icon={VideocamIcon}/></Link>
             <Link to='/yourMovies'><SidebarMenu title="Your Movies" Icon={HdIcon}/></Link>
             <Link to='/watchLater'><SidebarMenu title="Watch Later" Icon={QueryBuilderIcon}/></Link>
        </div>
    )
}

export default Sidebar
