import React from 'react';

class Header extends React.Component {
	render() {
        return(
            <nav className="u02nav">
                <div className="u02 u02dtop u02init" id="u02">
                    <div id="u02skip2content">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a id="u02skip2c" href="#maincontent">Skip to Content</a></li>
                            <li><a id="u02skip2s" href="#skip_to_search_form">Skip to Search</a></li>
                        </ul>
                    </div>
            
                    <div className="u02w1">

                        <div className="u02logo">
                            <div className="u02logow1">
                                <a className="o_icon" href="https://www.oracle.com">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
		)
	}
}

export default Header;