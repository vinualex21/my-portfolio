import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './index.scss';

const Projects = () => {
    return (
        <>
        <div className='projects-header'>
            <h1>Projects and Developments</h1>
        </div>
        <VerticalTimeline className='project-timeline'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Oct 2023 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">My Portfolio</h3>
                <h4 className="vertical-timeline-element-subtitle">York, UK</h4>
                <p>
                    - React app to showcase my skills and expertise
                </p>
                <p>
                    - Dive into front-end development
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Sep 2022 - Sep 2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Holiday Booking Back Office System</h3>
                <h4 className="vertical-timeline-element-subtitle">York, UK</h4>
                <p>
                    - Enhanced back office system resulting in reduced time to resolution
                </p>
                <p>
                    - Developed new feature to take in early bookings that put the company ahead of its competitors
                </p>
                <p>
                    - Reduced cloud expenditure by strategically optimizing AWS infrastructure leveraging the power of 
                    Application Performance Management (APM) tools.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jan 2020 - Aug 2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Energy Bidding System</h3>
                <h4 className="vertical-timeline-element-subtitle">Kochi, India</h4>
                <p>
                    - Enhanced the energy bidding web application for a leading Australian power generation company, aligning it with the latest AEMO regulations
                </p>
                <p>
                    - Converted the Microsoft Silverlight application to WPF
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Sep 2019 - Dec 2019"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Resource Utilisation Monitoring System</h3>
                <h4 className="vertical-timeline-element-subtitle">Kochi, India</h4>
                <p>
                    - Enhanced a web application designed to oversee project management and optimize resource allocation for a prominent North American gas and electricity enterprise.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Dec 2015 – Aug 2019"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Contract Management System</h3>
                <h4 className="vertical-timeline-element-subtitle">Kochi, India</h4>
                <p>
                    - Designed and developed contract management web applications for Canada's largest natural gas storage, transmission and distribution company
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                // icon={<StarIcon />}
            />
        </VerticalTimeline>
        </>
    )
}

export default Projects;