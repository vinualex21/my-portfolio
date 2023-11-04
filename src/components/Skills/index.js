import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from "@mui/material";
import './index.scss';
import { Chip } from '@mui/material';

const Skills = () => {
    return (
        <>
            <div className='skills-header'>
                <h1>Skills</h1>
            </div>
            <div className='skills-container'>
                <StyledEngineProvider injectFirst>
                    <Card className='skill-card'>
                        <CardContent className='skill-card-content'>
                            <h3>Frontend</h3>
                            <div>
                                {
                                    ['HTML', 'CSS', 'React.js (currenty learning)']
                                    .map((tech, i) => (
                                        <Chip key={i} label={tech} className='skill-tag' variant="outlined" />
                                    ))
                                }
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='skill-card'>
                        <CardContent className='skill-card-content'>
                            <h3>Backend</h3>
                            <div>
                                {
                                    ['.NET', 'C#', 'WCF', 'LINQ', 'Entity Framework', 'WPF', 'Ruby', 'REST APIs', 'RabbitMQ']
                                    .map((tech, i) => (
                                        <Chip key={i} label={tech} className='skill-tag' variant="outlined" />
                                    ))
                                }
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='skill-card'>
                        <CardContent className='skill-card-content'>
                            <h3>Database</h3>
                            <div>
                                {
                                    ['MySQL', 'Oracle', 'MSSQL']
                                    .map((tech, i) => (
                                        <Chip key={i} label={tech} className='skill-tag' variant="outlined" />
                                    ))
                                }
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='skill-card'>
                        <CardContent className='skill-card-content'>
                            <h3>DevOps</h3>
                            <div>
                                {
                                    ['Kuberetes', 'Terraform', 'AWS']
                                    .map((tech, i) => (
                                        <Chip key={i} label={tech} className='skill-tag' variant="outlined" />
                                    ))
                                }
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='skill-card'>
                        <CardContent className='skill-card-content'>
                            <h3>Development Tools</h3>
                            <div>
                                {
                                ['Visual Studio', 'VS Code', 'MySQL Workbench', 'Oracle SQL Developer',
                                'SQL Server Management Studio']
                                    .map((tech, i) => (
                                        <Chip key={i} label={tech} className='skill-tag' variant="outlined" />
                                    ))
                                }
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='skill-card'>
                        <CardContent className='skill-card-content'>
                            <h3>Project Management & Collaboration</h3>
                            <div>
                                {
                                ['Git', 'GitLab', 'TFS', 'Miro', 'Jira', 'Shortcut', 'Notion', 'MS Office']
                                    .map((tech, i) => (
                                        <Chip key={i} label={tech} className='skill-tag' variant="outlined" />
                                    ))
                                }
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='skill-card'>
                        <CardContent className='skill-card-content'>
                            <h3>Software Development Methodologies</h3>
                            {
                                ['Agile (Scrum, Kanban)', 'Waterfall', 'TDD', 'BDD']
                                .map((tech, i) => (
                                    <Chip key={i} label={tech} className='skill-tag' variant="outlined" />
                                ))
                            }
                        </CardContent>
                    </Card>
                    <Card className='skill-card'>
                        <CardContent className='skill-card-content'>
                            <h3>Monitoring & Performance Tools</h3>
                             {
                                ['New Relic', 'AWS CloudWatch']
                                .map((tech, i) => (
                                    <Chip key={i} label={tech} className='skill-tag' variant="outlined" />
                                ))
                            }
                        </CardContent>
                    </Card>
                </StyledEngineProvider>
            </div>
        </>
    )
}

export default Skills;