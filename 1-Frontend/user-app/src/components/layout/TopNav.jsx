import { Link } from "react-router-dom";

const TopNav = () => {
    return(
        <div className="top-nav d-flex justify-content-end mb-4">
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