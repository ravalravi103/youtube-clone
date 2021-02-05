import React from 'react';
import SidebarMenu from '../ReusableComponent/SidebarMenu/SidebarMenu';
import HomeIcon from '@material-ui/icons/Home';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarMenu title="Home" icon={HomeIcon}/>
            <SidebarMenu />
            <SidebarMenu />
            <SidebarMenu />
            <SidebarMenu />
        </div>
    )
}

export default Sidebar
