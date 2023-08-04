import React from 'react';
import links from '../utils/links';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SmallMenu';

function SmallMenu() {
    return (
        <Wrapper>
            <nav className="menu">
                <Link to="/" className="menu-element" role="button">
                    główna
                </Link>
                {links.map(({ id, text, path }) => {
                    return (
                        <Link className="menu-element" role="button" key={id} to={path}>
                            {text}
                        </Link>
                    );
                })}
            </nav>
        </Wrapper>
    );
}

export default SmallMenu;
