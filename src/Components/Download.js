import React from "react";
import Resume from "../Static/Resume.pdf";
import Button from "@material-ui/core/Button";
import { BsDownload } from "react-icons/bs";

function Download() {
  return (
    <Button variant="contained" className="download_btn">
      <a href={Resume} download={true} className="download_link">
        <BsDownload className="download_icon" />
        CV
      </a>
    </Button>
  );
}

export default Download;
