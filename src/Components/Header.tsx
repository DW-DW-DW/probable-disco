import { Badge } from '@mantine/core';
import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    //const theme = useMantineTheme();

    return (
        <header>
            <div className="content-desktop">
                <div>
                    <Badge size="lg" radius={10} color="red">Testing</Badge>
                </div>
                <div className="navbar">
                    <div className="navbar-item"><Link to="section-one" smooth duration={500}>AA</Link></div>
                    <div className="navbar-item"><Link to="section-four" smooth duration={500}>BB</Link></div>
                    <div className="navbar-item"><Link to="section-five" smooth duration={500}>CC</Link></div>

                </div>
            </div>
        </header>
    );
};

export default Header;