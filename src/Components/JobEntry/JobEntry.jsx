import React, {useState} from 'react';
import './JobEntry.css'

function JobEntry({ title, location, duration, description, bullets }) {
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
  
    return (
      <div className="job">

        <h3>{title}</h3>
        <p>{duration}</p>
        {!isCollapsed && (
          <div>
            <p>{location}</p>
            
            <p>{description}</p>
            <br></br>
            {bullets && bullets.length > 0 && (
            <ul className="bullet-list">
              {bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}
          </div>
        )}
        <button className="toggle-button" onClick={toggleCollapse}>
            {isCollapsed ? "Expand" : "Collapse"}
        </button>
      </div>
    );
  }
  
  export default JobEntry;