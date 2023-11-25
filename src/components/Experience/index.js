import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './index.scss';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import data from '../../data/data.json';

const Experience = () => {
  return (
    <>
      <div className='experience-header'>
        <h1>Work Experience & Education</h1>
      </div>
      <VerticalTimeline className='project-timeline'>
        {
          data.experience.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={`${exp.start_date} - ${exp.end_date}`}
              iconStyle={{ background: exp.type.toLowerCase() === "work" ? 'rgb(33, 150, 243)' : 'rgb(233, 30, 99)', color: '#fff' }}
              icon={exp.type.toLowerCase() === "work" ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{exp.organization}</h4>
              <h4 className="vertical-timeline-element-subtitle">{exp.location}</h4>
              {
                exp.details.map((detail, i) => (
                  <p key={i}>- {detail}</p>
                ))
              }
            </VerticalTimelineElement>
          ))
        }

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        />
      </VerticalTimeline>
    </>
  )
}

export default Experience;