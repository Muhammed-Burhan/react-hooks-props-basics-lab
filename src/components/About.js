import React from "react";
import Links from "./Links";
function About(props) {
  const checkingBio = props.bio;

  return (
    <div id="about">
      <h2>About Me</h2>
      {checkingBio && checkingBio.length > 1 ? <p>{checkingBio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {<Links linkedin={props.links.linkedin} github={props.links.github} />}
    </div>
  );
}

export default About;
