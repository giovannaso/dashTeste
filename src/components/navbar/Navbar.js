import "./Navbar.css";
import avatar from "../../assets/avatar.svg";

const Navbar = ({ sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick = { () => openSidebar()}>
                <i className= "fa fa-filter"></i>
            </div>
            <div className="navbar__left">
                <a href="#">Home</a>
                <a className="active_link" href="#">Meus Dashboards</a>
                <a href="#">Solicitar acessos</a>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className = "fa fa-search"> </i>
                </a>
                <a href="#">
                    <i className = "fa fa-bell-o"></i>
                </a>
                <a href="#">
                    <img width="30" src={avatar} alt="avatar"></img>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;