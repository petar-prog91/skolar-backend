import React from 'react';
import { Link } from 'react-router';
import Logo from '../logo/logo';

const SideBar = () => (
    <div className={'sidebar__base'}>
        <div className="sidebar__container">
            <Logo />

            <ul className="sidebar__navList">
                <li className="sidebar__navItem">
                    <Link to="/">
                        <i className="fa fa-home" />
                        Home
                    </Link>
                </li>
                <li className="sidebar__navItem">
                    <Link to="/explore">
                        <i className="fa fa-compass" />
                        Explore
                    </Link>
                </li>
                <li className="sidebar__navItem">
                    <Link to="/not-watched">
                        <i className="fa fa-video-camera" />
                        Not Watched
                    </Link>
                </li>
            </ul>

        </div>
    </div>
);

export default SideBar;
