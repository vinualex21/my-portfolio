import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './index.scss';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const Experience = () => {
    return (
        <>
        <div className='experience-header'>
            <h1>Work Experience & Education</h1>
        </div>
        <VerticalTimeline className='project-timeline'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Sep 2022 - Sep 2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Software Engineer - L3</h3>
                <h4 className="vertical-timeline-element-subtitle">On The Beach Ltd.</h4>
                <h4 className="vertical-timeline-element-subtitle">York, UK</h4>
                <p>
                    - Improved Customer Booking Service team efficiency through backend solutions resulting in reduced resolution time and increased revenue
                </p>
                <p>
                    - Reduced cloud expenditure by strategically optimizing AWS infrastructure leveraging the power of Application Performance Management (APM) tools
                </p>
                <p>
                    - As Scrum Master, leveraged agile KPI metrics and sprint retrospectives to drive transformative enhancements in operational efficiency while optimizing the team's workflows
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Sep 2020 - Sep 2021"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Master of Science - Embedded Wireless Systems</h3>
                <h4 className="vertical-timeline-element-subtitle">University of York</h4>
                <h4 className="vertical-timeline-element-subtitle">York, UK</h4>
                <p>
                    - Project: IoT-based smart street light system
                </p>
                <p>
                    - Embedded C, Personal Effectiveness and Masterclass, Enterprise, Marketing and Management of Technology, Research Methods
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jun 2019 - Aug 2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">IT Analyst</h3>
                <h4 className="vertical-timeline-element-subtitle">Tata Consultancy Services Ltd</h4>
                <h4 className="vertical-timeline-element-subtitle">Kochi, India</h4>
                <p>
                    - Enhanced the energy bidding web application for a leading Australian power generation company, aligning it with the latest AEMO regulations
                </p>
                <p>
                    - Strengthened the organisation's Australian market by securing subsequent projects from the client as a result of successful pilot project delivery
                </p>
                <p>
                    - Analyzed, and estimated project risks while developing comprehensive mitigation plans. Executed mock drills to ensure seamless business continuity, a vital asset that proved invaluable during the challenges posed by the COVID-19 pandemic.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2017 - May 2019"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Systems Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Tata Consultancy Services Ltd</h4>
                <h4 className="vertical-timeline-element-subtitle">Kochi, India</h4>
                <p>
                    - Designed and developed contract management web applications for Canada's largest natural gas storage, transmission and distribution company
                </p>
                <p>
                    - Seamless collaboration with diverse cross-functional teams spanning the entire technology stack
                </p>
                <p>
                    - Mentored junior developers, nurturing their professional growth and development, while also guiding test engineers in transitioning into development roles
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Dec 2015 – April 2017"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Assistant System Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Tata Consultancy Services Ltd</h4>
                <h4 className="vertical-timeline-element-subtitle">Kochi, India</h4>
                <p>
                    - Reviewed functional specification documents and crafted detailed technical specification documents
                </p>
                <p>
                    - Designed and developed batch jobs for complex workflows
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Dec 2015 – April 2017"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Bachelor of Technology - Electronics & Communication Engineering</h3>
                <h4 className="vertical-timeline-element-subtitle">Govt. Model Engineering College</h4>
                <h4 className="vertical-timeline-element-subtitle">Kochi, India</h4>
                <p>
                    - Project: Voice based navigation system for the visually challenged
                </p>
                <p>
                    - C Programming, Engineering Mathematics, Computer Communication and Networks, Digital and Analog Communication, 
                    Signals and Systems, Digital System Design
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

export default Experience;