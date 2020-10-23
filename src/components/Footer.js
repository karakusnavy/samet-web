import React from "react";
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMedium,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import PersonelLinks from "../constants/personalLinks";

function Footer() {
  return (
    <div className="footer">
      <div class="footer-copyright text-center">
        <h5>" I should probably stop writing quotes and get back to work. "</h5>
        <a href={PersonelLinks.twitter} target="_newblank">
          <AiOutlineTwitter />
        </a>
        <a href={PersonelLinks.github} target="_newblank">
          <AiFillGithub />
        </a>
        <a href={PersonelLinks.linkedin} target="_newblank">
          <AiFillLinkedin />
        </a>
        <a href={PersonelLinks.medium} target="_newblank">
          <AiOutlineMedium />
        </a>
        <a href={PersonelLinks.instagram} target="_newblank">
          <AiOutlineInstagram />
        </a>
        <a href={"mailto:" + PersonelLinks.mail} target="_newblank">
          <AiOutlineMail />
        </a>
      </div>
    </div>
  );
}

export default Footer;
