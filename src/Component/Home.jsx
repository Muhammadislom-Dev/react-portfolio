import {Link} from 'react-router-dom';
import fullstack from '../asstets/img/fullstack.jpg';
import android from '../asstets/img/android.jpg';
import data from '../asstets/img/data-analistic.jpg';
import frontend from '../asstets/img/frontend.jpg'



const Home = () =>{
    return <>
  
    <div className="header">
        <div className="container">
            <div className="header-page">
            <Link to="/about" className='header-link'>About</Link>
            </div>
              <h2 className="header-name">
                  My skills
              </h2>
              <div className="header-box">
                <img src={fullstack} className="header-img" alt="" />
                <img src={data} className="header-img" alt="" />
                <img src={android} className="header-img" alt="" />
                <img src={frontend} className="header-img" alt="" />
              </div>
        </div>
    </div>
    </>
    

}

export default Home;