import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        {/* <div>
          <span>portfolio</span>
        </div> */}
        <div className="footer--items">
          <ul style={{cursor: 'pointer'}}>
            <li >
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="HeroSection"
                className="text-md"
                
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Credetials"
                className="text-md"
              >
                Credentials
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://github.com/ChaitanyaU17"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 .297C5.373.297 0 5.673 0 12.3c0 5.303 3.438 9.8 8.205 11.4.6.1.82-.261.82-.577 0-.286-.01-1.242-.015-2.25-3.338.724-4.043-1.607-4.043-1.607-.546-1.384-1.333-1.754-1.333-1.754-1.089-.745.083-.73.083-.73 1.205.084 1.837 1.236 1.837 1.236 1.067 1.828 2.803 1.298 3.49.992.109-.773.417-1.298.762-1.598-2.665-.303-5.466-1.333-5.466-5.933 0-1.313.467-2.385 1.235-3.22-.124-.303-.535-1.529.117-3.176 0 0 1.007-.322 3.303 1.23.96-.267 1.994-.4 3.021-.404 1.027.004 2.061.137 3.021.404 2.295-1.552 3.302-1.23 3.302-1.23.653 1.647.242 2.873.118 3.176.77.835 1.235 1.907 1.235 3.22 0 4.608-2.805 5.628-5.471 5.926.43.373.814 1.101.814 2.221 0 1.606-.014 2.902-.014 3.293 0 .316.218.676.825.577C20.565 22.1 24 17.603 24 12.3 24 5.673 18.627.297 12 .297z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/im_chaitanya17/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="white"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.0001 4.65479H11.3334C7.65152 4.65479 4.66675 7.63956 4.66675 11.3215V21.9881C4.66675 25.67 7.65152 28.6548 11.3334 28.6548H22.0001C25.6819 28.6548 28.6667 25.67 28.6667 21.9881V11.3215C28.6667 7.63956 25.6819 4.65479 22.0001 4.65479ZM26.3334 21.9881C26.3261 24.3783 24.3902 26.3141 22.0001 26.3215H11.3334C8.94321 26.3141 7.0074 24.3783 7.00008 21.9881V11.3215C7.0074 8.93125 8.94321 6.99544 11.3334 6.98812H22.0001C24.3902 6.99544 26.3261 8.93125 26.3334 11.3215V21.9881ZM23.0001 11.6548C23.7365 11.6548 24.3334 11.0578 24.3334 10.3215C24.3334 9.58508 23.7365 8.98812 23.0001 8.98812C22.2637 8.98812 21.6667 9.58508 21.6667 10.3215C21.6667 11.0578 22.2637 11.6548 23.0001 11.6548ZM16.6667 10.6548C13.353 10.6548 10.6667 13.3411 10.6667 16.6548C10.6667 19.9685 13.353 22.6548 16.6667 22.6548C19.9805 22.6548 22.6667 19.9685 22.6667 16.6548C22.6703 15.0624 22.0393 13.5342 20.9133 12.4082C19.7873 11.2822 18.2591 10.6512 16.6667 10.6548ZM13.0001 16.6548C13.0001 18.6799 14.6417 20.3215 16.6667 20.3215C18.6918 20.3215 20.3334 18.6799 20.3334 16.6548C20.3334 14.6297 18.6918 12.9881 16.6667 12.9881C14.6417 12.9881 13.0001 14.6297 13.0001 16.6548Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/CUmbarkar"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M23.635 4.999c-.885.392-1.83.655-2.827.775a4.933 4.933 0 002.165-2.724 9.866 9.866 0 01-3.127 1.2A4.916 4.916 0 0016.616 3c-2.716 0-4.918 2.203-4.918 4.917 0 .385.043.76.127 1.122A13.938 13.938 0 011.67 3.149 4.922 4.922 0 003.183 9.44a4.903 4.903 0 01-2.224-.616v.063c0 2.396 1.702 4.391 3.964 4.843a4.936 4.936 0 01-2.215.084c.623 1.95 2.433 3.37 4.571 3.41A9.866 9.866 0 010 18.54 13.934 13.934 0 007.548 21c9.053 0 14.005-7.485 14.005-13.95 0-.213-.005-.425-.014-.635A10.006 10.006 0 0024 4.498c-.873.387-1.81.646-2.785.76z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/chaitanya-umbarkar-32347023"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content"></p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
