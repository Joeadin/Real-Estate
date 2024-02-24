import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import React from "react";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="padding innerwidth flexCenter c-container">
        {/* Left Side */}
        <div className="c-left">
          <span className="orangeText">Our Contacts</span> <br />
          <span className="primaryText">Reach Us Effortlessly</span> <br />
          <span className="secondaryText">
            We always ready to help by providing the best services as we believe
            a good place to live can make your life better
          </span>

          <div className="flexColStart contactModes">
            {/* first Row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">call</span>
                    <span className="secondaryText">+254 712345678</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* second mode */}
              <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <BsFillChatDotsFill size={25} />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Chat</span>
                  <span className="secondaryText">+254 712345678</span>
                </div>
              </div>
              <div className="flexCenter button">Chat Now</div>
            </div>

            </div>

            {/* second Row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">+254 712345678</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>

              {/* second mode */}
              <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <BsFillChatDotsFill size={25} />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Message</span>
                  <span className="secondaryText">+254 712345678</span>
                </div>
              </div>
              <div className="flexCenter button">Message Now</div>
            </div>

            </div>

          </div>
        </div>

        {/* Right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./hero-image.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
