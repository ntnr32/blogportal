import React from 'react'
import { Link } from 'gatsby'

import HomeIcon from '../../static/svgs/home.svg'
import SettingsIcon from '../../static/svgs/settings.svg'
import SearchIcon from '../../static/svgs/search.svg'

const links = [{
    name: "home",
    path: "/",
    icon: <HomeIcon className="nav-link-size nav-link" />
}, {
    name: "settings",
    path: "/",
    icon: <SettingsIcon className="nav-link-size nav-link" />
}, {
    name: "search",
    path: "/",
    icon: <SearchIcon className="nav-link-size nav-link" />
},]

const navLinks = links.map(link =>
    <li key={link.name}>
        <Link to={link.path}>{link.icon}</Link>
    </li>
)

export default navLinks;