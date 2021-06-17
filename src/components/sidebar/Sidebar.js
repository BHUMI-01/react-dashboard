import "./Sidebar.css";
import logo from "../../assests/logo.png"

const Sidebar =({ sidebarOpen, closeSidebar}) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <h1>Ansys</h1>
                </div>
                <i className="fa fa-times" id="sidebarIcon" onClick={() => closeSidebar()}></i>

            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
                
                <div className="sidebar__link">
                    <i className="fa fa-user-o"></i>
                    <a href="#">Clients</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-calculator">
                    </i>
                    <a href="#">Estimates</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-file-text-o"></i>
                    <a href="#">Invoices</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-users"></i>
                    <a href="#">Myteam</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-cog"></i>
                    <a href="#">Settings</a>
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar;