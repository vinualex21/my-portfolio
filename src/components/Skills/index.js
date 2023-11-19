import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from "@mui/material";
import './index.scss';
import { Chip } from '@mui/material';
import data from '../../data/data.json';

const Skills = () => {
  return (
    <>
      <div className='skills-header'>
        <h1>Skills</h1>
      </div>
      <div className='skills-container'>
        <StyledEngineProvider injectFirst>
          {
            data.skills.map((skill, index) => (
              <Card key={index} className='skill-card'>
                <CardContent className='skill-card-content'>
                  <h3>{skill.category}</h3>
                  <div className='skill-card-item'>
                    {
                      skill.technologies.map((tech, i) => (
                        <Chip key={i} label={tech} className='skill-tag' variant="outlined" />
                      ))
                    }
                  </div>
                </CardContent>
              </Card>
            ))
          }
        </StyledEngineProvider>
      </div>
    </>
  )
}

export default Skills;