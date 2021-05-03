import React from "react";

function ResumeContent(props) {
  return (
    <div className="resume-item">
      <h1 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h1>
      <p className="p-desc" style={{color:"#308E9A"}}>
        <em>{props.date}</em>
      </p>
      <ul>
        {props.content.map((value, index) => (
          <li className="p-desc" key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeContent;
