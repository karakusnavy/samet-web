import React from "react";

function About() {
  return (
    <div className="container" style={{ padding: 10 }}>
       <h2>About</h2>
      <img
        src={require("../../assets/images/samet.png")}
        style={{ width: "100%" }}
      />
      <p style={{ padding: 10 }}>
        <strong
          style={{
            padding: 10,
            paddingLeft: 0,
          }}
        >
          ✋ Hello, I'm Samet Karakus. Life is all about how you set and execute
          your priorities.
        </strong>
        <br />
        When I started these things in 2015, I was just developing my desktop
        software 🧑‍💻. During my high school years, I developed freelance
        desktop applications and i earned money 👨🏻‍💻 = 💲. Freelance Software
        Development has made me able to experience the whole process besides
        improving my frontend skills 😎. As a result, I can make better time
        management and give accurate deadlines in freelance or contractor
        projects 👔.
        <br />
        At the moment I am software developing for i supported startups and I am
        mentoring software teams.
        <br />
        Also I am trying to share my knowledge and experience on my conferences.
      </p>
    </div>
  );
}

export default About;
