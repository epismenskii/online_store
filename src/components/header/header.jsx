import { useLocation, useNavigate } from 'react-router-dom';
import "./style.css"
import Button from '../../ui/button/Button';

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const pages = [
        { key: "/", label: "Home" },
        { key: "/basket", label: "Basket" },
        { key: "/favorites", label: "Favorites" },
        { key: "/orders", label: "Orders" },
        { key: "/auth", label: "Account" },
    ]

  return (
    <div className='container'>
        <div className='header'>
            <div className='logo'></div>

            <nav>
                <div className="header-nav">
                {pages.map(page => (
                    <Button
                        key={page.key}
                        className={location.pathname === page.key ? "nav current" : "nav"}
                        onClick={() => navigate(page.key)}
                    >
                        {page.label}
                    </Button>
                    
                ))}
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header
