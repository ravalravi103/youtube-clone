import React from 'react';
import './SidebarMenu.css';

function SidebarMenu({title,Icon}) {
    return (
        <div className="sidebarMenu">
             <p>{title}</p>
             <Icon />
        </div>
    )
}

export default SidebarMenu
