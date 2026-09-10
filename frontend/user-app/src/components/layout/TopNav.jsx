import { Link } from "react-router-dom";
import Search from "../ui/Search";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const TopNav = () => {
    const { user, logout } = useContext(AuthContext);
    const [dropdown, setDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setDropdown(dropdown === null ? menu : null);
    }

    return(
        <div className="top-nav d-flex justify-content-end mb-2">
            <div className="search-bar d-flex">
                <i className="fa fa-search mt-1 me-1 text-secondary"></i>
                <Search />
            </div>
            <div className="icon-container">
                <i className="fa fa-moon-o"></i>
            </div>
            <div className="icon-container">
                <i className="fa fa-envelope"></i>
                <span>5</span>
            </div>
            <div className="icon-container">
                <i className="fa fa-bell"></i>
                <span>3</span>
            </div>
            <div className="profile-container">
                <div className="user-account ms-4 me-2" onClick={() => toggleDropdown("profile")}>
                    <p className="profile-box me-1">
                        {user && user.first_name ? user.first_name.charAt(0).toUpperCase() : "G"}
                    </p>
                    <div className="mt-2">
                        <span className="me-2">Hi, {user ? user.first_name : "Guest" }</span>
                        <i className={`fa ${dropdown === "profile" ? "fa-chevron-down" : "fa-chevron-right"}`}></i>
                    </div>
                </div>
                {dropdown === "profile" && 
                    <div className="profile-dropdown">
                        <ul>
                            <li>View Profile</li>
                            <li onClick={logout}>Logout</li>
                        </ul>
                    </div>
                }
            </div>
            
            

        </div>
    )
}

export default TopNav