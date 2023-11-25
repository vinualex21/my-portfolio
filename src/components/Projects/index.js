import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './index.scss';
import { Chip } from '@mui/material';
import data from '../../data/data.json';

const Projects = () => {
  return (
    <>
      <div className='projects-header'>
        <h1>Projects and Developments</h1>
      </div>
      <VerticalTimeline className='project-timeline'>
          {
            data.projects.map((project, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                date={`${project.start_date} - ${project.end_date}`}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              >
                {
                  project.technologies.map((tech, i) => (
                    <Chip key={i} label={tech} className='project-technology' size='small' />
                  ))
                }
                <h3 className="vertical-timeline-element-title">{project.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{project.company}</h4>
                <h4 className="vertical-timeline-element-subtitle">{project.location}</h4>
                {
                  project.details.map((detail, i) => (
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

export default Projects;