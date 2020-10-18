import React from "react";
import PersonelLinks from "../constants/personalLinks";

function HomeInformation() {
  return (
    <div className="container homeContainer">
      <div className="row">
        <h5>Welcome.</h5>
      </div>
      <p>
        Hi ✋, I am Samed, founder and developer of{" "}
        <a
          href="https://instagram.com/thebotanicca"
          target="_newblank"
          style={{ color: "rgb(77, 165, 42)", fontWeight: 600 }}
        >
          Botanicca
        </a>
        . I have been developing application as a freelance/(maybe fulltime) for
        6 years. Check out the open source projects I developed from{" "}
        <a href={PersonelLinks.github} target="_newblank">
          Github
        </a>{" "}
        profile. What I share, from my{" "}
        <a href={PersonelLinks.twitter} target="_newblank">
          Twitter
        </a>{" "}
        and{" "}
        <a href={PersonelLinks.instagram} target="_newblank">
          Instagram
        </a>{" "}
        profile.
      </p>
    </div>
  );
}

export default HomeInformation;
