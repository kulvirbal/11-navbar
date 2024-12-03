import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef();
    const linkRef = useRef();

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    }

    const linkStyle = {
        height: showLinks ? `${linkRef.current.getBoundingClientRect().height}px` : 0
    }

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo } className="logo" alt="logo" />
                    <button className="nav-toggle" onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                <div className="links-container" ref={ linksContainerRef } style={linkStyle}>
                    <ul className="links" ref={ linkRef }>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return <li key={id}>
                                <a href={ url }>{ text }</a>
                            </li>
                        })}
                    </ul>
                </div>
                {/* Social Links */}
                <ul className="social-links">
                    {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon;
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
