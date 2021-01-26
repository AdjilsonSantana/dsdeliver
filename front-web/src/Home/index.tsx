import './styles.css';
import { ReactComponent as MainImage } from './main.svg';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">
                            Please, make or order <br /> we will delivery <br /> for you
                        </h1>
                        <h3 className="home-subtitle">
                            Make your or order and <br /> we delivery in minutes
                        </h3>
                        <Link to="/orders" className="home-btn-order" >
                                    Order
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
            
        </>
    )
}

export default Home;