import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";




const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          <a
            href="https://github.com/HarshitJain1924"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon border-2 p-2 rounded-full hover:scale-120 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/HarshitJain1924/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon border-2 p-2 rounded-full hover:scale-120 transition-all duration-300"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/harshitjain1924/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon border-2 p-2 rounded-full hover:scale-120 transition-all duration-300" 
          >
            <SiGeeksforgeeks />
          </a>
          <a
            href="https://www.linkedin.com/in/harshitjain1924/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon border-2 p-2 rounded-full hover:scale-120 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Harshit Jain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
