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
      <div className="customNav centeredFooter">
        <div className="container">
          <div className="row">
            <div className="col-sm-2 footerIcons">
              <a href={PersonelLinks.twitter} target="_newblank">
                <AiOutlineTwitter />
              </a>
            </div>
            <div className="col-sm-2 footerIcons">
              <a href={PersonelLinks.github} target="_newblank">
                <AiFillGithub />
              </a>
            </div>
            <div className="col-sm-2 footerIcons">
              <a href={PersonelLinks.linkedin} target="_newblank">
                <AiFillLinkedin />
              </a>
            </div>
            <div className="col-sm-2 footerIcons">
              <a href={PersonelLinks.medium} target="_newblank">
                <AiOutlineMedium />
              </a>
            </div>
            <div className="col-sm-2 footerIcons">
              <a href={PersonelLinks.instagram} target="_newblank">
                <AiOutlineInstagram />
              </a>
            </div>
            <div className="col-sm-2 footerIcons">
              <a href={"mailto:" + PersonelLinks.mail} target="_newblank">
                <AiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
