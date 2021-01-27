import React from "react";
import { AiFillGithub, AiOutlineChrome } from "react-icons/ai";
import Tooltip from "@material-ui/core/Tooltip";

function Project(props) {
  return (
    <div className="project_card">
      <div className="title">
        <h2>{props.project.title}</h2>
      </div>
      <div className="project_codes">
        <div className="gihub">
          <Tooltip title="Github Link">
            <a
              href={props.project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="target_icons"
            >
              <AiFillGithub size="2rem" style={{ color: "#556052" }} />
            </a>
          </Tooltip>
        </div>
        <div className="liveAt">
          <Tooltip title="Live At">
            <a
              href={props.project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={props.project.live.length === 0 ? "disabled" : ""}
            >
              <AiOutlineChrome size="2rem" style={{ color: "#556052" }} />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Project;
