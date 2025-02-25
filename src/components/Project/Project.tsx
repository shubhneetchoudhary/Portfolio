import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            
            </header>
            <div className="body">
              <h3>Cheezoo </h3>
              <p>
                <strong>Role:</strong> Full Stack Developer
                <br />
                <strong>Description:</strong>
                Clients can directly book nearby photographers by selecting the event date and the location where the event will be organized.

                <br />
                <strong>Responsibilities:</strong>
              </p>
              <ul>
                <li>➤ Developed the frontend using React.js , ensuring a responsive and interactive user interface.</li>
                <li>➤ Designed and implemented RESTful APIs using ASP.NET Core Web API for efficient data exchange between frontend and backend.</li>
                <li>➤ Performed CRUD operations on SQL Server using LINQ for ORM-based database interactions.</li>
                <li>➤ Collaborated with the team to discuss requirements and deliver a user-friendly experience.</li>
                <li>➤ Developed a cross-platform mobile application using Flutter</li>
                <li>
                  ➤ Participated in code reviews to maintain coding standards
                  and enhance code quality.
                </li>
                <li>➤ Integrated a third-party image compression API to compress large images for improved performance and faster loading speeds.</li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Dotnet Web API</li>
                <li>SQL Server</li>
                <li>LINQ</li>
                <li>Firebase</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
       
            </header>
            <div className="body">
              <h3>DSG Delivery Dashboard</h3>
              <p>
                <strong>Role:</strong> Full Stack Developer / .NET Developer
                <br />
                <strong>Description:</strong> A tool for project managers to
                enter and track KPIs data.
                <br />
                <strong>Team:</strong> Two members
                <br />
                <strong>Responsibilities:</strong>
              </p>
              <ul style={{ listStyleType: "'➤'" }}>
                <li>
                  ➤ Developed the application end-to-end, including design,
                  development, and deployment.
                </li>
                <li>
                  ➤ Used .NET Core and Entity Framework Core for backend
                  development to build scalable web APIs.
                </li>
                <li>
                  ➤ Implemented responsive frontend interfaces with React.js for
                  an intuitive user experience.
                </li>
                <li>
                  ➤ Integrated JWT authentication for secure access control.
                </li>
                <li>
                  ➤ Utilized AWS Lambda, API Gateway, and DynamoDB for
                  serverless components and data management.
                </li>
                <li>
                  ➤ Collaborated with project managers to gather requirements
                  and deliver tailored solutions.
                </li>
                <li>
                  ➤ Participated in code reviews to maintain coding standards
                  and enhance code quality.
                </li>
              </ul>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React.js</li>
                <li>Dotnet Web Api</li> <li>Web Services</li>{" "}
                <li>MySql Server</li>{" "}
                <li>Jwt</li>
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
            
            </header>
            <div className="body">
              <h3>Tutoplast Application</h3>
              <p>
                <strong>Role:</strong> Full Stack Developer / .NET Developer
                <br />
                <strong>Project:</strong> Tutoplast Application
                <br />
                <strong>Domain:</strong> US-Healthcare
                <br />
                <strong>Responsibilities:</strong>
              </p>
              <ul style={{ listStyleType: "'➤ '" }}>
                <li>
                  ➤ Developed the complete application from end-to-end,
                  including design, development, and deployment.
                </li>
                <li>
                  ➤ Utilized .NET Core for backend development to create robust
                  and scalable web APIs.
                </li>
                <li>
                  ➤ Implemented frontend interfaces using React.js to ensure a
                  responsive and intuitive user experience.
                </li>
                <li>
                  ➤ Performed unit testing to ensure code quality and
                  reliability.
                </li>
                <li>
                  ➤ Collaborated with cross-functional teams, including
                  designers, QA testers, and project managers, to ensure timely
                  delivery of high-quality features.
                </li>
                <li>
                  ➤ Participated in code reviews to maintain coding standards
                  and improve code quality.
                </li>
                <li>
                  ➤ Maintained and updated the application, troubleshooting
                  issues, and implementing enhancements based on user feedback.
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Web Services</li>
                <li>Dotnet Web Api</li>
                <li>Microsoft Sql Server</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
             
            </header>
            <div className="body">
              <h3>Hotel Information Website</h3>
              <p>
                <strong>Role:</strong> Full Stack Developer
                <br />
                <strong>Project:</strong> Hotel Information System
                <br />
                <strong>Responsibilities:</strong>
              </p>
              <ul>
                <li>
                  ➤ Built a website that displays hotel details using Bootstrap
                  for responsive and clean frontend design.
                </li>
                <li>
                  ➤ Used Java Servlets to connect to a MySQL database,
                  retrieving and displaying hotel information dynamically.
                </li>
                <li>
                  ➤ Connected frontend and backend using JSP (JavaServer Pages)
                  for displaying content from the backend in the user interface.
                </li>
                <li>
                  ➤ Designed a simple database structure in MySQL to store and
                  manage hotel data.
                </li>
                <li>
                  ➤ Hosted the web application on a Tomcat server for easy
                  access and deployment.
                </li>
                <li>
                  ➤ Handled HTTP requests between the frontend and backend,
                  allowing users to view the latest hotel details.
                </li>
                <li>
                  ➤ Implemented basic CRUD (Create, Read, Update, Delete)
                  operations to manage hotel data stored in the MySQL database.
                </li>
                <li>
                  ➤ Worked with a team to ensure the application met all project
                  requirements and was user-friendly.
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>Bootstrap</li>
                <li>JSP</li>
                <li>Servlets</li>
                <li>MySQL</li>
                <li>Tomcat Server</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
