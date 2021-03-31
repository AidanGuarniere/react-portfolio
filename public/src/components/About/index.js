import React from "react";
import headshot from "../../assets/img/headshot-1.jpg"

function About() {
  return (
    <section>
      <h1>About Me</h1>
      <img
        src={headshot}
        alt="Aidan"
      />
      <p> lorem ipsum</p>
    </section>
  );
}

export default About;
