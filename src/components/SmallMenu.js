import React, { useState } from 'react';
import links from '../utils/links';
import { Link } from 'react-router-dom';
import { HiMenu, HiOutlineX } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/SmallMenu';

function SmallMenu() {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const toggleIcon = isOpen ? <HiOutlineX onClick={handleToggle} /> : <HiMenu onClick={handleToggle} />;

    return (
        <Wrapper>
            <div className="menu-icon">{toggleIcon}</div>
            <div className={`${isOpen ? 'menu-box menu-open' : 'menu-box '}`}>
                <nav className="menu">
                    <Link to="/" className="menu-element" role="button">
                        start
                    </Link>
                    {links.map(({ id, text, path }) => {
                        return (
                            <Link className="menu-element" role="button" key={id} to={path}>
                                {text}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </Wrapper>
    );
}

export default SmallMenu;
