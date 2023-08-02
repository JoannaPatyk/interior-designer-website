import React from 'react';
import links from '../utils/links';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Menu';

function SmallMenu() {
    return (
        <Wrapper>
            <nav className="menu">
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
