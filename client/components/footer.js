import { FaGithub, FaLinkedin, FaCoffee } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <ul>
        <div className="footer-top">
          <li><a href="https://github.com/williamxmejia"><FaGithub className="resize-logo" /></a></li>
          <li><a href="https://www.linkedin.com/in/william-mejiadiaz"><FaLinkedin className="resize-logo"/></a></li>
          <li><a href="https://alumni.codeup.com/students/1521"><FaCoffee className="resize-logo"/></a></li>
        </div>
      </ul>
      <div className="footer-bottom">
        <p className="self-bottom"><a href="https://williammejia.com">William 2023</a></p>
      </div>
    </footer>
  );
}
