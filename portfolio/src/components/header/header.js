import './header.css';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';

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
                <button><ArrowUpwardOutlinedIcon></ArrowUpwardOutlinedIcon></button>
                <button><ArrowDownwardOutlinedIcon></ArrowDownwardOutlinedIcon></button>
            </div>
        </div>
    );
}

export default Header;