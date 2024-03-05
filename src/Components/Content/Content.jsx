import React, {useState} from "react"
import './Content.css'
import resume from '../../Documents/Resume.pdf'
import { FaFileDownload } from "react-icons/fa";
import JobEntry from "../JobEntry/JobEntry";
import { Link } from 'react-router-dom'

const onButtonClick = () => {
  const anchor = document.createElement('a');
  anchor.href = resume; // Use the imported PDF file
  anchor.download = 'ThomasHuffman-Resume.pdf'; // Change the filename as needed
  anchor.click();
};

function Content ({selected}) {
  const jobs = [
    {
      title: "Senior Systems Engineer, INTEGRITYOne Partners",
      location: "Fairfax, VA",
      duration: "(04/2020 – Present)",
      description: "As a software developer for the ICE TECS Modernization Program, Digital Records Management (DRM) system, responsible for frontend and backend development of the system.  The DRM system enables 100% digital case file management across the ~10K user Homeland Security Investigations (HSI) CONUS and OCONUS field locations.",
      bullets: [
        "Working with numerous Javascript libraries including React, Material UI, and Syncfusion in order to fulfill all HSI functional requirements while considering UX best practices to ensure a seamless experience for users looking to easily upload, organize, approve, and manage access, along with additional workflows",
        "Using GraphQL to save, present and manipulate data so that users are able to persist their changes in a PostgreSQL database",
        "Using Kafka to set up and manage systemwide notifications delivery functionality in a queue-based way",
        "Using Docker to build and run images in order to have a testing environment readily available to demonstrate new features to the client",
        "Developing, maintaining, and supporting continuous integration using Jenkins, in accordance with ICE Architecture Services Branch Enterprise CI/CD standards",
        "Performing unit testing for React functions using Jest in an effort to increase code coverage to meet client expectations",
        "Interacting directly with users and helping them troubleshoot potential bugs/issues with the system",
        "Writing and integrating python-based lambdas into the system in order to increase the serverless architecture",
        "Querying and manipulating databases using PostgreSQL",
        "Using Agile Scrum methodology including sprint planning, review, and retrospectives, velocity forecasting, story point sizing, team code reviews on a 7 person development team",
        "Using ICE Enterprise JIRA to develop tasks, groom the backlog and manage resources",
        "Working side-by-side 2-3x per week with clients to refine requirements, groom the backlog, prepare and run demo’s and user acceptance testing."
      ]
    },
    {
      title: "Software Developer, Pyramid Systems Inc.",
      location: "Fairfax, VA",
      duration: "(08/2018-04/2020)",
      description: "As a full stack Java developer, developed new features, deployed new releases, and fixed bugs for the InfoPass scheduling system. ",
      bullets: [
        "Worked on the National Appointment Scheduling System (NASS) Project which is a microservice based system used by the USCIS to schedule appointments across the United States",
        "Used Java, AngularJS, HTML5, and Oracle SQL to develop various scheduling features for web-based applications",
        "Worked in a DevOps role to deploy jars to various environments including test, performance, preprod, and production",
        "Experience using multiple frameworks including JUnit for testing, Hibernate for relational mapping, and JDBC for connecting to databases",
        "Designing, developing, and maintaining REST APIs using Java to maintain and manipulate data"
      ]
    },
    {
      title: "Software Developer Internship, BigBear Inc.",
      location: "Charlottesville, VA",
      duration: "(01/2018-05/2018)",
      description: "As junior developer, developed, reviewed, revised, and implemented UI/UX features for DOD system.",
      bullets: [
        "Found and fixed bugs using Eclipse in a Kanban development environment",
        "Created new features for Java-based applications used by the Department of Defense",
        "Worked collaboratively and independently on extensive projects in a 5-person team",
        "Worked in an Agile development environment using JIRA for task, resource, and velocity management"
      ]
    }
    // Add more job entries here
  ];
  // const [isExpCollapsed, setExpCollapsed] = useState(true)
  // const toggleExpCollapsed =()=>{
  //   setExpCollapsed(!isExpCollapsed);
  // }
    return <div>
          {/* <object width="100%" height="400" data={resume} type="application/pdf">   </object> */}
          {selected==="Resume" && <div><button className='download' >
          <FaFileDownload onClick={onButtonClick}>
          </FaFileDownload>
          </button>
          <div className="resume">
      <h2>Senior Systems Engineer, INTEGRITYOne Partners</h2>
      <p>
        As a software developer at INTEGRITYOne Partners, I bring five years of experience in Federal IT consulting, coupled with a Bachelor’s Degree in Computer Science. My expertise extends to working in an Agile environment at Immigration and Customs Enforcement (ICE), US Citizenship and Immigration Services (USCIS), and the Department of Defense (DoD).
      </p>

      <h2>Skills and Experience</h2>
      <div class="skills">
  <div class="skill">
    <p>AWS</p>
    <p>(3 years)</p>
  </div>
  <div class="skill">
    <p>Java</p>
    <p>(5 years)</p>
  </div>
  <div class="skill">
    <p>GraphQL</p>
    <p>(3 years)</p>
  </div>
  <div class="skill">
    <p>React</p>
    <p>(3 years)</p>
  </div>
  <div class="skill">
    <p>REST</p>
    <p>(2 years)</p>
  </div>
  <div class="skill">
    <p>SQL</p>
    <p>(3 years)</p>
  </div>
  <div class="skill">
    <p>Python</p>
    <p>(2 years)</p>
  </div>
  <div class="skill">
    <p>Kafka</p>
    <p>(2 years)</p>
  </div>
</div>
      {/* <div class="skills">
        <div class="skill">
          <p>AWS</p>
          <p>(3 years)</p>
        </div>
        <div class="skill">
          <p>Java</p>
          <p>(5 years)</p>
        </div>
        <div class="skills">
        <div class="skill">
          <p>GraphQL </p>
          <p>(3 years)</p>
        </div>
        <div class="skill">
          <p>React</p>
          <p>(3 years)</p>
        </div>
        <div class="skills">
        <div class="skill">
          <p>AWS</p>
          <p>(3 years)</p>
        </div>
        <div class="skill">
          <p>Java</p>
          <p>(5 years)</p>
        </div>
      </div> */}

      <h2>Professional Experience</h2>
      {jobs.map((job, index) => (
        <JobEntry
          key={index}
          title={job.title}
          location={job.location}
          duration={job.duration}
          description={job.description}
          bullets={job.bullets}
        />
      ))}


      <h2>Education</h2>
      <p>B.S. Computer Science, James Madison University, Harrisonburg, VA 05/2018</p>

      <h2>Clearances</h2>
      <p>DHS Public Trust, 6C Full BI, 2019</p>

      <h2>Certifications</h2>
      <p>National Security Telecommunications and Information System Security Instruction (NSTISSI) 4011</p>
      <p>AWS Certified Cloud Practitioner</p>
      <br></br>
      <br></br>
    </div>
          </div>
          }          
          {selected==="Github" &&
            <a href="https://github.com/thomashuffman">Github</a>
          }
          {selected==="Projects" &&
            <a href="https://thomashuffman.github.io/Versle1/">Versle</a>
          }
      </div>
}

export default Content