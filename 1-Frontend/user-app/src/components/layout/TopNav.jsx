import { Link } from "react-router-dom";
import Search from "../ui/Search";

const TopNav = () => {
    return(
        <div className="top-nav d-flex justify-content-end mb-4">
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
            <Link to="/"><button className="ms-4 btn-custom">Logout</button></Link>
            

        </div>
    )
}

export default TopNav