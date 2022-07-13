import React from "react";

export default function Resume() {
  return (
    <div className="brassborder darkbg p-2 shadow">
      <h1>Resume</h1>
      <a
        className="w-100 alight-text-center"
        href="https://www.dropbox.com/scl/fi/hg49aeizte1259dw3n69g/2022-07-13-Jd-Rogers-Resume2022.docx?dl=0&rlkey=u6pok1884d7aolmjh3kc22wmm"
      >
        Download Resume
      </a>
      <div className="d-flex justify-content-center">
        <img src={process.env.PUBLIC_URL + "Resume2022.jpg"}></img>
      </div>
    </div>
  );
}
