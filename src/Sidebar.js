import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow"

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { EmojiFlagsIcon } from '@material-ui/icons/EmojiFlags';
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import {ExpandMoreOutlined} from "@material-ui/icons";


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow
            src ="https://avatars2.githubusercontent.com/u/24712956?$=400&
            u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
            title="Rani Dhage"/>
           
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Informtion Center "/>
            <SidebarRow Icon={EmojiFlagsIcon} title="FRiends"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
        </div>
    )
}

export default Sidebar;
