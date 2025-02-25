import './TechSkills.css';
import { ReactComponent as HtmlIcon } from "../../assets/html-icon.svg";
import { ReactComponent as CssIcon } from "../../assets/css-icon.svg";
import { ReactComponent as JavaScriptIcon } from "../../assets/js-icon.svg";
import { ReactComponent as ReactIcon } from "../../assets/react-icon.svg";
import { ReactComponent as TypescriptIcon } from "../../assets/typescript-icon.svg";
import { ReactComponent as MaterialIcon } from "../../assets/Material UI.svg";
import { ReactComponent as BootStrapIcon } from "../../assets/bootstrap-icon.svg";
import { ReactComponent as MantineIcon } from "../../assets/brand-mantine.svg";
import { ReactComponent as FlutterIcon } from "../../assets/Flutter.svg";
import { ReactComponent as DartIcon } from "../../assets/Dart.svg";
import { ReactComponent as CSharpIcon } from "../../assets/C# (CSharp).svg";
import { ReactComponent as CPlusPlusIcon } from "../../assets/C++ (CPlusPlus).svg";
import { ReactComponent as NET_Core_Logo } from "../../assets/NET_Core_Logo.svg";
import { ReactComponent as CIcon } from "../../assets/c-program-icon.svg";
import { ReactComponent as JavaIcon } from "../../assets/java-vertical.svg";
import { ReactComponent as PythonIcon } from "../../assets/python-svgrepo-com.svg";
import { ReactComponent as JspIcon } from "../../assets/jsp-open-file-format-with-java-logo-svgrepo-com.svg";
import { ReactComponent as NodejsIcon } from "../../assets/nodejs-logo-svgrepo-com.svg";
import { ReactComponent as PostGreaseIcon } from "../../assets/postgresql-logo-svgrepo-com.svg";
import { ReactComponent as MySqlIcon } from "../../assets/mysql-logo-svgrepo-com.svg";
import { ReactComponent as SSMSIcon } from "../../assets/microsoft-sql-server-logo-svgrepo-com.svg";
import { ReactComponent as FirebaseIcon } from "../../assets/firebase-svgrepo-com.svg";
import { ReactComponent as DjangoIcon } from "../../assets/django-svgrepo-com.svg";
import { ReactComponent as DotnetEFIcon } from "../../assets/dotnet-svgrepo-com.svg";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as GitIcon } from "../../assets/Git.svg";
import { ReactComponent as JwtIcon } from "../../assets/jwtio-json-web-token.svg";
import { ReactComponent as TomcatIcon } from "../../assets/tomcat-svgrepo-com.svg";
import { ReactComponent as WindowsIISIcon } from "../../assets/microsoft-windows-22.svg";
import { ReactComponent as PostmanIcon } from "../../assets/postman-svgrepo-com.svg";

import { ReactComponent as VisualStudioCodeIcon } from "../../assets/icons8-visual-studio-code-2019.svg";
import { ReactComponent as VisualStudio2022Icon } from "../../assets/icons8-visual-studio.svg";
import { ReactComponent as IntellijeaIcon } from "../../assets/IntelliJ_IDEA_Icon.svg";
import { ReactComponent as CommandLineIcon } from "../../assets/commandline.svg";
import { ReactComponent as AndroidIcon } from "../../assets/Android_robot.svg";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ScrollAnimation from "react-animate-on-scroll";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: '2px solid #007BFF',
    borderRadius: '12px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}));

const SvgWrapper = styled('div')({
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: '40px',
    height: '40px',
    '& svg': {
        width: '100%',
        height: '100%',
    },
});

export default function TechSkills() {

    return (
        <>
            <div className="row">
                <div className="material-box">Front-End</div>
            </div>
            <ScrollAnimation
                animateIn="fadeInLeft"
                delay={0.2 * 1000}
            >
                <div className="frontend-details">
                    <Box
                        sx={{
                            flexGrow: 1,
                            mt: 4,
                            width: '100%',
                            maxWidth: '1200px',
                            mx: 'auto',
                        }}
                    >
                        <Grid container columnSpacing={3} rowSpacing={2} sx={{ alignItems: 'stretch' }}>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <HtmlIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">HTML</div>
                                    <div className="xp-text"> XP 1.5 Years</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <CssIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">CSS</div>
                                    <div className="xp-text"> XP 1.5 Years</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} className="each-item-hover" >
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <JavaScriptIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">JavaScript</div>
                                    <div className="xp-text"> XP 1.5 Years</div>
                                </Item>
                            </Grid>

                            {/* Row 2 */}
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <ReactIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">React</div>
                                    <div className="xp-text"> XP 1.5 Years</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <TypescriptIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">TypeScript</div>
                                    <div className="xp-text"> XP 1.5 Years</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <MaterialIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">Material UI</div>
                                    <div className="xp-text"> XP 1.5 Years</div>
                                </Item>
                            </Grid>

                            {/* Row 3 */}
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <BootStrapIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">Bootstrap</div>
                                    <div className="xp-text">XP 1.5 Years</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <MantineIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">Mantine UI</div>
                                    <div className="xp-text">XP 1.5 Years</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <DartIcon />``
                                    </SvgWrapper>
                                    <div className="skills-frontend">Dart</div>
                                    <div className="xp-text">XP 1 Year</div>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </ScrollAnimation>


            <div className="row">
                <div className="material-box">Back-End</div>
            </div>
            <ScrollAnimation
                animateIn="fadeInLeft"
                delay={0.2 * 1000}
            >
                <div className="frontend-details">
                    <Box
                        sx={{
                            flexGrow: 1,
                            mt: 4,
                            width: '100%',
                            maxWidth: '1200px',
                            mx: 'auto',
                        }}
                    >
                        <Grid container columnSpacing={3} rowSpacing={2} sx={{ alignItems: 'stretch' }}>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <CSharpIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">C#</div>
                                    <div className="xp-text"> XP 1.5 Years</div>
                                </Item>
                            </Grid>

                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <JavaIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">Java</div>
                                    <div className="xp-text"> XP 1 Years</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <CPlusPlusIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">C++</div>
                                    <div className="xp-text"> XP 1 Years</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <PythonIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">Python</div>
                                    <div className="xp-text"> XP 1 Years</div>
                                </Item>
                            </Grid>

                            {/* Row 3 */}
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <CIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">C</div>
                                    <div className="xp-text">XP 1 Years</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <JspIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">Servlet & JSP</div>
                                    <div className="xp-text">XP 1 Years</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} sx={{ margin: '0 auto' }} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <NodejsIcon />``
                                    </SvgWrapper>
                                    <div className="skills-frontend">Node.js</div>
                                    <div className="xp-text">XP 6 Months</div>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </ScrollAnimation>

            <div className="row">
                <div className="material-box">Databases</div>
            </div>
            <ScrollAnimation
                animateIn="fadeInLeft"
                delay={0.2 * 1000}
            >
                <div className="frontend-details">
                    <Box
                        sx={{
                            flexGrow: 1,
                            mt: 4,
                            width: '100%',
                            maxWidth: '1200px',
                            mx: 'auto',
                        }}
                    >
                        <Grid container columnSpacing={3} rowSpacing={2} sx={{ alignItems: 'stretch' }}>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <MySqlIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">MySQL</div>
                                    <div className="xp-text"> XP 1.5 Years</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <SSMSIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">Microsoft SQL Server </div>
                                    <div className="xp-text"> XP 1.5 Years</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} className="each-item-hover" >
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <PostGreaseIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">PostgreSQL</div>
                                    <div className="xp-text"> XP 1 Years</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} sx={{ margin: '0 auto' }} className="each-item-hover" >
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <FirebaseIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">Firebase Cloud Firestore (NoSQL)</div>
                                    <div className="xp-text"> XP 1 Years</div>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </ScrollAnimation>

            <div className="row">
                <div className="material-box">Frameworks</div>
            </div>
            <ScrollAnimation
                animateIn="fadeInLeft"
                delay={0.2 * 1000}
            >
                <div className="frontend-details">
                    <Box
                        sx={{
                            flexGrow: 1,
                            mt: 4,
                            width: '100%',
                            maxWidth: '1200px',
                            mx: 'auto',
                        }}
                    >

                        <Grid container columnSpacing={3} rowSpacing={2} sx={{ alignItems: 'stretch' }}>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <NET_Core_Logo />
                                    </SvgWrapper>
                                    <div className="skills-frontend">ASP.NET Core</div>
                                    <div className="xp-text"> XP 1.5 Years</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <DotnetEFIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">Entity Framework Core</div>
                                    <div className="xp-text"> XP 1.5 Years</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <FlutterIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">Flutter </div>
                                    <div className="xp-text"> XP 1 Years</div>
                                </Item>
                            </Grid>

                            <Grid item xs={12} sm={4} sx={{ margin: '0 auto' }} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <DjangoIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">Django</div>
                                    <div className="xp-text"> XP 3 Months</div>
                                </Item>
                            </Grid>

                        </Grid>
                    </Box>
                </div>
            </ScrollAnimation>

            <div className="row">
                <div className="material-box">Authentication</div>
            </div>
            <ScrollAnimation
                animateIn="fadeInLeft"
                delay={0.2 * 1000}
            >
                <div className="frontend-details">
                    <Box
                        sx={{
                            flexGrow: 1,
                            mt: 4,
                            width: '100%',
                            maxWidth: '1200px',
                            mx: 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >

                        <Grid container columnSpacing={3} rowSpacing={2} sx={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <JwtIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">JWT Authentication</div>
                                    <div className="xp-text"> XP 1 Years</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <FirebaseIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">Firebase Authentication</div>
                                    <div className="xp-text"> XP 1 Years</div>
                                </Item>
                            </Grid>

                        </Grid>
                    </Box>
                </div>
            </ScrollAnimation>
            <div className="row">
                <div className="material-box">Version Control</div>
            </div>
            <ScrollAnimation
                animateIn="fadeInLeft"
                delay={0.2 * 1000}
            >
                <div className="frontend-details">
                    <Box
                        sx={{
                            flexGrow: 1,
                            mt: 4,
                            width: '100%',
                            maxWidth: '1200px',
                            mx: 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Grid
                            container
                            columnSpacing={3}
                            rowSpacing={2}
                            sx={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <GitIcon/>
                                    </SvgWrapper>
                                    <div className="skills-frontend">Git</div>
                                    <div className="xp-text"> XP 1.5 Years</div>
                                </Item>
                            </Grid>

                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <GithubIcon/>
                                    </SvgWrapper>
                                    <div className="skills-frontend">GitHub/Github-pages</div>
                                    <div className="xp-text"> XP 1.5 Years</div>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>

                </div>
            </ScrollAnimation>
            <div className="row">
                <div className="material-box">IDEs</div>
            </div>
            <ScrollAnimation
                animateIn="fadeInLeft"
                delay={0.2 * 1000}
            >
                <div className="frontend-details">
                    <Box
                        sx={{
                            flexGrow: 1,
                            mt: 4,
                            width: '100%',
                            maxWidth: '1200px',
                            mx: 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Grid
                            container
                            columnSpacing={3}
                            rowSpacing={2}
                            sx={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <VisualStudioCodeIcon/>
                                    </SvgWrapper>
                                    <div className="skills-frontend">Visual Studio Code</div>
                                    <div className="xp-text"> XP 1.5 Years</div>
                                </Item>
                            </Grid>

                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <VisualStudio2022Icon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">Visual Studio Community 2022</div>
                                    <div className="xp-text"> XP 1.5 Years</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <AndroidIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">Android Studio</div>
                                    <div className="xp-text"> XP 1 Years</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <IntellijeaIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">IntelliJ IDEA</div>
                                    <div className="xp-text"> XP 1 years</div>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>

                </div>
            </ScrollAnimation>
            <div className="row">
                <div className="material-box">Others</div>
            </div>
            <ScrollAnimation
                animateIn="fadeInLeft"
                delay={0.2 * 1000}
            >
                <div className="frontend-details">
                    <Box
                        sx={{
                            flexGrow: 1,
                            mt: 4,
                            width: '100%',
                            maxWidth: '1200px',
                            mx: 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Grid
                            container
                            columnSpacing={3}
                            rowSpacing={2}
                            sx={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <FirebaseIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">Firebase</div>
                                    <div className="xp-text"> XP 1 Years</div>
                                </Item>
                            </Grid>

                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <TomcatIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">Apache Tomcat Server</div>
                                    <div className="xp-text"> XP 6 Months</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <WindowsIISIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">Windows IIS Server</div>
                                    <div className="xp-text"> XP 6 Months</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <PostmanIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">Postman</div>
                                    <div className="xp-text"> XP 1.5 year</div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} className="each-item-hover">
                                <Item className="Item-Background">
                                    <SvgWrapper>
                                        <CommandLineIcon />
                                    </SvgWrapper>
                                    <div className="skills-frontend">Command Line Interface</div>
                                    <div className="xp-text"> XP 1.5 year</div>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>

                </div>
            </ScrollAnimation>
        </>
    );
}
