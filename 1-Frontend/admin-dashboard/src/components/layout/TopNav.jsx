import Search from "../ui/Search";
import UserIcon from '../../assets/logo_try.jpg';


const TopNav = () => {
    return (
        <div className='mini-nav pt-3 mb-2 pb-2 justify-content-end pe-5'>
            <div className="search-bar d-flex">
                <i className="fa fa-search mt-1 me-1 text-secondary"></i>
                <Search />
            </div>
            <div className="ico-container">
                <i className='fa fa-moon-o'></i>
            </div>

            <div className="ico-container">         
                <i className="fa fa-ambulance"></i>
                <span>5</span>
            </div>

            <div className="ico-container">
                <i className='fa fa-envelope'></i>
                <span>4</span>
            </div>
            
            <div className="ico-container">
                <i className='fa fa-bell'></i>
                <span>2</span>
            </div>
            

            <div className="user ms-3">
                <div id="logo">
                    <img src={UserIcon} alt="User" />
                </div>
                <div className="user-identity ms-2">
                    <span>Leon Mosg <i className='fa fa-chevron-circle-down ms-3'></i></span><br/>
                    <span className='text-secondary fs-6'>mosg@afric.com</span>
                    
                </div>

            </div>
        </div>
    )
}

export default TopNav