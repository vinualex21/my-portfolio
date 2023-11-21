import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faLaptopCode, faBriefcase, faGear } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                {/* <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink> */}
                <NavLink exact="true" activeclassname="active" className="experience-link" to="/experience">
                    <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                    <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
                    <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
                </NavLink>
                {/* <NavLink exact="true" activeclassname="active" className="skillset-link" to="/skillset">
                    <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
                </NavLink> */}
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/vinualexvarghese/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/vinualex21"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;