import React from 'react';
import './SidebarMenu.css';

function SidebarMenu({title, Icon}) {
    return (
        <div className="sidebarMenu">
             <Icon className="sidebarMenu__icon"/>
             <p className="sidebarMenu__text">{title}</p>
        </div>
    )
}

export default SidebarMenu
