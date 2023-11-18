// Header.js
import React, { useState } from "react";
import ReactDOM from "react-dom"; // Import ReactDOM
import Tabs from "../Components/Tabs";
import Tab from "../Components/Tab";
import { useNavigate } from "react-router-dom";
import { useModal } from "../Utils/ModalProvider";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const { openModal, closeModal, isModalOpen } = useModal();

  const handleTabChange = (tabId) => {
    navigate(tabId);
  };

  const [displayTabs, setDisplayTabs] = useState(true);

  const isMobile = window.innerWidth <= 450;

  const updateDisplayTabs = () => {
    setDisplayTabs(window.innerWidth > 450);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateDisplayTabs);
    return () => window.removeEventListener("resize", updateDisplayTabs);
  }, []);

  const modalRoot = document.getElementById("modal-root"); // Create a separate root for modals

  return (
    <div>
      {isMobile ? (
        <>
          <div className="hamberger">
            <button className="nav-btn" onClick={openModal}>
              <svg
                height="20"
                viewBox="0 0 512 512"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6s-11.462 25.6-25.6 25.6h-332.8c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128h-460.8c-14.138 0-25.6 11.463-25.6 25.6 0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6h-230.4c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z"></path>
              </svg>
            </button>
          </div>
          {isModalOpen &&
            ReactDOM.createPortal(
              <div className="modal">
                <div className="hamberger">
                  <button className="nav-btn" onClick={closeModal}>
                    <svg
                      height="20"
                      viewBox="0 0 329.26933 329"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      id="fi_1828778"
                    >
                      <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"></path>
                    </svg>
                  </button>
                </div>
                <div>
                  <div
                    className="menu-item"
                    onClick={() => {
                      handleTabChange("balaji-portfolio");
                      closeModal();
                    }}
                  >
                    Home
                  </div>
                  <div
                    className="menu-item"
                    onClick={() => {
                      handleTabChange("about-me");
                      closeModal();
                    }}
                  >
                    About Me
                  </div>
                  <div
                    className="menu-item"
                    onClick={() => {
                      handleTabChange("contact-me");
                      closeModal();
                    }}
                  >
                    Contact Me
                  </div>
                </div>
              </div>,
              modalRoot
            )}
        </>
      ) : (
        <Tabs defaultTab="balaji-portfolio" onChange={handleTabChange}>
          <Tab label="Home" value="balaji-portfolio" />
          <Tab label="About Me" value="about-me" />
          <Tab label="Contact Me" value="contact-me" />
        </Tabs>
      )}
    </div>
  );
}
