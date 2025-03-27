import { Link, useNavigate } from "react-router-dom";
import Search from "../ui/Search";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const TopNav = () => {
    const { user, logout } = useContext(AuthContext);
    const [dropdown, setDropdown] = useState(null);
    const navigate = useNavigate();

    const toggleDropdown = (menu) => {
        setDropdown(dropdown === menu ? null : menu);
    };

    const handleViewProfile = () => {
        navigate('/account');
        setDropdown(null);
    };

    return (
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
                {user ? (
                    <>
                        <div className="user-account ms-4 me-2" onClick={() => toggleDropdown("profile")}>
                            <p className="profile-box me-1">
                                {user.first_name.charAt(0).toUpperCase()}
                            </p>
                            <div className="mt-2">
                                <span className="me-2">Hi, {user.first_name}</span>
                                <i className={`fa ${dropdown === "profile" ? "fa-chevron-down" : "fa-chevron-right"}`}></i>
                            </div>
                        </div>
                        {dropdown === "profile" && (
                            <div className="profile-dropdown">
                                <ul>
                                    <li onClick={handleViewProfile}>View Profile</li>
                                    <li onClick={logout}>Logout</li>
                                </ul>
                            </div>
                        )}
                    </>
                ) : (
                    <Link to="/login" className="btn btn-primary ms-3">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default TopNav;