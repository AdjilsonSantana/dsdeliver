import './styles.css';
import { ReactComponent as MainImage } from './main.svg';
import Footer from '../Footer';
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
                        <a className="home-btn-order" href="home">
                            Order
                   </a>
                        {/* <div className="home-image">
                        <MainImage />
                   </div> */}
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home;