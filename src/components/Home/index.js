import './index.scss';
import { Link } from 'react-router-dom';
import ProfilePhoto from '../../assets/images/profile-photo.jpg'
import { Avatar } from '@mui/material';

const Home = () => {
    return (
        <div className="home-page">
            <Avatar alt="profile photo" className='profile-photo' src={ProfilePhoto}/>
            <div className="text-zone">
                <h1>Vinu Alex Varghese</h1>
                <h2>Software Engineer</h2>
                <p>
                    Experienced Software Engineer with a proven track record of six years specializing in the development of robust backend solutions tailored to meet complex business needs.
                </p>
                <p>
                    Adept at orchestrating efficient, agile project deliveries through the seamless integration of DevOps methodologies.
                </p>
                <p>
                    Continuously acknowledged for technical proficiency, excelling in the coordination of cross-functional teams to ensure timely project delivery.
                </p>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;