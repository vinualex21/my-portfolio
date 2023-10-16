import './index.scss';
import NRLogo from '../../assets/images/new_relic_logo.svg'
import CloudWatchLogo from '../../assets/images/amazon_cloudwatch.svg'
import GitLogo from '../../assets/images/git-logo.svg'
import GitLabLogo from '../../assets/images/gitlab-logo.svg'
import TFSLogo from '../../assets/images/tfs-logo.png'
import MiroLogo from '../../assets/images/miro-logo.png'
import JiraLogo from '../../assets/images/jira-logo.svg'
import ShortcutLogo from '../../assets/images/shortcut-logo.svg'
import NotionLogo from '../../assets/images/notion-logo.svg'
import VisualStudioLogo from '../../assets/images/visual-studio-logo.png'
import VSCodeLogo from '../../assets/images/vscode-logo.png'
import MySQLWorkbenchLogo from '../../assets/images/mysql-workbench-logo.png'
import OracleSQLDeveloperLogo from '../../assets/images/oracle-sql-developer-logo.png'
import SQLServerMgtStudioLogo from '../../assets/images/sql-server-mgt-studio-logo.png'
import KubernetesLogo from '../../assets/images/kubernetes-logo.png'
import TerraformLogo from '../../assets/images/terraform-logo.png'
import AWSLogo from '../../assets/images/aws-logo.png'
import DotNetLogo from '../../assets/images/dotnet-logo.svg'
import CSharpLogo from '../../assets/images/csharp-logo.png'
import RubyLogo from '../../assets/images/ruby-logo.png'
import MySQLLogo from '../../assets/images/mysql-logo.png'
import OracleLogo from '../../assets/images/oracle-logo.png'
import MSSQLLogo from '../../assets/images/mssql-logo.png'
import ReactLogo from '../../assets/images/react-logo.png'


const Skillset = () => {
    return (
        <>
            <div className='skillset-header'>
                <h1>Skillset</h1>
            </div>
            <div className='skills'>

            <div className='skill-category'>
                    <h3>Programming Languages & Frameworks</h3>
                </div>
                <div className='skill-items'>
                    <div className='skill-logo dotnet-container'>
                        <img src={DotNetLogo} />
                    </div>
                    <div className='skill-logo csharp-container'>
                        <img src={CSharpLogo} />
                    </div>
                    <div className='skill-logo ruby-container'>
                        <img src={RubyLogo} />
                    </div>
                    <div className='skill-logo mysql-container'>
                        <img src={MySQLLogo} />
                    </div>
                    <div className='skill-logo oracle-container'>
                        <img src={OracleLogo} />
                    </div>
                    <div className='skill-logo mssql-container'>
                        <img src={MSSQLLogo} />
                    </div>
                    <div className='skill-logo react-container'>
                        <img src={ReactLogo} />
                    </div>
                </div>

                <div className='skill-category'>
                    <h3>Development Tools & Environments</h3>
                </div>
                <div className='skill-items'>
                    <div className='skill-logo visual-studio-container'>
                        <img src={VisualStudioLogo} className='visual-studio-logo' alt='visual-studio' />
                    </div>
                    <div className='skill-logo vscode-container'>
                        <img src={VSCodeLogo} />
                    </div>
                    <div className='skill-logo mysql-workbench-container'>
                        <img src={MySQLWorkbenchLogo} />
                    </div>
                    <div className='skill-logo oracle-sql-developer-container'>
                        <img src={OracleSQLDeveloperLogo} />
                    </div>
                    <div className='skill-logo sql-server-mgt-studio-container'>
                        <img src={SQLServerMgtStudioLogo} />
                    </div>
                    <div className='skill-logo kubernetes-container'>
                        <img src={KubernetesLogo} />
                    </div>
                    <div className='skill-logo terraform-container'>
                        <img src={TerraformLogo} />
                    </div>
                    <div className='skill-logo aws-container'>
                        <img src={AWSLogo} />
                    </div>
                </div>

                <div className='skill-category'>
                    <h3>Collaboration & Project Management</h3>
                </div>
                <div className='skill-items'>
                    <div className='skill-logo git-container'>
                        <img src={GitLogo} className='git-logo' />
                    </div>
                    <div className='skill-logo gitlab-container'>
                        <img src={GitLabLogo} className='gitlab-logo' />
                    </div>
                    <div className='skill-logo tfs-container'>
                        <img src={TFSLogo} />
                    </div>
                    <div className='skill-logo miro-container'>
                        <img src={MiroLogo} />
                    </div>
                    <div className='skill-logo jira-container'>
                        <img src={JiraLogo} />
                    </div>
                    <div className='skill-logo shortcut-container'>
                        <img src={ShortcutLogo} />
                    </div>
                    <div className='skill-logo notion-container'>
                        <img src={NotionLogo} />
                    </div>
                </div>
                
                <div className='skill-category'>
                    <h3>Monitoring & Performance Tools</h3>
                </div>
                <div className='skill-items'>
                    <div className='skill-logo new-relic-container'>
                        <img src={NRLogo} className='new-relic-logo' />
                    </div>
                    <div className='skill-logo cloudwatch-container'>
                        <img src={CloudWatchLogo} className='cloudwatch-logo' />
                    </div>
                </div>

                <div className='skill-category'>
                    <h3>Software Development Methodologies</h3>
                </div>
                <div className='skill-items'>
                    <p>Agile (Scrum, Kanban)</p>
                    <p>Waterfall</p>
                    <p>Test-Driven Development(TDD)</p>
                    <p>Behavior-Driven Development(BDD)</p>
                </div>

                <div className='skill-category'>
                    <h3>Others...</h3>
                </div>
                <div className='skill-items'>
                    <p>WCF</p>
                    <p>Entity Framework</p>
                    <p>LINQ</p>
                    <p>WPF</p>
                    <p>REST API</p>
                    <p>RabbitMQ</p>
                </div>

            </div>
        </>
    )
}

export default Skillset;