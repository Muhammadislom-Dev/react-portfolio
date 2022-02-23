import {Link} from 'react-router-dom';
import Muhammadislom from '../asstets/img/Muhammadislom.jpg'

const About = () =>{
    return <>
      <div className="page">
          <div className="container">
              <div className="page-box">
                <Link to="/" className='page-link'>Home</Link>
              </div>
              <div className="page-home">
                  <h1 className='page-name'>Hi, I'm Muhammadislom!</h1>
                  <h5 className='page-text'>18 y.o Frontend Developer, YouTuber from Uzbekistan, Tashkent city, Welcome to my personal website.</h5>
                  <a className='page-links' href='https://t.me/Muhammadislom_Dev'> About me
                  </a>
                  <a className='page-github' href='https://github.com/muhammadislom2004'> Github
                  </a>
              </div>
            <div className="page-img">
                <img src={Muhammadislom} alt="" className="page-pic" />
            </div>
              
          </div>
      </div>
    </>
    

}

export default About;