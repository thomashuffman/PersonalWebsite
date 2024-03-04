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
      title: "Software Developer, INTEGRITYOne Partners",
      location: "Fairfax, VA",
      duration: "(04/2020 – Present)",
      description: "As a software developer for the ICE TECS Modernization Program, Digital Records Management (DRM) system, responsible for frontend and backend development of the system.  The DRM system enables 100% digital case file management across the ~10K user Homeland Security Investigations (HSI) CONUS and OCONUS field locations.",
      bullets: [
        "Developed new features for the ICE TECS Modernization Program.",
        "Collaborated with team members to improve system performance.",
        "Maintained existing codebase and fixed bugs as necessary."
      ]
    },
    {
      title: "Software Developer, Pyramid Systems Inc.",
      location: "Fairfax, VA",
      duration: "08/2018-04/2020",
      description: "As a full stack Java developer, developed new features, deployed new releases, and fixed bugs for the InfoPass scheduling system. ",
      bullets: [
        "Developed new features for the ICE TECS Modernization Program.",
        "Collaborated with team members to improve system performance.",
        "Maintained existing codebase and fixed bugs as necessary."
      ]
    },
    {
      title: "Software Developer Internship, BigBear Inc.",
      location: "Charlottesville, VA",
      duration: "01/2018-05/2018",
      description: "As junior developer, developed, reviewed, revised, and implemented UI/UX features for DOD system.",
      bullets: [
        "Developed new features for the ICE TECS Modernization Program.",
        "Collaborated with team members to improve system performance.",
        "Maintained existing codebase and fixed bugs as necessary."
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