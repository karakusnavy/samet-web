import React from "react";
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMedium,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

function Footer() {
  return (
    <div class="footer">
      <div className="customNav centeredFooter">
        <div className="container">          
          <div className="row">
            <div className="col-sm-2 footerIcons">
              <AiOutlineTwitter />
            </div>
            <div className="col-sm-2 footerIcons">
              <AiFillGithub />
            </div>
            <div className="col-sm-2 footerIcons">
              <AiFillLinkedin />
            </div>
            <div className="col-sm-2 footerIcons">
              <AiOutlineMedium />
            </div>
            <div className="col-sm-2 footerIcons">
              <AiOutlineInstagram />
            </div>
            <div className="col-sm-2 footerIcons">
              <AiOutlineMail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
