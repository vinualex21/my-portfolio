import './about.scss'
import data from '../../data/data.json';
import CustomCarousel from './carousel';

const About = () => {

    return (
        <div className='about-page'>
            <div className="about-header">
                <h1>About Me</h1>
            </div>
            <div className='text-zone'>
                <p>As a Software Engineer,
                    I have six years of experience in developing robust backend solutions for complex business needs.
                    I have worked with leading companies in the energy and travel sectors, such as Tata Consultancy Services
                    and On the Beach.
                </p>
                <p>
                    I have excelled in orchestrating efficient, agile project deliveries through the seamless integration of
                    DevOps methodologies. As a Scrum Master, I have enhanced team efficiency, leveraging agile KPI metrics and
                    sprint retrospectives. Additionally, I have a strong desire to grow my expertise in full-stack development
                    and cloud technologies, and am constantly learning new paradigms in software development.
                </p>
                <p>
                    I am actively seeking opportunities where I can bring my skills and vision to a dynamic
                    and forward-thinking team. I am driven by an unwavering commitment to excellence and a passion for solving
                    challenging problems. I am excited to embark on the journey of mastering emerging technologies and pioneering
                    new solutions that can create value and impact for customers and society.
                </p>
            </div>

            <h2>Courses & Certifications</h2>
            <CustomCarousel data={data.courses} />

            <h2>Self Development</h2>
            <CustomCarousel data={data.self_development} />

            <h2>Other Interests</h2>
            <CustomCarousel data={data.interests} />
        </div>
    )
}

export default About;