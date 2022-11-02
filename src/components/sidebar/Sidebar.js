import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TableViewIcon from '@mui/icons-material/TableView';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">lamadmin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <PersonOutlineOutlinedIcon className="icon" />
                        <span>Users</span>
                    </li>
                    <li>
                        <ProductionQuantityLimitsIcon className="icon" />
                        <span>Products</span>
                    </li>
                    <li>
                        <BookmarkBorderIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <TableViewIcon className="icon" />
                        <span>Start</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountBoxOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="color0ption"></div>
                <div className="color0ption"></div>
            </div>
        </div>
    );
};

export default Sidebar;
