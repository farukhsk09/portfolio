import './header.css';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                {/* <img alt="logo"></img> */}
                <p>SS</p>
            </div>
            <div className="header-name">
                <p>My Portfolio</p>
            </div>
            <div className="navigation">
                <p>UP</p>
                <p>DOWN</p>
            </div>
        </div>
    );
}

export default Header;