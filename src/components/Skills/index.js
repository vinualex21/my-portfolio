import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import DotNetLogo from '../../assets/images/dotnet-logo.svg';
import RubyLogo from '../../assets/images/ruby-logo.png';
import { StyledEngineProvider } from "@mui/material";
import './index.scss';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Skills = () => {
    return (
        <>
            <div className='skills-header'>
                <h1>Skills</h1>
            </div>
            <div className='skills'>
                <StyledEngineProvider injectFirst>
                    <Card className='skill-card'>
                        <CardContent className='skill-card-content'>
                            {/* <Avatar src={DotNetLogo} alt='dotnet-logo' className='skill-logo' /> */}
                            <h3>Programming Languages & Frameworks</h3>
                            {
                                ['.NET (C#, WCF, Entity Framework, LINQ, WPF)', 'Ruby', 'SQL (MySQL, Oracle, MSSQL)',
                                    'REST APIs', 'RabbitMQ', 'React.js']
                                    .map((skill, j) => (
                                        <p key={j} className='skill-item'>{skill}</p>
                                    ))
                            }
                        </CardContent>
                    </Card>
                    <Card className='skill-card'>
                        <CardContent className='skill-card-content'>
                            {/* <Avatar src={RubyLogo} alt='ruby-logo' className='skill-logo' /> */}
                            <h3>Development Tools & Environments</h3>
                            {
                                ['Visual Studio', 'VS Code', 'MySQL Workbench', 'Oracle SQL Developer',
                                    'SQL Server Management Studio', 'Kuberetes', 'Terraform', 'AWS']
                                    .map((skill, j) => (
                                        <p key={j} className='skill-item'>{skill}</p>
                                    ))
                            }
                        </CardContent>
                    </Card>
                    <Card className='skill-card'>
                        <CardContent className='skill-card-content'>
                            {/* <Avatar alt='ruby-logo' className='skill-logo'>
                            <FontAwesomeIcon icon={faDatabase} color="#4d4d4e" size="2xl"/>
                        </Avatar> */}
                            <h3>Collaboration & Project Management</h3>
                            {
                                ['Git', 'GitLab', 'TFS', 'Miro', 'Jira', 'Shortcut', 'Notion', 'MS Office']
                                    .map((skill, j) => (
                                        <p key={j} className='skill-item'>{skill}</p>
                                    ))
                            }
                        </CardContent>
                    </Card>


                    <Card className='skill-card'>
                        <CardContent className='skill-card-content'>
                            {/* <Avatar alt='ruby-logo' className='skill-logo'>
                            <FontAwesomeIcon icon={faDatabase} color="#4d4d4e" size="2xl"/>
                        </Avatar> */}
                            <h3>Software Development Methodologies</h3>
                            {
                                ['Agile (Scrum, Kanban)', 'Waterfall', 'Test-Driven Development (TDD)',
                                    'Behavior-Driven Development (BDD)']
                                    .map((skill, j) => (
                                        <p key={j} className='skill-item'>{skill}</p>
                                    ))
                            }
                        </CardContent>
                    </Card>
                    <Card className='skill-card'>
                        <CardContent className='skill-card-content'>
                            <h3>Monitoring & Performance Tools</h3>
                            {
                                ['New Relic', 'AWS CloudWatch']
                                    .map((skill, j) => (
                                        <p key={j} className='skill-item'>{skill}</p>
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