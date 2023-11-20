import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './index.scss';
import { Chip } from '@mui/material';

const Projects = () => {
    return (
        <>
        <div className='projects-header'>
            <h1>Projects and Developments</h1>
        </div>
        <VerticalTimeline className='project-timeline'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Oct 2023 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                {
                    ['React.js', 'JSX', 'HTML', 'CSS'].map((tech, i) => (
                        <Chip key={i} label={tech} className='project-technology' size='small'/>
                    ))
                }
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
            >
                {
                    ['.NET', 'C#', 'Ruby', 'Docker', 'Kubernetes', 'Terraform', 'AWS', 'GitLab', 'RabbitMQ'].map((tech, i) => (
                        <Chip key={i} label={tech} className='project-technology' size='small'/>
                    ))
                }
                <h3 className="vertical-timeline-element-title">Holiday Booking Back Office System</h3>
                <h4 className="vertical-timeline-element-subtitle">On The Beach Ltd.</h4>
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
            >
                {
                    ['.NET', 'C#', 'Microsoft Silverlight', 'WPF'].map((tech, i) => (
                        <Chip key={i} label={tech} className='project-technology' size='small'/>
                    ))
                }
                <h3 className="vertical-timeline-element-title">Energy Bidding System</h3>
                <h4 className="vertical-timeline-element-subtitle">Tata Consultancy Services Ltd</h4>
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
            >
                {
                    ['ASP.NET', 'VB', 'MS SQL'].map((tech, i) => (
                        <Chip key={i} label={tech} className='project-technology' size='small'/>
                    ))
                }
                <h3 className="vertical-timeline-element-title">Resource Utilisation Monitoring System</h3>
                <h4 className="vertical-timeline-element-subtitle">Tata Consultancy Services Ltd</h4>
                <h4 className="vertical-timeline-element-subtitle">Kochi, India</h4>
                <p>
                    - Enhanced a web application designed to oversee project management and optimize resource allocation for a prominent North American gas and electricity enterprise.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Dec 2015 – Aug 2019"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                {
                    ['.NET', 'C#', 'WCF', 'Entity Framework', 'LINQ', 'Oracle', 'TFS', 'Waterfall'].map((tech, i) => (
                        <Chip key={i} label={tech} className='project-technology' size='small'/>
                    ))
                }
                <h3 className="vertical-timeline-element-title">Contract Management System</h3>
                <h4 className="vertical-timeline-element-subtitle">Tata Consultancy Services Ltd</h4>
                <h4 className="vertical-timeline-element-subtitle">Kochi, India</h4>
                <p>
                    - Designed and developed contract management web applications for Canada's largest natural gas storage, transmission and distribution company
                </p>
                <p>
                    - Developed WCF services for contract management, integrated with <i>K2 Blackpearl</i> UI tool for handling complex workflows
                </p>
                <p>
                    - Integrated with <i>EngageOne</i> tool for document generation
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            />
        </VerticalTimeline>
        </>
    )
}

export default Projects;